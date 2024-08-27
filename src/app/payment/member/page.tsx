"use client";


import { useRouter } from 'next/navigation';

export default function Member()
{
    const router = useRouter();
    return (
        <div className="relative min-h-screen bg-gradient-to-r from-neutral-400 via-slate-500 to-slate-200 p-10">
              {/* Back Button */}
              <button
                onClick={() => router.push('/membership')} // Navigate to home page
                className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
                Back
            </button>
            
            <div className="max-w-6xl mx-auto my-12">
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl transform rotate-2">
                    <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                        Member
                    </h2>
                    <p className="text-lg mt-4 text-center text-gray-700 dark:text-gray-300">
                        Exclusive benefits for our valued members.
                    </p>
                    <ul className="mt-6 space-y-2 text-left text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Priority support
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Early access to news
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Special discounts
                        </li>
                    </ul>
                    <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 transform -translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 transform translate-x-20 translate-y-20"></div>
                </div>

                <div className="relative mt-16 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl transform -rotate-2">
                    <h2 className="text-4xl font-bold my-4 text-gray-800 dark:text-white">What is a Member?</h2>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                        Becoming a member means officially joining a community or service and gaining exclusive access to various features, content, or benefits not available to non-members. As a member, you are part of a closer relationship with the service, often involving subscriptions or registration.
                    </p>
                    <h2 className="text-4xl font-bold my-4 text-gray-800 dark:text-white">Why Become a Member?</h2>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                        There are several reasons to become a member of a service or community:
                    </p>
                    <ul className="mt-6 space-y-2 text-left text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Access exclusive content and services.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Enjoy additional benefits like discounts and priority support.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Experience a more personalized user experience.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Connect with a community that shares your interests.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Receive enhanced security and convenience features.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>Access opportunities for personal and professional growth.
                        </li>
                    </ul>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 transform -translate-x-12 translate-y-12"></div>
                </div>
            </div>
        </div>
    );
}
