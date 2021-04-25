import React, { useState, useEffect } from "react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {post} from "../helper/Fetch";
import "./CheckoutForm.css"
import Form from "reactstrap/es/Form";
import Button from "reactstrap/es/Button";

const CheckoutForm = () => {

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {

        post("api/stripe/create-payment-intent", {amount: 25.02, customerID: "cus_JKGRQ7PHqGULeI"})
            .then(response => {return response.json();})
            .then(data => setClientSecret(data.clientSecret))
    }, []);

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
        } else {
            setError(null);
            setSucceeded(true);
        }
        setProcessing(false);
    };

    return (
        <Form id="payment-form" onSubmit={handleSubmit}>

            <CardElement id="card-element" /*options={cardStyle}*/ onChange={handleChange}/>
            <Button disable={processing || disabled || succeeded} id="submit">
                <span id="button-text">
                    {processing ? (<div className="spinner" id="spinner"> </div>) : ("Pay Now")}
                </span>
            </Button>
        </Form>
    );
};

export default CheckoutForm;