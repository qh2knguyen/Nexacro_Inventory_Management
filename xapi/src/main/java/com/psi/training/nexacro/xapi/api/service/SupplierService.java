package com.psi.training.nexacro.xapi.api.service;

import com.psi.training.nexacro.xapi.api.mapper.SupplierMapper;
import com.psi.training.nexacro.xapi.common.NexacroConvert;
import com.psi.training.nexacro.xapi.entity.entity.SupplierEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class SupplierService {
    @Autowired
    private SupplierMapper supplierMapper;

    public List<Map<String, String>> getSuppliers(Map<String, String> data, String offset, String limit) {
        List<Map<String, String>> rows = new ArrayList<>();

        SupplierEntity supplierEntity = new SupplierEntity();
        
        if (data != null) {
            
        }
        supplierEntity.setOffset(Integer.parseInt(offset));
        supplierEntity.setLimit(Integer.parseInt(limit));
        
        List<SupplierEntity> supplierEntities = supplierMapper.getSuppliers(data, offset, limit);
        for (SupplierEntity supplier : supplierEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(supplier);
            rows.add(row);
        }

        return rows;
    }
}
