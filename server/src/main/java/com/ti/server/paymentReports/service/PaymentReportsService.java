package com.ti.server.paymentReports.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.BalanceTransaction;
import com.stripe.model.BalanceTransactionCollection;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PaymentReportsService
{
    public List<BalanceTransaction> getPaymentReports() throws StripeException {

        Stripe.apiKey = "sk_test_51If5WfAvUyzs1dkX4OidydSPFFj4acLAx3zgZ3l2qKy08P0cHuGG5zuhuPL4rOv9mkZAnhgSyogqX2C8hHX5gZ4Q00dLcKGpqB";

        Map<String, Object> balanceTransactionListParams = new HashMap<>();
        balanceTransactionListParams.put("limit", 100);
        BalanceTransactionCollection balanceTransactions = BalanceTransaction.list(balanceTransactionListParams);

        return new ArrayList<>(balanceTransactions.getData());
    }
}