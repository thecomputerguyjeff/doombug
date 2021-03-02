package com.ti.server.login.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Key
{
    private String userKey;
}