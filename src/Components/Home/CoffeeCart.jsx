import PropTypes from "prop-types";
import { FaEye, FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
    const handelDelate = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    const { _id, name, chef, photo, price } = coffee

    return (
        <div className="flex items-center gap-4 bg-color-bg rounded-md p-4">
            <div className="">
                <img src={photo} className="mix-blend-mode rounded-md" />
            </div>
            <div className="">
                <p><span className="font-bold">Name: </span>{name}</p>
                <p><span className="font-bold">Chef: </span>{chef}</p>
                <p><span className="font-bold">Price: </span>${price}</p>
            </div>
            <div className="flex flex-col gap-4">
                <FaEye size={20} color="#d2b48c" className="cursor-pointer" />
                <Link to={`/update-coffee/${_id}`}>
                    <FaPencil size={20} color="#3c393b" className="cursor-pointer" />
                </Link>
                <MdDelete onClick={() => handelDelate(_id)} size={20} color="#FF0000" className="cursor-pointer" />
            </div>
        </div>
    );
};

CoffeeCart.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.array.isRequired,
    setCoffees: PropTypes.func.isRequired
}

export default CoffeeCart;