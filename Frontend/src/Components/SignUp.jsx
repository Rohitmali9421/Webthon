import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/UserContext';
function SignUp() {
    const { signUp } = useAuth()
    const [serverError, setServerError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const { name, email, password } = data;
        signUp(name, email, password, setServerError);
      };
    return (
        <div>
            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="bg.jpg" alt="" className="w-full h-full object-cover"></img>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div className="w-full h-100">

                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Sign in</h1>
                        {serverError && (
                            <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
                                {serverError}
                            </div>
                        )}
                        <form className="mt-6" onSubmit={handleSubmit(onSubmit)} >
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input type="text" name="" placeholder="Enter Name " className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  {...register('name', { required: 'Name is required', pattern: { value: /\S/, message: 'Name is invalid' } })}
                                />
                                {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name.message}</div>}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' } })}
                                />
                                {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email.message}</div>}
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  {...register('password', { required: 'Password is required' })}
                                />
                                {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password.message}</div>}
                            </div>


                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign In</button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full"></hr>

                        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex items-center justify-center">
                                <FcGoogle />
                                <span className="ml-4">Sign in with Google</span>
                            </div>
                        </button>

                        <p className="mt-8">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
                                log in
                            </Link>
                        </p>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default SignUp
