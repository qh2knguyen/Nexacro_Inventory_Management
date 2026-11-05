package com.psi.training.nexacro.xapi.api.mapper;

import com.psi.training.nexacro.xapi.entity.entity.SupplierCreateEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierOptionEntity;
import com.psi.training.nexacro.xapi.entity.entity.SupplierSearchEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SupplierMapper {
    List<SupplierEntity> getSuppliers(SupplierSearchEntity data);

    List<SupplierOptionEntity> getCategories();
    List<SupplierOptionEntity> getProductsByCategory(@Param("categoryId") long categoryId);
    boolean isProductInCategory(@Param("productId") long productId,
                                @Param("categoryId") long categoryId);

    int insertSupplier(SupplierCreateEntity supplier);
    int insertProductSupplier(SupplierCreateEntity supplier);
}
