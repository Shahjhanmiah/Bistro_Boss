import SectionTile from "../../Page/Section/SectionTile";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const image_hosting_token = 'db6a93e47d6744ebc4432b0b80b64de4'
    console.log(image_hosting_token);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <div className="w-full px-10">
                <SectionTile subHeading="What's new" heading="Addan item" ></SectionTile>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input className="btn btn-sm mt-4  bg-yellow-700" type="submit" value="Add Item" />
                </form>
            </div>


        </div>
    );
};

export default AddItem;