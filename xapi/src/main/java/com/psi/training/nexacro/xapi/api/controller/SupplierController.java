package com.psi.training.nexacro.xapi.api.controller;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformException;
import com.psi.training.nexacro.xapi.api.service.SupplierService;
import com.psi.training.nexacro.xapi.common.NexacroConvert;
import com.psi.training.nexacro.xapi.entity.entity.SearchListRequestData;
import com.psi.training.nexacro.xapi.entity.entity.SupplierEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierOptionEntity;
import com.psi.training.nexacro.xapi.entity.response.ColumnEntity;
import com.psi.training.nexacro.xapi.entity.response.Dataset;
import com.psi.training.nexacro.xapi.entity.response.ResponseEntity;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("supplier")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    // Existing supplier list + paging endpoint.
    @PostMapping("")
    public String getSuppliers(HttpServletRequest request, Model model) throws IOException, PlatformException {
        SearchListRequestData req = NexacroConvert.getRequestSearchData(request, "dsInput");
        List<Map<String, String>> body = NexacroConvert.convertDatasetToListMap(req.getDsInput());
        List<Map<String, String>> suppliers = supplierService.getSuppliers(
                body.isEmpty() ? null : body.get(0), req.getOffset(), req.getLimit());
        success(model, suppliers, NexacroConvert.convertEntityToColumn(new SupplierEntity()));
        return "nexacroView";
    }

    @PostMapping("/categories")
    public String getCategories(Model model) {
        success(model, supplierService.getCategories(),
                NexacroConvert.convertEntityToColumn(new SupplierOptionEntity()));
        return "nexacroView";
    }

    @PostMapping("/products")
    public String getProducts(HttpServletRequest request, Model model) {
        try {
            Map<String, String> row = requireOneRow(request);
            success(model, supplierService.getProductsByCategory(row),
                    NexacroConvert.convertEntityToColumn(new SupplierOptionEntity()));
        } catch (IllegalArgumentException ex) {
            error(model, ex.getMessage());
        } catch (Exception ex) {
            error(model, "Unable to load products.");
        }
        return "nexacroView";
    }

    @PostMapping("/add")
    public String addSupplier(HttpServletRequest request, Model model) {
        try {
            long supplierId = supplierService.createSupplier(requireOneRow(request));
            ColumnEntity column = new ColumnEntity();
            column.setId("supplierId");
            column.setType("STRING");
            column.setSize("32");
            success(model, Collections.singletonList(
                    Collections.singletonMap("supplierId", Long.toString(supplierId))),
                    Collections.singletonList(column));
        } catch (IllegalArgumentException ex) {
            error(model, ex.getMessage());
        } catch (Exception ex) {
            // Log ex in your application's logging system, but don't leak SQL details.
            error(model, "Cannot create supplier. Please check the data and try again.");
        }
        return "nexacroView";
    }

    private Map<String, String> requireOneRow(HttpServletRequest request) {
        DataSet input = NexacroConvert.getRequestData(request, "dsInput");
        if (input == null || input.getRowCount() != 1) {
            throw new IllegalArgumentException("Supplier request must contain one dsInput row.");
        }
        return NexacroConvert.convertDatasetToListMap(input).get(0);
    }

    private void success(Model model, List<Map<String, String>> rows, List<ColumnEntity> columns) {
        Dataset dataset = new Dataset();
        dataset.setId("IDDataset");
        dataset.setColumns(columns);
        dataset.setRows(rows);
        List<Dataset> datasets = new ArrayList<>();
        datasets.add(dataset);
        model.addAttribute("data", new ResponseEntity(0, "SUCCESS", datasets));
    }

    private void error(Model model, String message) {
        model.addAttribute("data", new ResponseEntity(-1, message, new ArrayList<>()));
    }
}
