package com.psi.training.nexacro.xapi.api.mapper;

import com.psi.training.nexacro.xapi.entity.entity.SupplierEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SupplierMapper {
    List<SupplierEntity> getSuppliers(Map<String, String> data, String offset, String limit);
}
