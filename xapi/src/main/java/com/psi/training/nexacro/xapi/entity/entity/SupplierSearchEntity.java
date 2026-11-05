package com.psi.training.nexacro.xapi.entity.entity;

public class SupplierSearchEntity {
  private String search;
  private String returnPolicy;
  private String onlyOnTheWay;
  private int limit;
  private int offset;

  public String getSearch() {
    return search;
  }

  public void setSearch(String search) {
    this.search = search;
  }

  public String getReturnPolicy() {
    return returnPolicy;
  }

  public void setReturnPolicy(String returnPolicy) {
    this.returnPolicy = returnPolicy;
  }

  public String getOnlyOnTheWay() {
    return onlyOnTheWay;
  }

  public void setOnlyOnTheWay(String onlyOnTheWay) {
    this.onlyOnTheWay = onlyOnTheWay;
  }

  public int getLimit() {
    return limit;
  }

  public void setLimit(int limit) {
    this.limit = limit;
  }

  public int getOffset() {
    return offset;
  }

  public void setOffset(int offset) {
    this.offset = offset;
  }
}
