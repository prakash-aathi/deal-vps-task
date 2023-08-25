import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const location = useLocation().pathname;

    const handleLogout = () => { 
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <nav className="bg-blue-500 p-4">
            <div className=" items-center justify-between">
                {/* <div className="text-white font-semibold text-xl">MENU</div> */}
                <button
                    onClick={toggleMenu}
                    className=" text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        }   mt-4 lg:mt-0`}
                >
                    <div>
                        <Link id="addCanditate" to="/add/candidate" className={location === "/add/candidate" ? "cursor-pointer  text-red-600 text-xl" : 'hover:text-red-500 text-white cursor-pointer'} >Add Candidates</Link>
                    </div>
                    <div className='my-4'>
                        <Link id="addCanditate" to="/view/candidates" className={location === "/view/candidates" ? "cursor-pointer text-red-600 text-xl" : 'hover:text-red-500 text-white cursor-pointer'} >View Candidates</Link>
                    </div>
                    <div className='my-4' onClick={handleLogout}>
                        <Link id="addCanditate" to="/login" className={ 'hover:text-red-500 text-white cursor-pointer'} >Log out</Link>
                    </div>


                </div>
            </div>
        </nav>
    );

}

export default Navbar