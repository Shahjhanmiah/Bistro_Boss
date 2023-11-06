import { useLoaderData } from "react-router-dom";


const PaymentHistory = () => {
    const payment = useLoaderData()
    console.log(payment);

    
    return (
        <div>
            <p>payment:{payment.length}</p>

            <div>
            <SectionTile heading="Manage Booking" subHeading="What's"></SectionTile>
          <h1 className="text-3xl"> Total Item:{booking.length}</h1>
          <div className="overflow-x-auto w-full ">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-yellow-500">
                            <th>#</th>
                            <th>USER EMAIL</th>
                            <th>PHONE NUMBER</th>
                            <th>BOOKING DATE</th>
                            <th>BOOKING TIME</th>
                            <th>Action</th>
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
                                    {pay.phone}
                                </td>
                                <td className="text-end">{item.date}</td>
                                <td className="text-end">{item.time}</td>
                               
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