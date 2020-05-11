import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckOutForm';

const Payment = (props) => {
    const handlePlaceOrder= props.handlePlaceOrder;
    const stripePromise = loadStripe('pk_test_6Q68hGTzOu1GetiEvUPF6QX700Qrmfil9z');
    return (
        <div className= 'container'>
            <div className="row">
                <div className="col-md-6">
                <h3>Payment Information</h3>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handlePlaceOrder= {handlePlaceOrder}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;