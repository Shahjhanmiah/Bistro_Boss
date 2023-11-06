import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";
import Swal from "sweetalert2";

const CheckoutForm = ({cart, price }) => {
    const stripe = useStripe()
    const [refetch] = useCart()
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


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
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status==='succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price,
                    date: new Date(),
                    quantity: cart.length,
                    cartItems: cart.map(item => item._id),
                    menuItems: cart.map(item => item.menuItemId),
                     status: 'service pending',
                    itemNames: cart.map(item => item.name)
                }
                axiosSecure.post('/payments', payment)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.result.insertedId) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Our Payment Successfullayss.',
                                'success'
                            )
                            // display confirm
                        }
                    })
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
                <button className="mx-auto w-40   btn btn-outline btn-primary" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;