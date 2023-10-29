import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import '../MyCart/Checkout/CheckoutForm.css'



const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    // const [cardError, setCardError] = useState('');
    // const [transactionId, setTransactionId] = useState('');

    const handleSubmit = async(event)=>{
        event.proventDefault()

        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }


    }
  
    
    return (
        <>
        <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  

        </>
        
       
);
};

export default CheckoutForm;