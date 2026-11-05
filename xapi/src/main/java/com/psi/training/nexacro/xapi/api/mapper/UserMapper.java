package com.psi.training.nexacro.xapi.api.mapper;

import com.psi.training.nexacro.xapi.entity.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface UserMapper {
    int countByUsername(String username);
    int countByEmail(String email);
    int insert(UserEntity user);
    UserEntity findByUsername(String username);
    UserEntity findByEmail(String email);
}
