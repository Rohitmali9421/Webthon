import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return (
        <div>

            <footer className="relative bg-gray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-gray-700">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <FaXTwitter className='text-center w-full text-xl' />
                                </button>
                                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <FaFacebookF className='text-center w-full text-xl' />
                                </button>
                                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <LuInstagram className='text-center w-full text-xl' />
                                </button>
                                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <FaLinkedinIn className='text-center w-full text-xl' />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">Github</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">MIT License</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300"></hr>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
