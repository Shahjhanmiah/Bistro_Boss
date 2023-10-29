import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../Page/Section/SectionTile";
import CheckoutForm from "../MyCart/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51O6dg3KY2kXLUKhiO0Zlel3xSIhFfl9PTAFc8wkpBgxa9SI2aClWM1EPWjB7l9zBUYXJix8acBGqQFP5h2BRjdPM00exm2UvmH');
const Payment = () => {

    return (
        <div>
            <SectionTile subHeading="please process" heading="Payment"></SectionTile>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            
            <Elements stripe={stripePromise}>

                <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;