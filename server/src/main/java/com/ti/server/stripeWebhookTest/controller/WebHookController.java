package com.ti.server.stripeWebhookTest.controller;

import com.stripe.model.Event;
import com.ti.server.stripeWebhookTest.service.WebHookService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/DevorahLevi")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class WebHookController
{
    private final WebHookService webhookService;

    @PostMapping
    public ResponseEntity<String> retrieveStripeEvent(@RequestBody Event stripeEvent) {

        try {
            webhookService.decodeStripeEvent(stripeEvent);
            return new ResponseEntity<>("Successfully received Stripe event.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Unsuccessful. Did not receive Stripe event properly.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}