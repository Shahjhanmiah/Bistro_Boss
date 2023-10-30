import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";

// import '../MyCart/Checkout/CheckoutForm.css'



const CheckoutForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure()
    // const [clientSecret, setClientSecret] = useState('');
    // const [processing, setProcessing] = useState(false);
     const [transactionId, setTransactionId] = useState('');


    // const [transactionId, setTransactionId] = useState('');

    const handleSubmit = async (event) => {
        event.proventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card',card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
         
        if (error) {
            console.log('error', error);
            setCardError('error'.message)

        }
        else {
            setCardError('')
            console.log('paymentMethod', paymentMethod);
        }


    }


    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-sm mt-4 w-full" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
             {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} 


        </>


    );
};

export default CheckoutForm;