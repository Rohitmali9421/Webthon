import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";


import { BiLogOut } from "react-icons/bi";
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';


function AdminDashboard() {
    const [menu, toggleMenu] = useState(false);
    const handleMenuToggle = () => {
        toggleMenu(!menu);
    };









    return (
        <>
            <div className={`${menu ? "" : "-translate-x-full"} fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 bg-white shadow-2xl`}>
                <div className='px-4 flex justify-between items-center h-20 border-b'>
                    <Link to="/">
                        <div className='flex items-center'>
                            <h1>DYP</h1>
                        </div>
                    </Link>
                    <IoIosArrowDropleftCircle className='md:hidden block text-blue-500 text-4xl' onClick={handleMenuToggle} />
                </div>
                <div className='flex flex-col justify-between px-4 h-full'>
                    <ul>
                        <Link to="/admin">
                            <li className='flex items-center my-3 bg-transparent hover:bg-blue-50 rounded-md px-4 py-2'>
                                <MdDashboard className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Dashboard</h1>
                            </li>
                        </Link>
                        

                    </ul>

                    <ul className='mb-32'>
                        <li className='flex items-center my-3 hover:bg-blue-50 rounded-md cursor-pointer px-4 py-2'

                        >
                            <BiLogOut className='text-xl text-red-600 mr-3' />
                            <h1 className='font-bold'>Logout</h1>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full bg-blue-50 md:pl-64">
                <nav className='w-full h-20 bg-white border flex flex-between'>
                    <div className='w-full flex justify-between'>
                        <FaBars className='md:hidden block text-4xl m-4' onClick={handleMenuToggle} />
                        <div></div>
                        <div
                            className="relative cursor-pointer flex items-center gap-4 p-2 mr-10 rounded-md"
                            onMouseEnter={() => setUserMenu(true)}
                            onMouseLeave={() => setUserMenu(false)}
                        >
                            
                        </div>
                    </div>

                </nav>
                <Outlet />
            </div>
        </>
    );
}

export default AdminDashboard;
