package com.ti.server.paymentReports.controller;

import com.stripe.exception.StripeException;
import com.stripe.model.BalanceTransaction;
import com.ti.server.paymentReports.service.PaymentReportsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(originPatterns = {"*localhost*", "/"})
@RequestMapping("/api/v1/payment-reports")
public class PaymentReportsController
{
    private final PaymentReportsService paymentReportsService;

    @GetMapping
    public List<BalanceTransaction> getPaymentReports() throws StripeException {
        return paymentReportsService.getPaymentReports();
    }
}