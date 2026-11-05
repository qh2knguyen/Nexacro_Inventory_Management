package com.psi.training.nexacro.xapi.api.controller;

import com.psi.training.nexacro.xapi.api.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Map;

import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@SpringBootTest
@AutoConfigureMockMvc
class LoginControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void register_shouldReturnNexacroView() throws Exception {
        when(userService.register(anyMap())).thenReturn(Map.of(
                "code", 0,
                "message", "SUCCESS"
        ));

        mockMvc.perform(post("/login/register"))
                .andExpect(status().isOk())
                .andExpect(view().name("nexacroView"))
                .andExpect(model().attributeExists("data"));
    }

    @Test
    void login_shouldReturnNexacroView() throws Exception {
        when(userService.login(anyMap())).thenReturn(Map.of(
                "code", 0,
                "message", "SUCCESS",
                "username", "admin",
                "email", "admin@test.com"
        ));

        MockHttpSession session = new MockHttpSession();

        mockMvc.perform(post("/login/login").session(session))
                .andExpect(status().isOk())
                .andExpect(view().name("nexacroView"))
                .andExpect(model().attributeExists("data"));

        assert session.getAttribute("LOGIN_USER") != null;
    }

    @Test
    void logout_shouldInvalidateSession() throws Exception {
        MockHttpSession session = new MockHttpSession();
        session.setAttribute("LOGIN_USER", Map.of("username", "admin", "email", "admin@test.com"));

        mockMvc.perform(post("/login/logout").session(session))
                .andExpect(status().isOk())
                .andExpect(view().name("nexacroView"))
                .andExpect(model().attributeExists("data"));

        assert session.isInvalid();
    }
}
