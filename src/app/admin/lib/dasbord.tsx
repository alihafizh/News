"use client";

import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
                <h1 className="text-2xl font-bold mb-6">Logo</h1>
                <nav className="flex-grow">
                    <ul>
                        <li className="mb-4">
                            <Link href="/admin" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/admin/adminpage/viewsnews" className="hover:text-gray-400">
                                Analysis
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/settings" className="hover:text-gray-400">
                                Portofolio
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/settings" className="hover:text-gray-400">
                                Statistic                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/settings" className="hover:text-gray-400">
                                Settings
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/users" className="hover:text-gray-400">
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
                <footer className="mt-auto">
                    <p>&copy; 2024 Your Company</p>
                </footer>
            </aside>
        </div>
    );
}
