package com.psi.training.nexacro.xapi.api.service;

import com.psi.training.nexacro.xapi.api.mapper.SupplierMapper;
import com.psi.training.nexacro.xapi.common.NexacroConvert;
import com.psi.training.nexacro.xapi.entity.entity.SupplierCreateEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierOptionEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierSearchEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class SupplierService {
    @Autowired
    private SupplierMapper supplierMapper;

    // Existing search implementation (kept compatible).
    public List<Map<String, String>> getSuppliers(Map<String, String> data, String offset, String limit) {
        List<Map<String, String>> rows = new ArrayList<>();
        SupplierSearchEntity filter = new SupplierSearchEntity();
        if (data != null) {
            filter.setSearch(data.get("search"));
            filter.setReturnPolicy(data.get("returnPolicy"));
            filter.setOnlyOnTheWay(data.get("onlyOnTheWay"));
        }
        filter.setOffset(Integer.parseInt(offset));
        filter.setLimit(Integer.parseInt(limit));

        List<SupplierEntity> suppliers = supplierMapper.getSuppliers(filter);
        for (SupplierEntity supplier : suppliers) {
            rows.add(NexacroConvert.convertObjectToMap(supplier));
        }
        return rows;
    }

    public List<Map<String, String>> getCategories() {
        return toRows(supplierMapper.getCategories());
    }

    public List<Map<String, String>> getProductsByCategory(Map<String, String> data) {
        long categoryId = parsePositiveId(data.get("categoryId"), "Category");
        return toRows(supplierMapper.getProductsByCategory(categoryId));
    }

    private List<Map<String, String>> toRows(List<SupplierOptionEntity> options) {
        List<Map<String, String>> rows = new ArrayList<>();
        for (SupplierOptionEntity option : options) {
            rows.add(NexacroConvert.convertObjectToMap(option));
        }
        return rows;
    }

    @Transactional
    public long createSupplier(Map<String, String> data) {
        if (data == null) {
            throw new IllegalArgumentException("Missing supplier input dataset.");
        }

        SupplierCreateEntity supplier = new SupplierCreateEntity();
        String supplierName = trim(data.get("supplierName"));
        String contactNumber = trim(data.get("contactNumber"));
        String returnPolicy = trim(data.get("returnPolicy"));
        String imageUrl = trim(data.get("imageUrl"));
        String productIdText = trim(data.get("productId"));
        String categoryIdText = trim(data.get("categoryId"));
        String priceText = trim(data.get("buyingPrice"));

        if (supplierName.isEmpty() || supplierName.length() > 150) {
            throw new IllegalArgumentException("Supplier Name is required (max 150 characters).");
        }
        if (contactNumber.isEmpty() || contactNumber.length() > 50) {
            throw new IllegalArgumentException("Contact Number is required (max 50 characters).");
        }
        if (!"taking_return".equals(returnPolicy) && !"not_taking_return".equals(returnPolicy)) {
            throw new IllegalArgumentException("Please select a valid return policy.");
        }
        if (!imageUrl.isEmpty() && !imageUrl.matches(
                "^/supplier/images/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.(png|jpg)$")) {
            throw new IllegalArgumentException("Invalid supplier image URL.");
        }

        supplier.setSupplierName(supplierName);
        supplier.setContactNumber(contactNumber);
        supplier.setReturnPolicy(returnPolicy);
        supplier.setImageUrl(imageUrl.isEmpty() ? null : imageUrl);
        // New Supplier form does not have an email input yet.
        supplier.setEmail(null);

        boolean hasProductInfo = !productIdText.isEmpty() || !categoryIdText.isEmpty() || !priceText.isEmpty();
        if (hasProductInfo) {
            if (productIdText.isEmpty() || categoryIdText.isEmpty() || priceText.isEmpty()) {
                throw new IllegalArgumentException("Category, Product and Buying Price must be provided together.");
            }
            long productId = parsePositiveId(productIdText, "Product");
            long categoryId = parsePositiveId(categoryIdText, "Category");
            if (!supplierMapper.isProductInCategory(productId, categoryId)) {
                throw new IllegalArgumentException("Product does not belong to the selected Category.");
            }
            if (!priceText.matches("^(?:0|[1-9][0-9]*)(?:\\.[0-9]{1,2})?$")) {
                throw new IllegalArgumentException("Buying Price must be a positive decimal (max 2 decimal places).");
            }
            BigDecimal buyingPrice;
            try {
                buyingPrice = new BigDecimal(priceText);
            } catch (NumberFormatException ex) {
                throw new IllegalArgumentException("Buying Price must be a number.");
            }
            if (buyingPrice.signum() <= 0 || buyingPrice.scale() > 2 || buyingPrice.precision() > 14) {
                throw new IllegalArgumentException("Buying Price must be positive and have at most 2 decimal places.");
            }
            supplier.setCategoryId(categoryId);
            supplier.setProductId(productId);
            supplier.setBuyingPrice(buyingPrice);
        }

        if (supplierMapper.insertSupplier(supplier) != 1 || supplier.getSupplierId() == null) {
            throw new IllegalStateException("Unable to insert supplier.");
        }
        if (hasProductInfo && supplierMapper.insertProductSupplier(supplier) != 1) {
            throw new IllegalStateException("Unable to assign product to supplier.");
        }
        return supplier.getSupplierId();
    }

    private String trim(String value) {
        return value == null ? "" : value.trim();
    }

    private long parsePositiveId(String value, String field) {
        try {
            long id = Long.parseLong(value);
            if (id > 0) return id;
        } catch (NumberFormatException ignored) {
            // Validation error below.
        }
        throw new IllegalArgumentException(field + " is invalid.");
    }
}
