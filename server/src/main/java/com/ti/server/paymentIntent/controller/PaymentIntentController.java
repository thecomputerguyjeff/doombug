package com.ti.server.paymentIntent.controller;

import com.stripe.exception.StripeException;
import com.ti.server.paymentIntent.model.ClientSecretResponse;
import com.ti.server.paymentIntent.model.CreatePaymentIntentRequest;
import com.ti.server.paymentIntent.model.UserIDToStripeIDRequest;
import com.ti.server.paymentIntent.service.PaymentIntentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/payment-intent")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class PaymentIntentController {

    private final PaymentIntentService paymentIntentService;

    @PostMapping("/stripe-customer-ID")
    public Object convertUserIDToStripeCustomerID (@RequestBody UserIDToStripeIDRequest userIDToStripeIDRequest) {
        return paymentIntentService.convertUserIDToStripeCustomerID(userIDToStripeIDRequest.getUserID());
    }

    @PostMapping("/create-payment-intent")
    public ClientSecretResponse createPaymentIntent(@RequestBody CreatePaymentIntentRequest createPaymentIntentRequest) throws StripeException {
        return paymentIntentService.createPaymentIntent(createPaymentIntentRequest.getAmount(), createPaymentIntentRequest.getCustomerID());
    }
}