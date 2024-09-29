import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/UserContext';
function Header() {
    const [menu, setMenu] = useState(false);
    const { auth, logout } = useAuth()
    const [userMenu, setUserMenu] = useState(false);
    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    return (
        <div className='w-full backdrop-blur-2xl  h-14 fixed z-50 flex justify-between items-center px-10 md:px-20 text-2xl border-b-[1px] border-gray-500'>

            <h1>DYP</h1>
            <div className='gap-3 grid-cols-4 sm:grid hidden text-black font-semibold md:items-center'>

                <Link to="/" className=' text-base font-Kanit cursor-pointer'>Home</Link>
                <Link to="/about" className=' text-base font-Kanit cursor-pointer'>About Us</Link>
                <Link to="/contact" className=' text-base font-Kanit cursor-pointer'>Contact</Link>
                <Link to="book" className=' text-base font-Kanit cursor-pointer bg-orange-400 rounded-md text-white px-4 py-1'>Book Now</Link>
            </div>

            <div>
                <div className='sm:hidden'>
                    <FaBarsStaggered onClick={handleMenuToggle} className='text-black cursor-pointer' />
                    <div className={`${menu ? "flex flex-col justify-between" : "hidden"} md:hidden absolute bg-white text-black h-screen top-0 right-0 w-[70vw] p-5`}>
                        <div className='flex flex-col'>
                            <IoIosArrowForward className='ml-2 mb-2 text-blue-500' onClick={handleMenuToggle} />
                            <Link to="/" onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Home</Link>
                            <Link to="/about" onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>About</Link>
                            <Link to="/contact" onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Contact</Link>
                            <Link to="/book" onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Book</Link>
                        </div>
                        <div className='flex gap-2 items-center mt-2 px-4 mb-4 text-black'>

                            <a to="/"><FaLinkedin className='text-2xl ' /></a>
                            <a href="https://twitter.com/rohitma13641165#"><FaXTwitter className='text-2xl ' /></a>
                            <a href="#"><FaInstagram className='text-2xl ' /></a>
                        </div>

                    </div>
                </div>
                {auth.user ? (
                    <div
                        className="relative cursor-pointer flex items-center gap-4 p-2 mr-10 rounded-md"
                        onMouseEnter={() => setUserMenu(true)}
                        onMouseLeave={() => setUserMenu(false)}
                    >
                        {userMenu && (
                            <div className="absolute bg-slate-200 text-center flex flex-col p-4  w-40 top-[60px] gap-2 -right-1 rounded-md shadow-md">

                                <p className='rounded-xl p-1 bg-red-500 text-white cursor-pointer hover:bg-red-600' onClick={logout}>Logout</p>
                            </div>
                        )}
                        <img
                            src={auth.user.profile_picture.url}
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                        />
                        <div>
                            <p className="text-base font-bold">{auth.user.name}</p>
                            <p className="text-sm font-normal">{auth.user.role ? "Admin" : "User"}</p>
                        </div>
                        <img src={"src/assets/downArrow.png"} alt="" className="h-2 w-3 rounded-full" />
                    </div>
                ) : (
                    <Link to="/login">
                        <button className='px-5 py-2 text-sm rounded-full  border-2 border-purple-700 bg-purple-200 hover:bg-purple-300 text-purple-700'>
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;