import { FaTrashAlt, } from "react-icons/fa";
import SectionTile from "../../Page/Section/SectionTile";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Booking = () => {
    const {refetch,data: booking = [] } = useQuery({
        queryKey:['booking'],
        queryFn : async ()=>{
            const res = await fetch('http://localhost:5000/booking'
        )
        return res.json()
        }
    })

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your are  Booking delete.',
                                'success'
                            )
                        }
                    })
            }
        })
    } 

  
    return (
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
                            booking.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td className="'text-end">
                                    {item.email}
                                    
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                <td className="text-end">{item.date}</td>
                                <td className="text-end">{item.time}</td>
                                <td><button onClick={()=> handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;
