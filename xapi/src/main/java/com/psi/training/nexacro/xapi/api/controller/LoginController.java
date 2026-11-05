package com.psi.training.nexacro.xapi.api.controller;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformException;
import com.psi.training.nexacro.xapi.api.service.UserService;
import com.psi.training.nexacro.xapi.common.NexacroConvert;
import com.psi.training.nexacro.xapi.entity.response.ColumnEntity;
import com.psi.training.nexacro.xapi.entity.response.Dataset;
import com.psi.training.nexacro.xapi.entity.response.ResponseEntity;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(HttpServletRequest request, Model model) throws IOException, PlatformException {
        DataSet dataSet = NexacroConvert.getRequestData(request, "dsInput");
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);

        Map<String, Object> result = new HashMap<>();
        if (requestBody.size() != 0) {
            result = userService.login(requestBody.get(0));
        } else {
            result = userService.login(Collections.emptyMap());
        }

        if (result.getOrDefault("code", 1).equals(0)) {
            HttpSession session = request.getSession(true);
            session.setAttribute("LOGIN_USER", result);
        }

        buildResponse(model, result, "ResultDataset");
        return "nexacroView";
    }

    @PostMapping("/register")
    public String register(HttpServletRequest request, Model model) throws IOException, PlatformException {
        DataSet dataSet = NexacroConvert.getRequestData(request, "dsInput");
        List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);

        Map<String, Object> result = new HashMap<>();
        if (requestBody.size() != 0) {
            result = userService.register(requestBody.get(0));
        } else {
            result = userService.register(Collections.emptyMap());
        }

        buildResponse(model, result, "ResultDataset");
        return "nexacroView";
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession(false);
        Map<String, Object> result = new HashMap<>();

        if (session == null) {
            result.put("code", 1);
            result.put("message", "NO_SESSION");
        } else {
            session.removeAttribute("LOGIN_USER");
            session.invalidate();
            result.put("code", 0);
            result.put("message", "LOGOUT_SUCCESS");
        }

        buildResponse(model, result, "ResultDataset");
        return "nexacroView";
    }

    private void buildResponse(Model model, Map<String, Object> result, String datasetId) {
        List<ColumnEntity> columns = new ArrayList<>();
        String[] ids = {"code", "message", "username", "email"};

        for (String id : ids) {
            ColumnEntity column = new ColumnEntity();
            column.setId(id);
            column.setType("STRING");
            column.setSize("256");
            columns.add(column);
        }

        List<Map<String, String>> rows = new ArrayList<>();
        Map<String, String> row = new HashMap<>();
        row.put("code", String.valueOf(result.getOrDefault("code", 0)));
        row.put("message", String.valueOf(result.getOrDefault("message", "")));
        row.put("username", String.valueOf(result.getOrDefault("username", "")));
        row.put("email", String.valueOf(result.getOrDefault("email", "")));
        rows.add(row);

        List<Dataset> datasets = new ArrayList<>();
        Dataset dataset = new Dataset();
        dataset.setId(datasetId);
        dataset.setColumns(columns);
        dataset.setRows(rows);
        datasets.add(dataset);

        ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
        model.addAttribute("data", entity);
    }
}
