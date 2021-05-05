package com.ti.server.signup.service;

import com.stripe.Stripe;
import com.stripe.model.Customer;
import com.stripe.param.CustomerCreateParams;
import com.ti.server.user.entity.UserEntity;
import com.ti.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class SignUpService {
    private final UserRepository userRepository;

    public ResponseEntity<Object> saveUserInfo(UserEntity userEntity) {

        try {

            Stripe.apiKey = "sk_test_51If5WfAvUyzs1dkX4OidydSPFFj4acLAx3zgZ3l2qKy08P0cHuGG5zuhuPL4rOv9mkZAnhgSyogqX2C8hHX5gZ4Q00dLcKGpqB";

            CustomerCreateParams customerParams = CustomerCreateParams.builder()
                    .setName(userEntity.getFirstName() + " " + userEntity.getLastName())
                    .setEmail(userEntity.getUsername())
                    .setDescription("Testing new Stripe Customer when signing up a new user.")
                    .build();

            Customer customer = Customer.create(customerParams);
            userEntity.setStripeCustomerID(customer.getId());
            System.out.println(userEntity);

            userRepository.save(userEntity);
            return new ResponseEntity<>("User has been successfully signed up and saved in the database.", HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>("Error. User info wasn't saved and user has not been signed up.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}