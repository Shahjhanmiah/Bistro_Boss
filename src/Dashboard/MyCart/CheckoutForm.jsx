import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        console.log('card', card);
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('PaymentMethod', paymentMethod);
        }

    }
    return (
        <>
            <form className="w-2/3 mt-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <br></br>
                <button className="mx-auto w-50   btn btn-outline btn-primary" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;