"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SecNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`h-28 w-full sticky top-20 z-10 my-4 sm:top-20 md:top-28 lg:top-28 xl:top-40 flex justify-center items-center transition-colors duration-300 ${isScrolled ? 'bg-gray-200' : ''}`}>
            <div className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-28 rounded-xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 flex justify-center items-center transition-colors duration-300 ${isScrolled ? 'bg-gray-200 rounded-sm' : 'bg-blue-500'}`}>
                <section className="w-full">
                    <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5">
                        <Link href="/" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/allnews/beritaterbaru" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Berita Terbaru
                            </button>
                        </Link>
                        <Link href="/allnews/berita" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Berita
                            </button>
                        </Link>
                        <Link href="/allnews/internasional" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Internasional
                            </button>
                        </Link>
                        <Link href="/allnews/hukum" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Hukum
                            </button>
                        </Link>
                        <Link href="/allnews/index" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Index
                            </button>
                        </Link>
                        <Link href="/allnews/ekonomi" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Ekonomi
                            </button>
                        </Link>
                        <Link href="/allnews/politik" passHref>
                            <button className={`font-bold text-xs sm:text-sm md:text-base lg:text-base rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-colors ${isScrolled ? 'text-blue-500 bg-gray-200 hover:bg-white' : 'text-white bg-blue-500 hover:bg-blue-700'}`}>
                                Politik
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
