import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/UserContext';
import l1 from "../assets/Images/l1.png"
function Login() {
    const { login } = useAuth()
    const navigate = useNavigate();
    const [serverError, setServerError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            await login(email, password, setServerError);
            navigate("/");
        } catch (error) {
            
            setServerError("Login failed. Please try again.");
        }
    };
    return (
        <div>
            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={l1} alt="" className="w-full h-full object-cover"></img>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100">

                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                        {serverError && (
                            <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
                                {serverError}
                            </div>
                        )}
                        <form className="mt-6" onSubmit={handleSubmit(onSubmit)} >
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                    {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' } })}
                                />
                                {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email.message}</div>}
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    {...register('password', { required: 'Password is required' })}
                                />
                                {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password.message}</div>}
                            </div>

                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full"></hr>



                        <p className="mt-8">
                            Need an account?
                            <Link to="/signUp" className="text-blue-500 hover:text-blue-700 font-semibold">
                                Create an account
                            </Link>
                        </p>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Login
