import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import LocalTime from "local-time"
import Swal from "sweetalert2";
LocalTime.start()
const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [time, setTime] = useState('');

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleAddBooking = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const guest = form.guest.value
        const newBookig = { name, date, time, email, phone, guest }
        console.log(newBookig);
        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBookig)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: ' Bookig Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div>

            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold text-center">Booking</h2>
                <form onSubmit={handleAddBooking} >
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <label className="input-group">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}

                                    input type="date" name="date" placeholder="Date" className="input input-bordered w-full"
                                    required
                                />

                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>

                            <label className="input-group"></label>
                            <input
                                type="time"
                                name="time"
                                id="timeInput"
                                value={time}
                                onChange={handleTimeChange}
                                required
                            />
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Guest</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="guest" placeholder="Guest" className="input input-bordered w-full"
                                    required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full"
                                    required />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="phone" placeholder="Number" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}

                    <input type="submit" value="Add Booking" className="btn btn-block" />

                </form>
            </div >




        </div >
    );
};



export default Booking;