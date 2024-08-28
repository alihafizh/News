"use client"

import Footer from "@/app/components/footer"
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    return (
        <div className="relative p-4">
            {/* Back Button */}
            <button
                onClick={() => router.push('/membership')}
                className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg px-4 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
                Back
            </button>

            <div className="p-4 mt-12">
                <h1 className="text-2xl font-bold mb-6">New Member Promotions</h1>
                <div className="space-y-6">
                    {/* Promo 1 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 1: 50% Discount on First Subscription</h2>
                        <p className="mb-4">Join as a new member and enjoy a <strong>50% discount</strong> on your first month's subscription. Get exclusive access to the latest news, in-depth analysis, and premium content at half the price! Don't miss this opportunity, the offer is valid for a limited time!</p>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Pay Now</button>
                    </div>
                    
                    {/* Promo 2 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 2: 7-Day Free Trial</h2>
                        <p className="mb-4">Sign up as a new member and enjoy a <strong>7-day free trial</strong> to all our premium content. Discover the news that matters to you, at no cost. Join now and experience a different way of reading the news!</p>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Pay Now</button>
                    </div>
                    
                    {/* Promo 3 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 3: Shopping Voucher</h2>
                        <p className="mb-4">Become a new member and receive a <strong>shopping voucher worth Rp100,000</strong> for your first purchase at our partner stores. In addition to getting the latest news, you can also shop more affordably. This offer is valid for a limited time, so sign up now!</p>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Pay Now</button>
                    </div>
                    
                    {/* Promo 4 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 4: Exclusive Webinar Access</h2>
                        <p className="mb-4">Sign up now and gain <strong>exclusive access</strong> to our upcoming webinar featuring industry experts. Learn from the best and get insider insights on trending topics and future developments. This promotion is available for a limited time, so don’t miss out!</p>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Pay Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
