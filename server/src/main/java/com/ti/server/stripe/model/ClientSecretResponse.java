package com.ti.server.stripe.model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClientSecretResponse {
    private String clientSecret;
}
