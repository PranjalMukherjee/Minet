
package com.minet.userservice.service;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.NotFoundException;
import com.minet.userservice.exception.UserExistException;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@SpringBootTest
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserMapper userMapper;
    @InjectMocks
    private UserServiceImpl userService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        userService = new UserServiceImpl(userRepository, userMapper);
    }

    @DisplayName("Test getUserById with existing user")
    @Test
    void testGetUserById_ExistingUser() {
        String id = "1";
        User user = new User();
        user.setId(id);
        when(userRepository.findById(id)).thenReturn(Optional.of(user));
        when(userMapper.convertToUserDTO(user)).thenReturn(new UserDto(id, "Fullname", "email@example.com", "password"));

        UserDto result = userService.getUserById(id);

        assertEquals(id, result.getId());
        assertEquals("Fullname", result.getFullname());
        assertEquals("email@example.com", result.getEmail());
        assertEquals("password", result.getPassword());
    }

    @DisplayName("Test getUserById with non-existing user")
    @Test
    void testGetUserById_NonExistingUser() {
        String id = "1";
        when(userRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.getUserById(id));
    }

    @DisplayName("Test getUserByEmail with existing user")
    @Test
    void testGetUserByEmail_ExistingUser() {
        String email = "email@example.com";
        User user = new User();
        user.setEmail(email);
        when(userRepository.findByEmail(email)).thenReturn(user);
        when(userMapper.convertToUserDTO(user)).thenReturn(new UserDto("1", "Fullname", email, "password"));

        UserDto result = userService.getUserByEmail(email);

        assertEquals("1", result.getId());
        assertEquals("Fullname", result.getFullname());
        assertEquals(email, result.getEmail());
        assertEquals("password", result.getPassword());
    }

    @DisplayName("Test getUserByEmail with non-existing user")
    @Test
    void testGetUserByEmail_NonExistingUser() {
        String email = "email@example.com";
        when(userRepository.findByEmail(email)).thenReturn(null);

        assertThrows(NotFoundException.class, () -> userService.getUserByEmail(email));
    }

    @DisplayName("Test updateUser")
    @Test
    void testUpdateUser() {
        String email = "email@example.com";
        String newPassword = "newPassword";
        User user = new User();
        user.setEmail(email);
        when(userRepository.findByEmail(email)).thenReturn(user);
        String result = userService.updateUser(email,newPassword);
        assertEquals("Successfully updated user password", result);
        assertEquals(newPassword, user.getPassword());
    }

    @DisplayName("Test saveUser")
    @Test
    void testSaveUser() {   User user = new User();
        user.setId("1");
        user.setFullname("VijithaSai");
        user.setEmail("vijithasai321@gmail.com");
        user.setPassword("Vijitha@321");
        UserDto userDto = new UserDto();
        userDto.setId("1");
        userDto.setFullname("VijithaSai");
        userDto.setEmail("vijithasai321@gmail.com");
        userDto.setPassword("Vijitha@321");
        when(userRepository.save(any(User.class))).thenReturn(user);
        userService.saveUser(user);
        assertEquals("1",user.getId());
    }

    @DisplayName("Test updateUser - User not found")
    @Test
    void testUpdateUser_UserNotFound() {
        // Arrange
        String email= "email12@example.com";
        String newPassword = "newPassword";

        when(userRepository.findByEmail(email)).thenReturn(null);

        // Act and Assert

        assertThrows(UserNotFoundException.class, () -> userService.updateUser(email, newPassword));

        verify(userRepository, times(1)).findByEmail(email);
    }

    @DisplayName("Test saveUser - Unable to save user")
    @Test
    void testSaveUser_UnableToSaveUser() {
        // Arrange
        User user = new User();
        when(userRepository.save(any(User.class))).thenThrow(new UserNotFoundException("Unable to save user"));

        // Act and Assert
        assertThrows(UserNotFoundException.class, () -> userService.saveUser(user));
        verify(userRepository, times(1)).save(user);
    }

    @DisplayName("Test saveUser - User already exists")
    @Test
    void testSaveUser_UserAlreadyExists() {
        // Arrange
        User user = new User();
        user.setEmail("existing@example.com");

        when(userRepository.findByEmail(user.getEmail())).thenReturn(user);

        // Act and Assert
        assertThrows(UserExistException.class, () -> userService.saveUser(user));

        verify(userRepository, times(1)).findByEmail(user.getEmail());
    }

    @DisplayName("Test saveUser - Unable to add user")
    @Test
    void testSaveUser_UnableToAddUser() {
        // Arrange
        User user = new User();
        user.setEmail("new@example.com");

        when(userRepository.findByEmail(user.getEmail())).thenReturn(null);
        when(userRepository.save(any(User.class))).thenThrow(new NotFoundException("Unable to save user"));

        // Act and Assert
        assertThrows(NotFoundException.class, () -> userService.saveUser(user));

        verify(userRepository, times(1)).findByEmail(user.getEmail());
        verify(userRepository, times(1)).save(user);
    }
}
