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
                <h1 className="text-2xl font-bold mb-6">Exclusive Member Offers</h1>
                <div className="space-y-6">
                    {/* Promo 1 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 1: 50% Off Your First Month + Free E-book</h2>
                        <p className="mb-4">
                            Start your membership with a <strong>50% discount</strong> on your first month and receive a complimentary e-book on industry insights. 
                            Dive into our premium content while enhancing your knowledge with expert-curated resources. Limited-time offer!
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Join Now</button>
                    </div>

                    {/* Promo 2 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 2: 14-Day Free Trial + Early Access to Articles</h2>
                        <p className="mb-4">
                            Enjoy a <strong>14-day free trial</strong> with no strings attached, plus early access to our most popular articles.
                            Experience the full benefits of membership and stay ahead with the latest insights before they’re released to the public.
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start Free Trial</button>
                    </div>

                    {/* Promo 3 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 3: Rp150,000 Shopping Voucher + Personalized Newsfeed</h2>
                        <p className="mb-4">
                            Become a member today and receive a <strong>Rp150,000 shopping voucher</strong> to spend at our partner stores, along with a personalized newsfeed tailored to your interests.
                            Shop smarter and stay informed with content that matters most to you.
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up Now</button>
                    </div>

                    {/* Promo 4 */}
                    <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">Promo 4: Exclusive Access to VIP Webinars + Networking Opportunities</h2>
                        <p className="mb-4">
                            Join our community and gain <strong>exclusive access</strong> to VIP webinars hosted by industry leaders, along with special networking opportunities.
                            Connect with experts and peers to expand your knowledge and grow your network.
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Secure Your Spot</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
