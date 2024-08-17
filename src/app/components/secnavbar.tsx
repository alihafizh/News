"use client";

import Link from 'next/link';

export default function SecNavbar() {
    return (
        <div className="h-28 w-full sticky top-20 z-10 my-4 sm:top-20 md:top-24 lg:top-32 xl:top-40 flex justify-center items-center">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-blue-500 h-28 rounded-xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 flex justify-center items-center">
                <section className="w-full">
                    <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5">
                        <Link href="/" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Home
                            </button>
                        </Link>
                        <Link href="/berita terbaru" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Berita Terbaru
                            </button>
                        </Link>
                        <Link href="/berita" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Berita
                            </button>
                        </Link>
                        <Link href="/internasional" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Internasional
                            </button>
                        </Link>
                        <Link href="/hukum" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Hukum
                            </button>
                        </Link>
                        <Link href="/index" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Index
                            </button>
                        </Link>
                        <Link href="/ekonomi" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Ekonomi
                            </button>
                        </Link>
                        <Link href="/politik" passHref>
                            <button className="font-bold text-xs sm:text-sm md:text-base lg:text-base text-white bg-blue-500 rounded-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 hover:bg-blue-700 transition-colors">
                                Politik
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
