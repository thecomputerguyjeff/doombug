package com.ti.server.login.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserPass
{
    public String username;
    public String password;
}