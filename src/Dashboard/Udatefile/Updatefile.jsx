const Updatefile = () => {


    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const recipe = form.recipe.value;
        const category = form.category.value;
        const price = form.price.value;
        const recipedetail = form.recipedetail.valu;

        const updatedCoffee = { recipe, category, price, recipedetail }

        console.log(updatedCoffee);

        // send data to the server
        // fetch(`https://bistory-server.onrender.com/coffee/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount > 0) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Coffee Updated Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //         }
        //     })
    }
    return (
        <div>

            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold">Update data</h2>
                <form onSubmit={handleUpdateCoffee} >
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipename</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recipe" placeholder="recipe" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* form Photo url row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* lg */}

                    <label className="label">
                        <span className="label-text">Recipedetail</span>
                    </label>
                    <label className="textarea-group">
                        <textarea type='text' name="recipedetail" placeholder="recipedetail" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </label>
                    <br></br>
                    <input type="submit" value="Update Coffee" className="btn btn-block" />

                </form>
            </div>



        </div>
    );
};

export default Updatefile;