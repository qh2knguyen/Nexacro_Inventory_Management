package com.psi.training.nexacro.xapi.entity.entity;

public class SupplierEntity {

    private int supplierId;
    private String supplierName;
    private String product;
    private String contactNumber;
    private String email;
    private String returnPolicy;
    private String onTheWay;
    private String totalRows;
    private int offset;
    private int limit;

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(int supplierId) {
        this.supplierId = supplierId;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getReturnPolicy() {
        return returnPolicy;
    }

    public void setReturnPolicy(String returnPolicy) {
        this.returnPolicy = returnPolicy;
    }

    public String getOnTheWay() {
        return onTheWay;
    }

    public void setOnTheWay(String onTheWay) {
        this.onTheWay = onTheWay;
    }

    public String getTotalRows() {
        return totalRows;
    }

    public void setTotalRows(String totalRows) {
        this.totalRows = totalRows;
    }
}