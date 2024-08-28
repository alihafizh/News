"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nama_lengkap, setNama_lengkap] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Role selection
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        if (!nama || !email || !password) {
            setError('Name, email, and password are required');
            return;
        }

        try {
            const res = await fetch('/api/apilogin/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nama, email, nama_lengkap, password, isAdmin: role === 'admin' }),
            });

            if (res.ok) {
                console.log('Registration successful');
                alert('Registration successful!');
                router.push('/Login');
            } else {
                const data = await res.json();
                setError(data.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
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
                Register
            </h2>

            {error && <p className="text-red-500 my-4">{error}</p>}

            <div className="flex flex-col justify-center items-center my-8 sm:my-10 border rounded-xl border-black dark:border-white">
                <div className="w-[85vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-[70vh] flex flex-col items-center rounded-xl p-5 shadow-lg dark:shadow-2xl">
                    <div className="my-5 w-full">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black mt-5
                            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                        />
                    </div>
                    <div className="my-5 w-full">
                        <input
                            type="text"
                            placeholder="Enter your full name (optional)"
                            value={nama_lengkap}
                            onChange={(e) => setNama_lengkap(e.target.value)}
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black mt-5
                            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                        />
                    </div>
                    <div className="my-5 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black
                            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                        />
                    </div>
                    <div className="my-5 w-full">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black
                            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                        />
                    </div>
                    <div className="my-5 w-full">
                        <label className="block text-sm md:text-lg mb-2">Select Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="border w-full h-12 md:h-16 p-2 rounded-lg text-sm md:text-lg dark:text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-black text-center"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        className="border w-60 h-12 md:h-20 justify-center items-center flex rounded-xl text-lg md:text-2xl my-2 hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black transition"
                        onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
