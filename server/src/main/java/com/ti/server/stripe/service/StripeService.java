package com.ti.server.stripe.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import com.ti.server.stripe.model.ClientSecretResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StripeService
{
    public Object createPaymentIntent(double amount, String customerID) throws StripeException {

        Stripe.apiKey = "sk_test_51If5WfAvUyzs1dkX4OidydSPFFj4acLAx3zgZ3l2qKy08P0cHuGG5zuhuPL4rOv9mkZAnhgSyogqX2C8hHX5gZ4Q00dLcKGpqB";

        System.out.println(amount);
        PaymentIntentCreateParams paymentIntentCreateParams = PaymentIntentCreateParams
                .builder()
                .setCurrency("usd")
                .setCustomer(customerID)
                .setAmount((long) (amount * 100))
                .build();
        System.out.println((long) (amount * 100));

        PaymentIntent intent = PaymentIntent.create(paymentIntentCreateParams);
        return ClientSecretResponse
                .builder()
                .clientSecret(intent.getClientSecret())
                .build();
    }
}
