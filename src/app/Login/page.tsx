"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState('');
    const [showQuestions, setShowQuestions] = useState(true);

    const handleLogin = async () => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (res.ok) {
                const data = await res.json();
                console.log('Login success:', data); // Tambahkan log di sini
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAdmin', data.isAdmin.toString());
    
                if (data.isAdmin) {
                    router.push('/admin');
                } else {
                    router.push('/');
                }
            } else {
                const errorData = await res.json();
                setError(errorData.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen">
            <button
                onClick={() => router.push('/')}
                className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
                Back
            </button>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center mt-20 sm:mt-24">
                NEWS
            </h2>

            {error && <p className="text-red-500 my-4">{error}</p>}

            <div className="flex flex-col justify-center items-center my-8 sm:my-10 border rounded-xl border-black dark:border-white">
                <div className="w-[85vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-[50vh] md:h-[55vh] flex flex-col items-center rounded-xl p-5 shadow-lg dark:shadow-2xl">
                    {showQuestions && (
                        <div className="my-5 w-full">
                            <label className="block text-sm md:text-lg mb-2">Are you an Admin?</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <button
                                className="border w-full h-12 md:h-16 justify-center items-center flex rounded-xl text-lg md:text-2xl my-5 hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black transition"
                                onClick={() => setShowQuestions(false)}
                            >
                                Proceed to Login
                            </button>
                        </div>
                    )}

                    {!showQuestions && (
                        <>
                            <div className="my-5 w-full">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black mt-5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                                />
                            </div>
                            <div className="my-5 w-full">
                                <input 
                                    type="password" 
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                                />
                            </div>
                            <button 
                                className="border w-60 h-12 md:h-20 justify-center items-center flex rounded-xl text-lg md:text-2xl my-2 hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black transition"
                                onClick={handleLogin}
                            >
                                Log in
                            </button>
                            <button 
                                className="w-40 md:w-60 h-12 md:h-16 justify-center items-center flex my-5 text-sm md:text-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition"
                                onClick={() => alert('Forgotten password clicked!')}
                            >
                                Forgotten password
                            </button>
                            <p className="text-sm md:text-lg text-black dark:text-white">or</p>
                            <button 
                                className="border w-40 md:w-60 h-12 md:h-16 justify-center items-center flex rounded-lg my-5 text-lg md:text-2xl hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition"
                                onClick={() => router.push('/databases/register')}
                            >
                                Register 
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
