import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

    return (
        <footer className="bg-color-bg mt-12 py-12">
            <img className="w-[75px]" src="https://i.ibb.co.com/C1kKXNp/logo1.png" alt="" />
            <div className="w-9/12 mx-auto flex gap-10 mt-6">
                <div className="flex-1">
                    <h2 className="font-bold text-color-primary text-5xl font-Rancho mb-8">Espresso Emporium</h2>
                    <p className="text-color-primary">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-4 my-8">
                        <FaFacebook size={40} />
                        <FaTwitter size={40} />
                        <FaInstagram size={40} />
                        <FaLinkedin size={40} />
                    </div>
                    <h2 className="font-bold text-color-primary text-4xl font-Rancho">Get in Touch</h2>
                    <div className="flex flex-col gap-2 mt-6">
                        <div className="flex gap-4 items-center">
                            <FaPhone />
                            <p className="text-color-primary text-lg">+88 01533 333 333</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <MdEmail />
                            <p className="text-color-primary text-lg">info@gmail.com</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaLocationDot />
                            <p className="text-color-primary text-lg">72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-color-primary text-4xl font-Rancho mb-8">Connect with Us</h2>

                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Write something about zenUI"
                            className="border-[#e5eaf2] border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[130px] focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                        <button className="border border-solid border-color-primary font-bold text-xl font-Rancho px-4 py-2 text-color-primary rounded-full mt-6">Send Message</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
