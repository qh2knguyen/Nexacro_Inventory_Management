package com.psi.training.nexacro.xapi.api.controller;

import com.psi.training.nexacro.xapi.entity.response.ColumnEntity;
import com.psi.training.nexacro.xapi.entity.response.Dataset;
import com.psi.training.nexacro.xapi.entity.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;

@Controller
@RequestMapping("supplier")
public class SupplierImageController {
    private static final long MAX_IMAGE_SIZE = 5 * 1024 * 1024;
    private static final String IMAGE_FILE_PATTERN =
            "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.(png|jpg)";

    @Value("${app.supplier.image-dir:uploads/suppliers}")
    private String imageDirectory;

    /** FileUpTransfer sends multipart/form-data, not a Nexacro dsInput. */
    @PostMapping("/upload-image")
    public String uploadImage(MultipartHttpServletRequest request, Model model) {
        try {
            Map<String, MultipartFile> files = request.getFileMap();
            if (files.size() != 1) {
                throw new IllegalArgumentException("Please select exactly one supplier image.");
            }
            MultipartFile file = files.values().iterator().next();
            if (file.isEmpty() || file.getSize() > MAX_IMAGE_SIZE) {
                throw new IllegalArgumentException("Image must not be empty or exceed 5 MB.");
            }
            String contentType = file.getContentType();
            if (!"image/png".equalsIgnoreCase(contentType)
                    && !"image/jpeg".equalsIgnoreCase(contentType)) {
                throw new IllegalArgumentException("Only PNG and JPEG images are supported.");
            }
            // Decode to reject files that are not actually valid images.
            byte[] bytes = file.getBytes();
            BufferedImage image = ImageIO.read(new ByteArrayInputStream(bytes));
            if (image == null || image.getWidth() > 5000 || image.getHeight() > 5000) {
                throw new IllegalArgumentException("Invalid image or dimensions exceed 5000 pixels.");
            }
            String extension = "image/png".equalsIgnoreCase(contentType) ? ".png" : ".jpg";
            String filename = UUID.randomUUID() + extension;
            Path root = Paths.get(imageDirectory).toAbsolutePath().normalize();
            Files.createDirectories(root);
            Files.write(root.resolve(filename), bytes);
            String imageUrl = "/supplier/images/" + filename;

            ColumnEntity column = new ColumnEntity();
            column.setId("imageUrl");
            column.setType("STRING");
            column.setSize("256");
            Dataset dataset = new Dataset();
            dataset.setId("IDDataset");
            dataset.setColumns(Collections.singletonList(column));
            dataset.setRows(Collections.singletonList(Collections.singletonMap("imageUrl", imageUrl)));
            model.addAttribute("data", new ResponseEntity(0, "SUCCESS",
                    Collections.singletonList(dataset)));
        } catch (IllegalArgumentException ex) {
            model.addAttribute("data", new ResponseEntity(-1, ex.getMessage(), new ArrayList<>()));
        } catch (IOException ex) {
            model.addAttribute("data", new ResponseEntity(-1, "Unable to store image.", new ArrayList<>()));
        }
        return "nexacroView";
    }

    @GetMapping("/images/{filename:.+}")
    public org.springframework.http.ResponseEntity<Resource> image(@PathVariable("filename") String filename) {
        if (!filename.matches(IMAGE_FILE_PATTERN)) {
            return org.springframework.http.ResponseEntity.notFound().build();
        }
        Path root = Paths.get(imageDirectory).toAbsolutePath().normalize();
        Path file = root.resolve(filename).normalize();
        if (!file.startsWith(root) || !Files.isRegularFile(file)) {
            return org.springframework.http.ResponseEntity.notFound().build();
        }
        MediaType mediaType = filename.endsWith(".png") ? MediaType.IMAGE_PNG : MediaType.IMAGE_JPEG;
        return org.springframework.http.ResponseEntity.ok()
                .contentType(mediaType)
                .body(new FileSystemResource(file));
    }
}
