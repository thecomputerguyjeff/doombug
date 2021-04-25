import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payments = ()=>
{
    const stripePromise = loadStripe('pk_test_51If5WfAvUyzs1dkXpkhk42bXYE3me2VhD5Uc0ci5vzfqFwhrCNj32DXov52eVAGht6QrcdHYsl75wEJApOOlskWr00iQaXel5K');

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payments;

/*
Payment intent is created on the server with no actual CC information.
Intent has an amount for the payment.
This is then sent up to the client side/front end by making an API call from the front end to get the Payment Intent from the backend.
The server will create the Payment Intent and return it, and the Client uses that Payment Intent to complete the payment on the front end. 
* */