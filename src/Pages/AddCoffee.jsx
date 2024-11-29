import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handelAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const price = form.price.value
        const photo = form.photo.value

        const productData = { name, chef, supplier, taste, category, details, photo, price }

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
        form.reset()
    }

    return (
        <div className="w-11/12 md:w-9/12 mx-auto py-10">
            <h1 className="font-bold text-xl flex gap-3 items-center mb-8">
                <Link to="/" className="text-gray-600 hover:text-black transition">
                    <FaArrowLeft />
                </Link>
                Back to home
            </h1>

            <div className="bg-color-bg shadow-lg rounded-lg p-8">
                <h1 className="font-extrabold text-4xl text-center text-gray-800 mb-4">
                    Add New Coffee
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>

                <form onSubmit={handelAddCoffee} className="space-y-6">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="Name" className="text-gray-700 font-medium">
                                Name
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="name"
                                placeholder="Enter coffee name"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="Chef" className="text-gray-700 font-medium">
                                Chef
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="chef"
                                placeholder="Enter coffee chef"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="Supplier" className="text-gray-700 font-medium">
                                Supplier
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="supplier"
                                placeholder="Enter coffee Supplier"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="Taste" className="text-gray-700 font-medium">
                                Taste
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="taste"
                                placeholder="Enter coffee Taste"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="Category" className="text-gray-700 font-medium">
                                Category
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="category"
                                placeholder="Enter coffee Category"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="Details" className="text-gray-700 font-medium">
                                Details
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="details"
                                placeholder="Enter coffee Details"
                            />
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="Price" className="text-gray-700 font-medium">
                                Price
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="price"
                                placeholder="Enter coffee Price"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="Photo" className="text-gray-700 font-medium">
                                Photo
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    {/* <div className="w-full">
                        <label htmlFor="Photo" className="text-gray-700 font-medium">
                            Photo
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md h-12 px-4 mt-2 focus:ring focus:ring-[#d2b48c] transition"
                            type="text"
                            name="photo"
                            placeholder="Enter photo URL"
                        />
                    </div> */}

                    {/* Submit Button */}
                    <input
                        className="btn bg-[#d2b48c] text-white w-full py-3 rounded-md font-bold hover:bg-color-primary transition"
                        type="submit"
                        value="Add Coffee"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;