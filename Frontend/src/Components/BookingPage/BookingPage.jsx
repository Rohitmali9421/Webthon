import React from 'react';
import { useForm } from "react-hook-form";
import b1 from "../../assets/Images/b1.jpg"
import axios from 'axios';
function BookingPage() {
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const formattedData = {
            nameOfOrganizer: data.name,
            designation: data.designation,
            department: data.department,
            phoneNumber: data.phoneNo,
            titleOfEvent: data.title,
            detailsOfEvent: data.detail,
            hallOccupancyDates: data.date,  
            timeFrom: data.stime,
            timeTo: data.etime,
            nameOfCoordinator: data.cname,
            mobileNumberOfCoordinator: data.cmobile,
            nameOfChiefGuest: data.cgname,
            numberOfChiefGuestsExpected: data.nog,
            numberOfInvitees: data.noe
        };

        try {
            const response = await axios.post('http://localhost:8000/book/', formattedData);
            console.log(response.data); 
        } catch (error) {
            console.error('Error creating event:', error.response.data); // Handle error here
        }
    };


    return (
        <div className='w-full p-6 pt-14'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8'>
                    <div className='w-full shadow-md border bg-white rounded-md px-3 md:px-6 py-6 lg:col-span-2'>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="name">Name <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="designation">Designation <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Designation Name"
                                {...register("designation", {
                                    required: 'Designation is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Designation must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="department">Department <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Department Name"
                                {...register("department", {
                                    required: 'Department is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Department must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="phoneNo">Phone/Mobile No <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="tel"
                                placeholder="Phone/Mobile No"
                                {...register("phoneNo", {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Enter a valid 10-digit phone number'
                                    }
                                })}
                            />
                            {errors.phoneNo && <p className="text-red-500 text-xs mt-1">{errors.phoneNo.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="title">Title of the Event <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Title of the Event"
                                {...register("title", {
                                    required: 'Title is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Title must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="detail">Details of the Event <sup className='text-red-400'>*</sup></label>
                            <textarea
                                className='outline-none border focus:border-blue-700 min-h-20 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                placeholder="Event details"
                                {...register("detail", {
                                    required: 'Details are required',
                                    minLength: {
                                        value: 20,
                                        message: 'Details must be at least 20 characters long'
                                    }
                                })}
                            />
                            {errors.detail && <p className="text-red-500 text-xs mt-1">{errors.detail.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="date">Date of the Event <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="date"
                                {...register("date", {
                                    required: 'Date is required'
                                })}
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                        </div>

                        <div className='flex justify-between gap-2'>
                            <div className='my-1'>
                                <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="stime">Start Time of the Event <sup className='text-red-400'>*</sup></label>
                                <input
                                    className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                    type="time"
                                    {...register("stime", {
                                        required: 'Start time is required'
                                    })}
                                />
                                {errors.stime && <p className="text-red-500 text-xs mt-1">{errors.stime.message}</p>}
                            </div>
                            <div className='my-1'>
                                <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="etime">End Time of the Event <sup className='text-red-400'>*</sup></label>
                                <input
                                    className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                    type="time"
                                    {...register("etime", {
                                        required: 'End time is required'
                                    })}
                                />
                                {errors.etime && <p className="text-red-500 text-xs mt-1">{errors.etime.message}</p>}
                            </div>
                        </div>

                        {/* Coordinator Information */}
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="cname">Coordinator's Name <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Coordinator's Name"
                                {...register("cname", {
                                    required: 'Coordinator\'s name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.cname && <p className="text-red-500 text-xs mt-1">{errors.cname.message}</p>}
                        </div>

                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="cmobile">Coordinator's Mobile No <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="tel"
                                placeholder="Mobile No"
                                {...register("cmobile", {
                                    required: 'Coordinator\'s mobile number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Enter a valid 10-digit mobile number'
                                    }
                                })}
                            />
                            {errors.cmobile && <p className="text-red-500 text-xs mt-1">{errors.cmobile.message}</p>}
                        </div>
                        <div className='my-1'>
                            <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="cname">Name of the Chief Guest <sup className='text-red-400'>*</sup></label>
                            <input
                                className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                type="text"
                                placeholder="Name of the Chief Guest"
                                {...register("cgname", {
                                    required: 'Name of the Chief Guest is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name of the Chief Guest must be at least 3 characters long'
                                    }
                                })}
                            />
                            {errors.cgname && <p className="text-red-500 text-xs mt-1">{errors.cgname.message}</p>}
                        </div>

                        <div className='flex justify-between gap-2'>
                            <div className='my-1'>
                                <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="stime">Number of Chief Guests Expected <sup className='text-red-400'>*</sup></label>
                                <input
                                    className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                    type="Number"
                                    {...register("nog", {
                                        required: 'Number of Invitees is required'
                                    })}
                                />
                                {errors.nog && <p className="text-red-500 text-xs mt-1">{errors.nog.message}</p>}
                            </div>
                            <div className='my-1'>
                                <label className='text-sm font-semibold px-1 text-gray-800' htmlFor="etime">Number of Invitees <sup className='text-red-400'>*</sup></label>
                                <input
                                    className='outline-none border focus:border-blue-700 px-3 py-2 my-2 rounded-md text-sm md:px-5 text-gray-600 font-normal w-full'
                                    type="Number"
                                    {...register("noe", {
                                        required: 'Number of Invitees is required'
                                    })}
                                />
                                {errors.noe && <p className="text-red-500 text-xs mt-1">{errors.noe.message}</p>}
                            </div>
                        </div>
                        {/* Submission Buttons */}
                        <div className='mt-6 flex justify-end gap-4'>
                            <button
                                type="button"
                                className='bg-gray-400 text-white px-6 py-2 rounded-md'
                                onClick={() => reset()}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className='bg-blue-700 text-white px-6 py-2 rounded-md'
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                    <img src={b1} className="sticky top-10" alt="" />
                </div>
            </form>
        </div>
    );
}

export default BookingPage;
