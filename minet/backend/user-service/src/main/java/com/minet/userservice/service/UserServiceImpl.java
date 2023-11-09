package com.minet.userservice.service;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.NotFoundException;
import com.minet.userservice.exception.UserExistException;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.mapper.UserMapper;
import com.minet.userservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    @Autowired
    public UserServiceImpl(UserRepository userRepository,UserMapper userMapper){
        this.userRepository=userRepository;
        this.userMapper=userMapper;
    }
    @Override
    public UserDto getUserById(String id){
        Optional<User> result = userRepository.findById(id);
        if (result.isEmpty()) {
            throw new UserNotFoundException("User not found with id: " + id);
        }
        return userMapper.convertToUserDTO(result.get());
    }

    @Override
    public UserDto getUserByEmail(String email) {
        Optional<User> result = Optional.ofNullable(userRepository.findByEmail(email));
        if (!result.isPresent()) {
            throw new NotFoundException("User not found with email: " + email);
        }
        return userMapper.convertToUserDTO(result.get());
    }

    @Override
    public String updateUser(String email, String newPassword) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(email));
        if (userOptional.isEmpty()) {
            log.error(" >>> CATCH BLOCK IN UPDATED User");
            throw new UserNotFoundException("User not found with email: " +email);
        }
        User user = userOptional.get();
        user.setPassword(newPassword.replaceAll("[\"\n]", ""));
        userRepository.save(user);
        return "Successfully updated user password";
    }


    @Override
    public UserDto saveUser(User user) {
        try {
            User dbUser =  userRepository.findByEmail(user.getEmail());
            if (Objects.nonNull(dbUser)) {
                throw new UserExistException("User already exist in system : " + user.getEmail());
            } else {
                return userMapper.convertToUserDTO(userRepository.save(user));
            }
        } catch (NotFoundException e) {
            log.error(" >>> CATCH BLOCK IN ADD User");
            throw new NotFoundException("Unable to add an user");
        }
    }


}
