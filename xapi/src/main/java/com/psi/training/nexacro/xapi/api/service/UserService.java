package com.psi.training.nexacro.xapi.api.service;

import com.psi.training.nexacro.xapi.api.mapper.UserMapper;
import com.psi.training.nexacro.xapi.entity.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    private static final Map<String, UserEntity> memoryUsers = new HashMap<>();

    public Map<String, Object> register(Map<String, String> request) {
        String username = trimToNull(request.get("username"));
        String password = trimToNull(request.get("password"));
        String email = trimToNull(request.get("email"));

        if (username == null || password == null || email == null) {
            return response(1, "username, password, email are required");
        }

        try {
            if (userMapper.countByUsername(username) > 0) {
                return response(1, "Username already exists");
            }
            if (userMapper.countByEmail(email) > 0) {
                return response(1, "Email already exists");
            }
        } catch (Exception e) {
            if (memoryUsers.containsKey(username)) {
                return response(1, "Username already exists");
            }
            for (UserEntity item : memoryUsers.values()) {
                if (email.equalsIgnoreCase(item.getEmail())) {
                    return response(1, "Email already exists");
                }
            }
        }

        UserEntity user = new UserEntity();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());

        try {
            userMapper.insert(user);
        } catch (Exception e) {
            memoryUsers.put(username, user);
        }

        return response(0, "SUCCESS");
    }

    public Map<String, Object> login(Map<String, String> request) {
        String email = trimToNull(request.get("email"));
        String password = trimToNull(request.get("password"));

        if (email == null || password == null) {
            return response(1, "email and password are required");
        }

        UserEntity user = null;
        try {
            user = userMapper.findByEmail(email);
        } catch (Exception e) {
            for (UserEntity item : memoryUsers.values()) {
                if (email.equalsIgnoreCase(item.getEmail())) {
                    user = item;
                    break;
                }
            }
        }

        if (user == null) {
            return response(1, "User not found");
        }

        if (!password.equals(user.getPassword())) {
            return response(1, "Invalid password");
        }

        Map<String, Object> response = response(0, "SUCCESS");
        response.put("username", user.getUsername());
        response.put("email", user.getEmail());
        return response;
    }

    private Map<String, Object> response(int code, String message) {
        Map<String, Object> map = new HashMap<>();
        map.put("code", code);
        map.put("message", message);
        return map;
    }

    private String trimToNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}
