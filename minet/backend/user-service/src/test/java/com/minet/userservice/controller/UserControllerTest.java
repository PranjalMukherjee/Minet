package com.minet.userservice.controller;

import com.minet.userservice.dto.Auth;
import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.NotFoundException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.service.JwtService;
import com.minet.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@SpringBootTest
class UserControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private UserMapper userMapper;

    @Mock
    private JwtService jwtService;
    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        userController = new UserController();
        userController.userService = userService;
        userController.userMapper = userMapper;
        userController.jwtService = jwtService;
    }

    @DisplayName("Test getUserById")
    @Test
    void testGetUserById() {
        String id = "1";
        UserDto userDto = new UserDto(id, "Fullname", "email@example.com", "password");
        when(userService.getUserById(id)).thenReturn(userDto);

        ResponseEntity<UserDto> responseEntity = userController.getUserById(id);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(userDto, responseEntity.getBody());
    }

    @DisplayName("Test getUserByEmail")
    @Test
    void testGetUserByEmail() {
        String email = "email@example.com";
        UserDto userDto = new UserDto("1", "Fullname", email, "password");
        when(userService.getUserByEmail(email)).thenReturn(userDto);

        ResponseEntity<UserDto> responseEntity = userController.getUserByEmail(email);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(userDto, responseEntity.getBody());
    }

    @DisplayName("Test saveUser")
    @Test
    void testSaveUser() {
        UserDto userDto = new UserDto("1", "Fullname", "email@example.com", "password");
        User user = new User();
        when(userMapper.convertToUser(userDto)).thenReturn(user);
        when(userService.saveUser(user)).thenReturn(userDto);

        UserDto result = userController.saveUser(userDto);

        assertEquals(userDto, result);
    }

  @DisplayName("Test updateUser")
    @Test
    void testUpdateUser() {
        String email = "vijitha12@gmail.com";
        String newPassword = "newPassword";
        when(userService.updateUser(email, newPassword)).thenReturn("Successfully updated user password");

        String result = userController.updateUser(email, newPassword);

        assertEquals("Successfully updated user password", result);
    }

    @DisplayName("Test getToken with valid Auth")
    @Test
    void testGetToken_ValidAuth() {
        Auth auth = new Auth("email@example.com", "password");
        when(jwtService.generateToken(auth.getEmail(), auth.getPassword())).thenReturn("validToken");

        ResponseEntity<String> responseEntity = userController.getToken(auth);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("validToken", responseEntity.getBody());
    }

    @DisplayName("Test getToken with Auth missing email")
    @Test
    void testGetToken_MissingEmail() {
        Auth auth = new Auth(null, "password");

        ResponseEntity<String> responseEntity = userController.getToken(auth);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("Either of email or password is null", responseEntity.getBody());
    }

    @DisplayName("Test getToken with Auth missing password")
    @Test
    void testGetToken_MissingPassword() {
        Auth auth = new Auth("email@example.com", null);

        ResponseEntity<String> responseEntity = userController.getToken(auth);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("Either of email or password is null", responseEntity.getBody());
    }

    @DisplayName("Test getToken with invalid Auth")
    @Test
    void testGetToken_InvalidAuth() {
        Auth auth = new Auth("email@example.com", "wrongPassword");
        when(jwtService.generateToken(auth.getEmail(), auth.getPassword())).thenReturn("Unable to generate token");

        ResponseEntity<String> responseEntity = userController.getToken(auth);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("Unable to generate token", responseEntity.getBody());
    }
    @DisplayName("Test validateToken - Valid Token")
    @Test
    void testValidateToken_ValidToken() {
        String token = "validToken";
        Auth auth = new Auth("email@example.com", "password");

        // Mock the behavior of jwtService.isTokenValid to indicate a valid token
        when(jwtService.isTokenValid(token, auth)).thenReturn(true);

        String result = userController.validateToken(token, auth);

        assertEquals("Token is valid", result);
    }

    @DisplayName("Test validateToken - Invalid Token")
    @Test
    void testValidateToken_InvalidToken() {
        String token = "invalidToken";
        Auth auth = new Auth("email@example.com", "password");

        // Mock the behavior of jwtService.isTokenValid to indicate an invalid token
        when(jwtService.isTokenValid(token, auth)).thenThrow(new NotFoundException("Not a valid token"));

        assertThrows(NotFoundException.class, () -> userController.validateToken(token, auth));
    }

}
