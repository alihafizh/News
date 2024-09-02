"use client";

import Link from "next/link";
import { FaNewspaper, FaEye, FaChartLine, FaImage, FaPen, FaUser, FaThumbsUp } from 'react-icons/fa'; // Mengimpor ikon

export default function Colums() {
    return (
        <div className="p-4"> {/* Added padding around the grid container */}
            {/* Grid container with responsive column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/admin/adminpage/makenews" className="border p-4 text-center bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-56 rounded-lg">
                    <FaNewspaper className="text-3xl mb-2" /> {/* Menambahkan ikon */}
                    <p>Make News</p>
                </Link>
                <Link href="/admin/adminpage/viewsnews" className="border p-4 text-center bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-56 rounded-lg">
                    <FaEye className="text-3xl mb-2" /> {/* Menambahkan ikon */}
                    <p>Analysis</p>
                </Link>
                <Link href="/admin/adminpage/statistic" className="border p-4 text-center bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-56 rounded-lg">
                    <FaChartLine className="text-3xl mb-2" /> {/* Menambahkan ikon */}
                    <p>Statistic</p>
                </Link>
                <Link href="/admin/adminpage/portofolio" className="border p-4 text-center bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-56 rounded-lg">
                    <FaImage className="text-3xl mb-2" /> {/* Menambahkan ikon */}
                    <p>Portofolio</p>
                </Link>
                <Link href="/admin/adminpage/commentANDlike" className="border p-4 text-center bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-56 rounded-lg">
                    <FaPen className="text-3xl mb-2" /> {/* Menambahkan ikon */}
                    <p>Comment</p>
                </Link>
                <Link href="/admin/adminpage/commentANDlike" className="border p-4 text-center bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-56 rounded-lg">
                    <FaThumbsUp className="text-3xl mb-2" /> {/* Menambahkan ikon */}
                    <p>Like</p>
                </Link>
            </div>
        </div>
    );
}
