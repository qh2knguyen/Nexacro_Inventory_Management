package com.psi.training.nexacro.xapi.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.Variable;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.psi.training.nexacro.xapi.entity.entity.SearchListRequestData;
import com.psi.training.nexacro.xapi.entity.response.ColumnEntity;
import jakarta.servlet.http.HttpServletRequest;


import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class NexacroConvert {

    private static final int DEFAULT_PAGE = 1;
    private static final int DEFAULT_PAGE_SIZE = 10;
    private static final int MAX_PAGE_SIZE = 500;

    public static SearchListRequestData getRequestSearchData(HttpServletRequest request, String dataSetData) {
        try {
            SearchListRequestData requestData = new SearchListRequestData();
            DataSet ds = null;

            InputStream inputStream = request.getInputStream();
            HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(inputStream);
            httpPlatformRequest.receiveData();
            PlatformData data = httpPlatformRequest.getData();

            if (dataSetData != null && !dataSetData.isEmpty()) {
                ds = data.getDataSetList().get(dataSetData);
            }

            VariableList variableList = data.getVariableList();

            int page = getPositiveInt(variableList, "page", DEFAULT_PAGE);
            int pageSize = Math.min(getPositiveInt(variableList, "page_size", DEFAULT_PAGE_SIZE), MAX_PAGE_SIZE);

            int limit = pageSize;
            int offset = (page - 1) * pageSize;

            requestData.setOffset(Integer.toString(offset));
            requestData.setLimit(Integer.toString(limit));
            requestData.setDsInput(ds);
            return requestData;
        } catch (Exception e) {
            throw new IllegalStateException("Cannot parse Nexacro search request", e);
        }
    }

    private static int getPositiveInt(VariableList variableList, String name, int defaultValue) {
        Variable variable = variableList.get(name);
        if (variable == null) {
            return defaultValue;
        }
        String value = variable.getString();
        if (value == null || value.trim().isEmpty()) {
            return defaultValue;
        }
        try {
            int number = Integer.parseInt(value.trim());
            return number > 0 ? number : defaultValue;
        } catch (NumberFormatException e) {
            return defaultValue;
        }
    }

    public static DataSet getRequestData(HttpServletRequest request, String dataSetData) {
        try {
            InputStream inputStream = request.getInputStream();
            HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(inputStream);

            // receive data
            httpPlatformRequest.receiveData();
            PlatformData data = httpPlatformRequest.getData();
            return data.getDataSetList().get(dataSetData);
        } catch (Exception e) {
            return null;
        }
    }
    public static List<Map<String, String>> convertDatasetToListMap(DataSet dataSet) {
        List<Map<String, String>> rs = new ArrayList();

        if (dataSet !=  null) {
            int rowSize = dataSet.getRowCount();

            for (int i = 0; i < rowSize; i++) {
                Map<String, String> row = dataSet.getRowToMap(i);
                rs.add(row);
            }
        }
        return rs;
    }

    public static Map<String, String> convertObjectToMap(Object object) {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.convertValue(object, Map.class);
    }

    public static List<ColumnEntity> convertEntityToColumn(Object object) {
        List<ColumnEntity> columnEntities = new ArrayList<>();
        Map<String, String> objectMap = convertObjectToMap(object);

        for (Map.Entry<String, String> om: objectMap.entrySet()) {
            ColumnEntity columnEntity = new ColumnEntity();
            columnEntity.setId(om.getKey());
            columnEntity.setType("STRING");
            columnEntity.setSize("256");
            columnEntities.add(columnEntity);
        }

        return columnEntities;
    }

}