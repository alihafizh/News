"use client";

export default function HotNews() {
    const newsData = [
        { id: 1, title: "Breaking News: Big Event!", description: "A major event is happening now, details inside.", imgSrc: "picture/berita1.jpg", link: "/news/big-event" },
        { id: 2, title: "Latest Tech Updates", description: "Get the latest insights on cutting-edge technologies.", imgSrc: "picture/berita2.jpg", link: "/news/tech-updates" },
        { id: 3, title: "Market Insights", description: "Learn about the current trends and movements in the market.", imgSrc: "picture/berita3.jpg", link: "/news/market-insights" },
        { id: 4, title: "Health and Wellness Tips", description: "Tips to help you stay healthy and improve your well-being.", imgSrc: "picture/berita4.jpg", link: "/news/health-tips" },
        { id: 5, title: "Global Politics: New Developments", description: "Breaking news on the latest political changes across the globe.", imgSrc: "picture/berita5.jpg", link: "/news/politics-updates" },
        { id: 6, title: "Sports Highlights of the Week", description: "Catch up on the top sports moments of the week.", imgSrc: "picture/berita6.jpg", link: "/news/sports-highlights" }
    ];

    return (
        <div className="my-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mx-4 md:mx-8 lg:mx-20 xl:mx-52">
                {newsData.map((newsItem) => (
                    <a
                        key={newsItem.id}
                        href={newsItem.link} // Link to the respective news article
                        className="w-full h-56 border rounded-xl flex items-center p-4 hover:shadow-lg transition-shadow duration-200" // Add hover effect
                    >
                        {/* Image on the left */}
                        <img
                            src={newsItem.imgSrc}
                            alt={newsItem.title}
                            className="w-40 h-40 mr-4" // Image size 40x40
                        />
                        {/* Text content (headline and description) */}
                        <div className="w-full">
                            {/* Headline */}
                            <p className="text-center font-bold">{newsItem.title}</p>
                            {/* Short description */}
                            <p className="text-center text-sm mt-2">{newsItem.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
