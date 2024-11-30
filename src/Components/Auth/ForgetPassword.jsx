
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const { email, setEmail, resetEmail } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelSendEmail = (e) => {
        e.preventDefault()
        resetEmail(email)
            .then(() => {
                window.open("https://mail.google.com", "_blank");
                toast.success("Forgot Password Successful.");
                navigate("/login")
                setEmail("")
            })
            .catch(() => {
                toast.warning("It's not valid email.");
            });
    }

    return (
        <section className="w-full h-auto flex items-center justify-center sm:py-12 p-6">
            <div className="w-full sm:w-[40%] bg-color-bg rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5 shadow-md">

                <form onSubmit={handelSendEmail} className="w-full flex flex-col gap-5">
                    <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center">
                        Forget password
                    </h3>

                    <input
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="Email"
                        value={email ? email : ''}
                        placeholder="Email"
                        className="py-3 px-4 border focus:outline-color-primary2 border-gray-300 rounded-lg w-full"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 px-4 border border-solid border-[#d2b48c] text-white font-bold transition-all duration-300 bg-[#d2b48c] outline-none rounded-lg mt-3">
                        Reset Password
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;