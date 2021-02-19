package com.ti.server.login.service;

import com.ti.server.login.model.UserPassData;
import com.ti.server.login.model.UserPass;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service

public class LoginService {
    public Object login(UserPass userPass){
        for(UUID key : UserPassData.map.keySet()){
            if(userPass.equals(UserPassData.map.get(key))){
                return new ResponseEntity<>( key.toString(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("invalid credentials", HttpStatus.UNAUTHORIZED);

    }
}
