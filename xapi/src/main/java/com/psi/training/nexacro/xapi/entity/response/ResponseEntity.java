package com.psi.training.nexacro.xapi.entity.response;

import java.util.List;

public class ResponseEntity {

    private int code;
    private String message;
    private List<Dataset> datasets;

    public ResponseEntity() {
    }

    public ResponseEntity(int code,
                          String message,
                          List<Dataset> datasets) {
        this.code = code;
        this.message = message;
        this.datasets = datasets;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Dataset> getDatasets() {
        return datasets;
    }

    public void setDatasets(List<Dataset> datasets) {
        this.datasets = datasets;
    }
}