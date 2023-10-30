import SectionTile from "../../Page/Section/SectionTile";
import CheckoutForm from "../MyCart/CheckoutForm";


const Payment = () => {
    return (
        <div>
            <SectionTile subHeading='Please Process' heading='Payment'></SectionTile>
            <h1 className="text-3xl">Taka er taka tumi uri uri ase .... ase</h1>
            <CheckoutForm></CheckoutForm>
        </div>
    );
};

export default Payment;