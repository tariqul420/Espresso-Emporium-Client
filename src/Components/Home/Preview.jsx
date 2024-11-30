import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const Preview = () => {
    const coffeeDetails = useLoaderData()
    console.log(coffeeDetails);
    const { name, chef, supplier, taste, category, details, photo, price } = coffeeDetails

    return (
        <div className="w-9/12 mx-auto">
            <h1 className="font-bold text-xl flex gap-3 items-center mb-8 font-Rancho">
                <Link to="/" className="text-gray-600 hover:text-black transition">
                    <FaArrowLeft />
                </Link>
                Back to home
            </h1>
            <div className="flex justify-center items-center gap-12 rounded-lg bg-color-bg p-8 ">
                <div>
                    <img src={photo} className="rounded-xl" alt={name} />
                </div>
                <div>
                    <p><span className="font-bold">Name: </span>{name}</p>
                    <p><span className="font-bold">Chef: </span>{chef}</p>
                    <p><span className="font-bold">Supplier: </span>{supplier}</p>
                    <p><span className="font-bold">Taste: </span>{taste}</p>
                    <p><span className="font-bold">Category: </span>{category}</p>
                    <p><span className="font-bold">Details: </span>{details}</p>
                    <p><span className="font-bold">Price: </span>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Preview;