import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CandidateDetails = () => {

    const [candidate, setcandidate] = useState()
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8080/candidate/${id}`)
            .then((response) => {
                console.log(response.data);
                setcandidate(response.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])


    return (
        <div>
            <div className='flex '>
                <Navbar />
                <div className='mx-auto'>
                    <h2 className='flex justify-center my-4 text-blue-500 font-semibold'>Candidate Detail</h2>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-8">

                                    {
                                        candidate ?
                                            <div className="bg-white rounded-lg shadow-md p-6">
                                                <h2 className="text-2xl font-semibold mb-4">{candidate.firstName} {candidate.lastName}</h2>
                                                <p className="text-gray-600 mb-2">Email: {candidate.email}</p>
                                                <p className="text-gray-600 mb-2">Recovery Email: {candidate.recoveryEmail}</p>
                                                <p className="text-gray-600 mb-2">Title: {candidate.title}</p>
                                                <p className="text-gray-600 mb-2">Gender: {candidate.candidateGender}</p>
                                                <p className="text-gray-600 mb-2">Date of Birth: {candidate.dob}</p>
                                                <p className="text-gray-600 mb-2">Description: {candidate.description}</p>
                                                <p className="text-gray-600 mb-2">Mobile Number: {candidate.mobileNumber}</p>
                                                <p className="text-gray-600 mb-2">Address: {candidate.address1}, {candidate.address2}</p>
                                                <p className="text-gray-600 mb-2">City: {candidate.city}</p>
                                                <p className="text-gray-600 mb-2">Postal Code: {candidate.postalCode}</p>
                                                <p className="text-gray-600 mb-2">Country: {candidate.candidateCountry}</p>
                                                <p className="text-gray-600 mb-2">Home Location City: {candidate.homeLocationCity}</p>
                                                <p className="text-gray-600 mb-2">State: {candidate.candidateState}</p>
                                            </div>
                                            :
                                            <div>no data</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CandidateDetails