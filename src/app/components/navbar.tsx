"use client";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="px-2 sticky top-0 z-20 sm:px-4 bg-white h-20 md:h-28 xl:h-40">
            <section className="flex flex-row justify-between items-center text-black my-10">
                <img src="./picture/Logonews.jpeg" alt="logo" className="h-12 w-16 sm:h-16 sm:w-24 md:h-20 md:w-32" />
                
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-2 py-1 border rounded-lg text-black w-32 sm:w-40 md:w-48 lg:w-72 xl:w-96"
                />

                <div className="hidden sm:flex flex-row items-center">


                <h1 className="mx-2 sm:mx-4 text-xs sm:text-sm md:text-base w-20 sm:w-28 py-1 h-10 sm:h-14 flex justify-center items-center">
                    Aug 8, 2024
                </h1>

                
                    <button className="mx-2 sm:mx-4 border-2 border-black  text-xs sm:text-sm md:text-base w-20 sm:w-24 md:w-32 py-1 h-10 sm:h-14 flex justify-center items-center rounded-2xl  hover:bg-slate-200 transition duration-300">
                        Login
                    </button>
                    
                    <button className="mx-2 sm:mx-4 border-2 border-black text-xs sm:text-sm md:text-base w-20 sm:w-24 md:w-32 h-10 py-1 sm:h-14 flex justify-center items-center rounded-2xl hover:bg-slate-200 transition duration-300">
                        Membership
                    </button>
                </div>

               
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </section>

            
            {isMenuOpen && (
                <div className="sm:hidden mt-2 flex flex-col items-start bg-white shadow-lg rounded-lg p-2">
                    <button className="text-xs text-black bg-slate-200 w-full py-2 rounded-md mb-2 hover:bg-slate-400 transition duration-300">
                        Login
                    </button>
                    <button className="text-xs text-black bg-slate-200 w-full py-2 rounded-md hover:bg-slate-400 transition duration-300">
                        Membership
                    </button>
                </div>
            )}
        </div>
    );
}
