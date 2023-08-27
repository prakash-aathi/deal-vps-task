import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewCandidates = () => {

    const [candidates, setCandidates] = useState([])
  

    useEffect(() => {
        axios.get('http://localhost:8080/candidate').then((response) => {
            console.log(response.data);
            setCandidates(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])



    return (
        <div>
            <div className='flex h-screen'>
                <Navbar />
                <div className='mx-auto'>
                    <h2 className='flex justify-center my-4 text-blue-500 font-semibold'>ViewCandidates</h2>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    First Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Email ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Date of Birth
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Title
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Full View</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {candidates.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {item.firstName}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {item.email}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {item.dob}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {item.title}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                                                        <Link id="viewCandidate" to={`/view/candidate/${item.id}`} 
                                                            className={'hover:text-blue-700 text-blue-400 cursor-pointer mr-4'} >View</Link>
                                                        <Link id="editCandidate" to={`/edit/candidate/${item.id}`} 
                                                            className={'hover:text-blue-700 text-blue-400 cursor-pointer'} >edit</Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ViewCandidates