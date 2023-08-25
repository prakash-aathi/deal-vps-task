import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddCandidate = () => {

    const initialState = {
        email: "",
        recoveryEmail: "",
        firstName: "",
        lastName: "",
        title: "",
        candidateGender: "",
        dob: "",
        description: "",
        mobileNumber: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        candidateCountry: "",
        homeLocationCity: "",
        candidateState: ""
    }
    const [formData, setFormData] = useState(initialState);
    const [ErrorData, setErrorData] = useState(initialState);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setErrorData(initialState)
        axios.post("http://localhost:8080/candidate", formData)
            .then(res => {
                console.log(res);
                toast.success("Successfully Added details", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setFormData(initialState)
            }).catch(err => {
                console.log(err.response.data);
                console.log(err.response.status);
                if (err.response.status === 400) {
                    setErrorData((prev) => {
                        return{...prev,...err.response.data}
                    })
                    toast.error("Please fill the required fields", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                }
            } ).finally(()=> console.log(ErrorData) )
        
    };

   
    return (
        <div className="flex  bg-gray-100">
            <Navbar />
            <div className="w-full  p-6 rounded-lg shadow-md">
                <h1 className="text-3xl text-center text-blue-500 font-semibold mb-6">Add Candidate Details</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-md font-medium text-gray-700">First Name</label>
                           
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter first name"
                            />
                             {ErrorData.firstName !== "" && (
                                <div className='text-red-500 font-semibold'>
                                    {ErrorData.firstName}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter last name"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">Email id</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter Email id"
                            />
                             {ErrorData.email !== "" && (
                                <div className='text-red-500 font-semibold'>
                                    {ErrorData.email}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-md font-medium text-gray-700">Recovery Email id</label>
                            <input
                                type="text"
                                name="recoveryEmail"
                                value={formData.recoveryEmail}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter Recovery Email id"
                            />
                            {ErrorData.recoveryEmail !== "" && (
                                <div className='text-red-500 font-semibold'>
                                    {ErrorData.recoveryEmail}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">DOB</label>
                            <input
                                type="text"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter DOB"
                            />
                            {ErrorData.dob !== "" && (
                                <div className='text-red-500 font-semibold'>
                                    {ErrorData.dob}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">Gender</label>
                            <input
                                type="text"
                                name="candidateGender"
                                value={formData.candidateGender}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter Gender"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter title"
                            />
                            {ErrorData.title !== "" && (
                                <div className='text-red-500 font-semibold'>
                                    {ErrorData.title}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">description</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter description"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">mobileNumber</label>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter mobile Number"
                            />
                            {ErrorData.mobileNumber !== "" && (
                                <div className='text-red-500 font-semibold'>
                                    {ErrorData.mobileNumber}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">address1</label>
                            <input
                                type="text"
                                name="address1"
                                value={formData.address1}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter address1"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">address2</label>
                            <input
                                type="text"
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter address2"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">city</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter city"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">postalCode</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter postal Code"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700">home Location City</label>
                            <input
                                type="text"
                                name="homeLocationCity"
                                value={formData.homeLocationCity}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter home Location City"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700"> Country</label>
                            <input
                                type="text"
                                name="homeLocationCity"
                                value={formData.homeLocationCity}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter Country"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700"> State</label>
                            <input
                                type="text"
                                name="candidateState"
                                value={formData.candidateState}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter  State"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700"> Country</label>
                            <input
                                type="text"
                                name="candidateCountry"
                                value={formData.candidateCountry}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter  Country"
                            />
                        </div>
                        

                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddCandidate