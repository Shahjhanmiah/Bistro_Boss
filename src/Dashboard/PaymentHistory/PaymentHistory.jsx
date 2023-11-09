import { useLoaderData } from "react-router-dom";
import SectionTile from "../../Page/Section/SectionTile";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
    const payment = useLoaderData()
    console.log(payment);

    
    return (
        <div>
            
            <Helmet>Dashbord || PaymentHistory</Helmet>
            <div>
            <SectionTile heading="Payment History" subHeading="What's"></SectionTile>
          <h1 className="text-3xl"> Total Item:{payment.length}</h1>
          <div className="overflow-x-auto w-full ">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-yellow-500">
                            <th>#</th>
                            <th>USER EMAIL</th>
                            <th>Price</th>
                            <th> PAYMENT DATE</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((pay, index) => <tr
                                key={pay._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td className="'text-end">
                                    {pay.email}
                                    
                                </td>
                                <td>
                                    {pay.price
}
                                </td>
                                <td className="text-end">{pay.date}</td>
                                <td className="text-end">{pay.time}</td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default PaymentHistory;