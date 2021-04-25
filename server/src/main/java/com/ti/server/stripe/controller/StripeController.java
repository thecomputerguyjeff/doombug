package com.ti.server.stripe.controller;

import com.stripe.exception.StripeException;
import com.ti.server.stripe.model.CreateIntentRequest;
import com.ti.server.stripe.service.StripeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(originPatterns = {"*localhost*", "/"})
@RequestMapping("api/stripe")
public class StripeController
{
    private final StripeService stripeService;

    @PostMapping("/create-payment-intent")
    public Object createPaymentIntent(@RequestBody CreateIntentRequest createIntentRequest) throws StripeException {
        return stripeService.createPaymentIntent(createIntentRequest.getAmount(), createIntentRequest.getCustomerID());
    }
}
