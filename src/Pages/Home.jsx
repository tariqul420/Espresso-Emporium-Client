import { useLoaderData } from "react-router-dom";
import CoffeeCart from "../Components/Home/CoffeeCart";
import { useState } from "react";
import Banner from "../Components/Home/Banner";

const Home = () => {
    const coffeesData = useLoaderData()
    const [coffees, setCoffees] = useState(coffeesData)
    return (
        <div className="w-full mx-auto">

            <Banner />

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