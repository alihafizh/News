"use client";


import Link from "next/link";
import Dashboard from "../../lib/dasbord";

export default function Page() {
    return (
        <div className="flex h-screen"> {/* Set flex container for full height */}
            {/* Left side for Dasbord */}
            <div className="bg-gray-100"> {/* Sidebar styling */}
                <Dashboard/>
            </div>
            
            {/* Right side for Admin Page heading and content */}
            <div className="flex flex-col w-full">
                {/* Top section for Admin Page heading */}
                <div className="bg-blue-700 w-full py-4 h-28 flex justify-between">
                    <div className="text-center my-5">
                        <h1 className="text-white text-2xl mx-10 text-center
                         hover:text-blue-300 hover:scale-105 transition duration-300 
                         ease-in-out">
                            Admin Page
                        </h1>
                    </div>
                    <div>
                    <Link href="/admin" className="mx-10 w-40 h-14 my-3 text-white border border-blue-800
                    rounded-lg bg-blue-700 hover:bg-blue-600 transition duration-300 ease-in-out 
                    transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none active:scale-95
                     active:bg-blue-800 text-center flex items-center justify-center">
                            Back
                    </Link>
                </div>
                </div>

                {/* Bottom section for additional content */}
                <div className="p-4"> {/* Added padding for content spacing */}
                   make news backend
                </div>
            </div>
        </div>
    );
}
