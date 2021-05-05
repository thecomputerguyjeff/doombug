package com.ti.server.paymentIntent.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.ti.server.paymentIntent.model.ClientSecretResponse;
import com.ti.server.user.entity.UserEntity;
import com.ti.server.user.repository.UserRepository;
import com.ti.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PaymentIntentService
{
    private final UserService userService;

    public String convertUserIDToStripeCustomerID(String userID) {
        UserEntity userEntity = userService.getUser(userID);
        return userEntity.getStripeCustomerID();
    }

    public ClientSecretResponse createPaymentIntent(double amount, String stripeCustomerID) throws StripeException {

        Stripe.apiKey = "sk_test_51If5WfAvUyzs1dkX4OidydSPFFj4acLAx3zgZ3l2qKy08P0cHuGG5zuhuPL4rOv9mkZAnhgSyogqX2C8hHX5gZ4Q00dLcKGpqB";

        PaymentIntentCreateParams paymentIntentCreateParams = PaymentIntentCreateParams
                .builder()
                .setCurrency("usd")
                .setCustomer(stripeCustomerID)
                .setAmount((long) (amount * 100))
                .setDescription("Payment for monthly subscription to Doombug.")
                .build();

        PaymentIntent intent = PaymentIntent.create(paymentIntentCreateParams);
        return ClientSecretResponse
                .builder()
                .clientSecret(intent.getClientSecret())
                .build();
        }
}