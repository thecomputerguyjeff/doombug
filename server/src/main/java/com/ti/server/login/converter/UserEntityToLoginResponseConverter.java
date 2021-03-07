package com.ti.server.login.converter;

import com.ti.server.login.model.LoginResponse;
import com.ti.server.user.entity.UserEntity;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

@Service
public class UserEntityToLoginResponseConverter implements Converter<UserEntity, LoginResponse> {
    public LoginResponse convert(UserEntity userEntity) {
        return LoginResponse.builder()
                .id((userEntity.getId()))
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .username(userEntity.getUsername())
                .build();
    }
}
