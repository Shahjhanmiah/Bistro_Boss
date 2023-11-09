import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../Page/Section/SectionTile";
import CheckoutForm from "../MyCart/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../hook/useCart";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe('pk_test_51O6dg3KY2kXLUKhiO0Zlel3xSIhFfl9PTAFc8wkpBgxa9SI2aClWM1EPWjB7l9zBUYXJix8acBGqQFP5h2BRjdPM00exm2UvmH');
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <Helmet>Dashbord || Payment </Helmet>
            <SectionTile subHeading='Please Process' heading='Payment'></SectionTile>
            <h1 className="text-3xl">Taka er taka tumi uri uri ase .... ase</h1>
            <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;