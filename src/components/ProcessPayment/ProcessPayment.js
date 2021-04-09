import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import React from 'react';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51Ie17yBnWqJxKskHjiOEbItP8GGyoYO9mnR10WVA16nY4Emu4SznTJFfJyq9YsoLVoXLyQOTiEfDQJLIHOpFDhsL002U4Q2fIU');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;