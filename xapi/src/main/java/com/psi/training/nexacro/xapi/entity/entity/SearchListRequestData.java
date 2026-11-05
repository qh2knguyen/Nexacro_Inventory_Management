package com.psi.training.nexacro.xapi.entity.entity;

import com.nexacro.java.xapi.data.DataSet;

public class SearchListRequestData {
  private String offset;
  private String limit;
  private DataSet dsInput;
  
  public String getOffset() {
    return offset;
  }
  public void setOffset(String offset) {
    this.offset = offset;
  }
  public String getLimit() {
    return limit;
  }
  public void setLimit(String limit) {
    this.limit = limit;
  }
  public DataSet getDsInput() {
    return dsInput;
  }
  public void setDsInput(DataSet dsInput) {
    this.dsInput = dsInput;
  }
}
