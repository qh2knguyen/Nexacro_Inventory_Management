package com.psi.training.nexacro.xapi.api.controller;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformException;
import com.psi.training.nexacro.xapi.api.service.SupplierService;
import com.psi.training.nexacro.xapi.common.NexacroConvert;
import com.psi.training.nexacro.xapi.entity.entity.SearchListRequestData;
import com.psi.training.nexacro.xapi.entity.entity.SupplierEntity;
import com.psi.training.nexacro.xapi.entity.response.ColumnEntity;
import com.psi.training.nexacro.xapi.entity.response.Dataset;
import com.psi.training.nexacro.xapi.entity.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.servlet.http.HttpServletRequest;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("supplier")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @PostMapping("")
    public String getSuppliers (HttpServletRequest request, Model model) throws IOException, PlatformException {

        List<Map<String, String>> suppliers = new ArrayList<>();
        SearchListRequestData req = NexacroConvert.getRequestSearchData(request,"dsInput");
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(req.getDsInput());

        if (requestBody.size() != 0) {
            suppliers = supplierService.getSuppliers(requestBody.get(0), req.getOffset(), req.getLimit());
        } else {
            suppliers = supplierService.getSuppliers(null, req.getOffset(), req.getLimit());
        }

        List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new SupplierEntity());

        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setColumns(columns);
        dataset.setRows(suppliers);
        dataset.setId("IDDataset");

        datasets.add(dataset);
        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);

        return "nexacroView";
    }

}
