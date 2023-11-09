package com.minet.userservice.service;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;

public interface UserService {
public UserDto getUserById(String id);
public UserDto getUserByEmail(String email);
String updateUser(String email,String newPassword);
public UserDto saveUser(User user);
}
