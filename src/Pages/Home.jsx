import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from "../Components/Home/CoffeeCart";
import { useState } from "react";
import Banner from "../Components/Home/Banner";
import { GiCoffeeCup } from "react-icons/gi";

const Home = () => {
    const coffeesData = useLoaderData()
    const [coffees, setCoffees] = useState(coffeesData)
    return (
        <div className="w-full mx-auto">

            <Banner />

            <h2 className="font-bold text-color-primary text-5xl font-Rancho mb-8 text-center mt-32">Our Popular Products</h2>
            <Link to='/add-coffee' className="flex items-center justify-center gap-3 bg-[#331a15] px-4 py-2 w-[10%] mx-auto mb-8">
                <span className="text-color-bg font-Rancho">Add Coffee</span>
                <GiCoffeeCup color="#fff"/>
            </Link>

            <div className="w-9/12 bg-[url('https://i.ibb.co.com/MsS3b7J/bg.png')] bg-cover mx-auto grid grid-cols-2 gap-8">
                {
                    coffeesData.map(coffee => <CoffeeCart
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees} />)
                }
            </div>
        </div>
    );
};

export default Home;