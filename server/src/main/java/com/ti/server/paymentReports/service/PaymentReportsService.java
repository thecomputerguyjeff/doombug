package com.ti.server.paymentReports.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.BalanceTransaction;
import com.stripe.model.BalanceTransactionCollection;
import com.stripe.param.BalanceTransactionListParams;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PaymentReportsService {
    public List<BalanceTransaction> getPaymentReports() throws StripeException {

        List<BalanceTransaction> balanceTransactionList = new ArrayList<>();
        String current = null;
        boolean more = true;
        Stripe.apiKey = "sk_test_51If5WfAvUyzs1dkX4OidydSPFFj4acLAx3zgZ3l2qKy08P0cHuGG5zuhuPL4rOv9mkZAnhgSyogqX2C8hHX5gZ4Q00dLcKGpqB";

        while (more) {
            BalanceTransactionListParams balanceTransactionListParams = BalanceTransactionListParams.builder()
                    .setLimit(5L)
                    .setStartingAfter(current)
                    .build();

            BalanceTransactionCollection balanceTransactions = BalanceTransaction.list(balanceTransactionListParams);
            balanceTransactionList.addAll(balanceTransactions.getData());

            if(!balanceTransactions.getHasMore()) {
                more = false;
            }
            else {
                current = balanceTransactions.getData().get(4).getId();
            }

        }
        return balanceTransactionList;
    }
}