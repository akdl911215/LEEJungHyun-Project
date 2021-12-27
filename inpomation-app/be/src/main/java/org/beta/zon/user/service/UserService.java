package org.beta.zon.user.service;

import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;

import java.util.List;

public interface UserService {

    void modify(UserDto userDto);
    UserDto signin(UserDto userDto);
    List<User> findAll();
    void deleteById(Long userno);

    void signup(UserDto userDto);

    default User dtoEntity(UserDto userDto){
        User entity = User.builder()
                .userno(userDto.getUserno())
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .name(userDto.getName())
                .email(userDto.getEmail())
                .address(userDto.getAddress())
                .build();

        return entity;
    }

    default  UserDto entityDto(User user) {
        UserDto entityDto = UserDto.builder()
                .userno(user.getUserno())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .email(user.getEmail())
                .address(user.getAddress())
                .build();

        return entityDto;
    }

}
