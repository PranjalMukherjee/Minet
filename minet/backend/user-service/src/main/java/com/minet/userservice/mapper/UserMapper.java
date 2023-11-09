package com.minet.userservice.mapper;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    @Autowired
    ModelMapper modelMapper;
    public UserDto convertToUserDTO(User user) {
        try {
            return modelMapper.map(user, UserDto.class);
        } catch (NullPointerException exception) {
            throw new NullPointerException("NullPointerException in converting to dto");
        }
    }

    public User convertToUser(UserDto userDto) {
        try {
            return modelMapper.map(userDto, User.class);
        } catch (NullPointerException exception) {
            throw new NullPointerException("NullPointerException in converting to entity");
        }
    }
}
