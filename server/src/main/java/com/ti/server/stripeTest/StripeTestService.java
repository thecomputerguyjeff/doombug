package com.ti.server.stripeTest;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.PaymentIntent;
import com.stripe.model.PaymentMethod;
import com.stripe.param.CustomerCreateParams;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class StripeTestService
{
    public Object createCustomerAndPayment() {

        try {

            Stripe.apiKey = "sk_test_51If5WfAvUyzs1dkX4OidydSPFFj4acLAx3zgZ3l2qKy08P0cHuGG5zuhuPL4rOv9mkZAnhgSyogqX2C8hHX5gZ4Q00dLcKGpqB";

            CustomerCreateParams customerParams = CustomerCreateParams.builder()
                    .setName("Devorah Levi")
                    .setEmail("example@example.com")
                    .setPhone("773-997-4788")
                    .setDescription("Devorah Levi's test Stripe customer")
                    .build();

            Customer customer = Customer.create(customerParams);


            Map<String, Object> card = new HashMap<>();

            card.put("number", "4242424242424242");
            card.put("exp_month", 4);
            card.put("exp_year", 2022);
            card.put("cvc", "314");

            Map<String, Object> params = new HashMap<>();

            params.put("type", "card");
            params.put("card", card);

            PaymentMethod paymentMethod = PaymentMethod.create(params);


            PaymentIntentCreateParams paymentIntentParams = PaymentIntentCreateParams.builder()
                    .setCurrency("usd")
                    .setAmount(25000L)
                    .addPaymentMethodType("card")
                    .setPaymentMethod(paymentMethod.getId())
                    .setCustomer(customer.getId())
                    .setReceiptEmail("devorahlevi1@gmail.com")
                    .setConfirm(true)
                    .setDescription("Devorah Levi test customer making payment of $25,000.")
                    .build();

            PaymentIntent paymentIntent = PaymentIntent.create(paymentIntentParams);

            return new ResponseEntity<>("Customer and Payment have been successfully completed.", HttpStatus.CREATED);

        } catch (StripeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}