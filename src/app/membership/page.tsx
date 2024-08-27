"use client";

import { useRouter } from 'next/navigation'; // Import useRouter hook

export default function Membership() {
    const router = useRouter();

    return (
        <div className="relative p-4">
            {/* Back Button */}
            <button
                onClick={() => router.push('/')} // Navigate to home page
                className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
                Back
            </button>

            <h1 className="text-6xl flex justify-center items-center my-11">
                NEWS
            </h1>

            <div className="flex justify-center items-center p-2 my-20 space-x-10">
                <div className="text-center border border-gray-300 dark:border-gray-600 w-96 h-[55vh] flex flex-col items-center rounded-xl p-5 shadow-lg dark:shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-3xl">
                    <div className="flex flex-col flex-grow justify-between">
                        <div>
                            <p className="text-4xl font-bold my-4">Member</p>
                            <p className="text-lg mb-4">Exclusive benefits for our valued members.</p>
                            <ul className="list-disc list-inside mb-4 text-left">
                                <li>Priority support</li>
                                <li>Early access to news</li>
                                <li>Special discounts</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => router.push('/payment/member')} // Navigate to the member page
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mt-auto"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="text-center border border-gray-300 dark:border-gray-600 w-96 h-[60vh] flex flex-col items-center rounded-xl p-5 shadow-lg dark:shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-3xl">
                    <div className="flex flex-col flex-grow justify-between">
                        <div>
                            <p className="text-4xl font-semibold my-4">New Member</p>
                            <p className="text-lg mb-4">Welcome offers for new members joining us.</p>
                            <ul className="list-disc list-inside mb-4 text-left">
                                <li>Welcome package</li>
                                <li>Exclusive introductory offers</li>
                                <li>Monthly newsletters</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => router.push('/payment/newmember')} // Navigate to the member page
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mt-auto"
                        >
                            Join Now
                        </button>
                    </div>
                </div>

                <div className="text-center border border-gray-300 dark:border-gray-600 w-96 h-[55vh] flex flex-col items-center rounded-xl p-5 shadow-lg dark:shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-3xl">
                    <div className="flex flex-col flex-grow justify-between">
                        <div>
                            <p className="text-xl font-bold my-4">Standard</p>
                            <p className="text-lg mb-4">Our standard offering for all users.</p>
                            <ul className="list-disc list-inside mb-4 text-left">
                                <li>Access to all content</li>
                                <li>Regular updates</li>
                                <li>Community support</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => router.push('/payment/standard')} // Navigate to the member page
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mt-auto"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
