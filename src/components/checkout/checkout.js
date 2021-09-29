import React from 'react';
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = "pk_test_51JeTwgFrHokNzP1aPYZwFUgesi6pFCyRjAHrqj92qivLc3jylykXbYqV416Sr2UfSvsaEfzGnxko4YOgfgqyfZRq00aHWAHSAd"
const PAYMENT_SERVER_URL = 'http://localhost:8080';

const CURRENCY = 'USD';

const fromUsdToCent = amount => amount * 100;

const successPayment = data => {
    alert('Payment Successful');
};

const errorPayment = data => {
    alert('Payment Error');
};

const onToken = (amount, description) => token => {
    fetch(PAYMENT_SERVER_URL,
        {
            method: 'POST',
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromUsdToCent(amount)
        })
        .then(successPayment)
        .catch(errorPayment);
}


const Checkout = ({ name, description, amount }) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={fromUsdToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
    >
        <Button>Checkout</Button>
    </StripeCheckout>

export default Checkout;