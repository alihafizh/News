import SecNavbar from "@/app/components/secnavbar";
import SecCarausel from "../assets/seccarausel";
import Carausel from "@/app/components/carausel";
import Navbar from "@/app/components/navbar";

const newsData = [
    { id: 1, title: "Breaking News: Big Event!" },
    { id: 2, title: "Latest Tech Updates" },
    { id: 3, title: "Market Insights" },
    { id: 4, title: "Health and Wellness Tips" },
    { id: 5, title: "Global Politics: New Developments" },
    { id: 6, title: "Sports Highlights of the Week" },
    { id: 7, title: "Climate Change: Urgent Action Needed" },
    { id: 8, title: "Innovative Startups to Watch" },
    { id: 9, title: "Entertainment Buzz: Movie Premieres" },
    { id: 10, title: "Travel Destinations for 2024" },
];

export default function Page() {
    return (
        <div className="min-h-screen">
            <Navbar news={newsData} />
            <Carausel />

            <SecNavbar />

            <div className="py-8">
                <SecCarausel />

                {/* Section 1: Tampilan bawah dengan pilihan berita */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold">Pilihan Berita</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Insert components or content for this section */}
                    </div>
                </div>

                {/* Section 2: Tampilan berita yang media ingin baca */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold">Berita yang Media Ingin Baca</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Insert components or content for this section */}
                    </div>
                </div>

                {/* Section 3: Tampilan berita lanjutan */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold">Berita Lanjutan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Insert components or content for this section */}
                    </div>
                </div>
            </div>
        </div>
    );
}
