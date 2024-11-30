// react icons
import { IoIosSearch } from 'react-icons/io';
import { CiMenuFries } from 'react-icons/ci';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { AuthContext } from '../../Provider/AuthProvider';
import Profile from './Profile';

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext)

  const handelLogout = () => {
    signOutUser()
  }

  return (
    <div className={`py-2 rounded-t-3xl w-11/12 mx-auto`}>
      <nav className={`flex items-center justify-between relative boxShadow rounded-full px-[10px] py-[8px] w-11/12 mx-auto my-6 `}>
        <Link to="/">
          <h1 className={`font-bold text-color-primary text-4xl font-Rancho`}>Espresso Emporium</h1>
        </Link>
        <ul className="items-center gap-[20px] text-[1rem] text-[#331a15] font-medium lg:flex hidden">
          <NavLink to="/">
            <li className="navBarLink">Home</li>
          </NavLink>
          <NavLink to="/add-coffee">
            <li className="navBarLink">Add Coffee</li>
          </NavLink>
        </ul>

        <div className="items-center gap-[10px] flex">
          {
            user && <Profile />
          }
          {
            user ? (
              <button onClick={handelLogout} className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-color-primary transition duration-300 ease-out border-2 border-color-primary rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-color-primary group-hover:translate-x-0 ease">
                  <FaArrowRight size={25} />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-color-primary transition-all duration-300 transform group-hover:translate-x-full ease">Logout</span>
                <span className="relative invisible">Sign Out</span>
              </button>
            ) : (
              <Link to="/login">
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-color-primary transition duration-300 ease-out border-2 border-color-primary rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-color-primary group-hover:translate-x-0 ease">
                    <FaArrowRight size={25} />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-color-primary transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                  <span className="relative invisible">Sign Up</span>
                </button>
              </Link>
            )
          }

          <CiMenuFries className="text-[1.8rem] mr-1 text-[#331a15] cursor-pointer lg:hidden flex" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        </div>

        <aside
          className={` ${mobileSidebarOpen ? 'translate-y-0 opacity-100 z-[2000]' : 'translate-y-[-200px] opacity-0 z-[-1]'
            } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
        >
          <div className="relative mb-5">
            <input className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]" placeholder="Search..." />
            <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
          </div>
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <NavLink to="/">
              <li className="navBarLink">Home</li>
            </NavLink>
            <NavLink to="/add-coffee">
              <li className="navBarLink">Add Coffee</li>
            </NavLink>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
