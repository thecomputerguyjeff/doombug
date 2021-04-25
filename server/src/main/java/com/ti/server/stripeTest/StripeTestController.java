package com.ti.server.stripeTest;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class StripeTestController
{
    private final StripeTestService stripeTestService;

    @GetMapping("/go")
    public Object createAndChargeCustomer() {
        return stripeTestService.createCustomerAndPayment();
    }
}