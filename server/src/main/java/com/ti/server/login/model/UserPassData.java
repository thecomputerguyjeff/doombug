package com.ti.server.login.model;

import lombok.Data;
import lombok.experimental.UtilityClass;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Data
@UtilityClass
public class UserPassData {
    public final static Map<UUID, UserPass> map = Stream.of(
            new AbstractMap.SimpleEntry<>(UUID.randomUUID(), UserPass.builder()
                    .password("pass")
                    .username("cookoo")
                    .build()  ),
            new AbstractMap.SimpleEntry<>(UUID.randomUUID(), UserPass.builder()
                    .password("pass")
                    .username("noony")
                    .build()   )
    )
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));




}
