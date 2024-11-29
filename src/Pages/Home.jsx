import { useLoaderData } from "react-router-dom";
import CoffeeCart from "../Components/Home/CoffeeCart";
import { useState } from "react";

const Home = () => {
    const coffeesData = useLoaderData()
    const [coffees, setCoffees] = useState(coffeesData)
    return (
        <div className="w-10/12 mx-auto grid grid-cols-2 gap-8">
            {
                coffeesData.map(coffee => <CoffeeCart
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees} />)
            }
        </div>
    );
};

export default Home;