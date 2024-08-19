"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; 
import { FaMoon, FaSun } from 'react-icons/fa'; 

interface NewsItem {
    id: number;
    title: string;
}

interface NavbarProps {
    news: NewsItem[];
    showSearch?: boolean; 
}

export default function Navbar({ news, showSearch = true }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentDate, setCurrentDate] = useState(""); 
    const { isDarkMode, toggleTheme } = useTheme(); 

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        const today = new Date();
        setCurrentDate(formatDate(today)); 
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    const filteredNews = news.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`w-full px-2 sticky top-0 z-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} h-20 md:h-28 xl:h-40`}>
            <section className="flex flex-row justify-between items-center h-full">
                <Link href="/">
                    <img 
                        src="./picture/Logonews.jpeg" 
                        alt="logo" 
                        className="h-12 w-16 sm:h-16 sm:w-24 md:h-20 md:w-32 cursor-pointer" 
                    />
                </Link>

                <div className="flex items-center">
                    {showSearch && (
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`px-2 py-1 rounded-lg w-32 sm:w-40 md:w-48 lg:w-72 xl:w-96 ${isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                            />

                            {searchQuery && (
                                <div className={`absolute left-0 right-0 mt-1 shadow-lg rounded-lg z-10 max-h-40 overflow-auto w-full ${isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-black'}`}>
                                    {filteredNews.length > 0 ? (
                                        <ul>
                                            {filteredNews.map((item) => (
                                                <li key={item.id} className="p-2 border-b hover:bg-gray-700 cursor-pointer">
                                                    {item.title}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="p-2">No news found for "{searchQuery}"</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="hidden sm:flex flex-row items-center">
                    <h1 className="mx-2 sm:mx-4 text-xs sm:text-sm md:text-base w-20 sm:w-28 py-1 h-10 sm:h-14 flex justify-center items-center">
                        {currentDate}
                    </h1>

                    <button onClick={toggleTheme} className={`w-15 h-15 mr-4 justify-center items-center flex rounded ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {isDarkMode ? <FaSun className="size-12 p-2"/> : <FaMoon className="size-12 p-2" />}
                    </button>

                    <Link href="/Login" passHref>
                        <button 
                            className={`mx-2 sm:mx-4 border-2 text-xs sm:text-sm md:text-base w-20 sm:w-24 md:w-32 py-1 h-10 sm:h-14 flex justify-center items-center rounded-2xl hover:bg-slate-600 transition duration-300 cursor-pointer ${isDarkMode ? 'border-white text-white' : 'border-gray-500 hover:bg-gray-300 text-black'}`}>
                            Login
                        </button>
                    </Link>

                    <Link href="/membership" passHref>
                        <button 
                            className={`mx-2 sm:mx-4 border-2 text-xs sm:text-sm md:text-base w-20 sm:w-24 md:w-32 h-10 py-1 sm:h-14 flex justify-center items-center rounded-2xl hover:bg-slate-600 transition duration-300 cursor-pointer ${isDarkMode ? 'border-white text-white' : 'border-gray-500 hover:bg-gray-300 text-black'}`}>
                            Membership
                        </button>
                    </Link>
                </div>

                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </section>

            {isMenuOpen && (
                <div className={`absolute right-2 top-20 w-48 shadow-lg rounded-lg p-4 z-30 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <div className="flex flex-col">
                        <button onClick={toggleTheme} className={`flex items-center justify-center p-2 my-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-slate-200 text-black'}`}>
                            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                        <Link href="/Login" passHref>
                            <button 
                                className={`text-xs w-full py-2 rounded-md mb-2 hover:bg-slate-400 transition duration-300 cursor-pointer ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-slate-200 text-black border border-gray-300'}`}>
                                Login
                            </button>
                        </Link>
                        <Link href="/membership" passHref>
                            <button 
                                className={`text-xs w-full py-2 rounded-md hover:bg-slate-400 transition duration-300 cursor-pointer ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-slate-200 text-black border border-gray-300'}`}>
                                Membership
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
