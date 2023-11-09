import SectionTile from "../../Page/Section/SectionTile";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const image_hosting_token = 'db6a93e47d6744ebc4432b0b80b64de4'

const AddItem = () => {

    //  internation tiem 
    const [time,setTime] =useState(new Date())
    
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[])

    const image_hosting_url = `https:api.imgbb.com/1/upload?key=${image_hosting_token}`
    // console.log(image_hosting_token);
    const [axiosSecure] = useAxiosSecure()
    // daypiker data const 
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData()

        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponsive => {
                if (imgResponsive.success) {
                    const imgUrl = imgResponsive.data.display_url
                    const { name, price, category, recipe, tiem } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl,tiem}
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new item', data.data);
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Food added on new Post.',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <div>
            <Helmet><title>Dashbord || AddItem</title></Helmet>
            
            <div className="w-full px-10 bg-[#F4F3F0] m-20 p-20">
                <SectionTile heading="Additem" subHeading="What's"></SectionTile>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <p>tiem:{time.toLocaleTimeString()}</p>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Dessert</option>
                                <option>Desi</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Item Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                 
                   
                    <input className="btn btn-sm mt-4  mx-auto bg-yellow-700" type="submit" value="Add Item" />
                </form>
            </div>


        </div>
    );
};

export default AddItem;