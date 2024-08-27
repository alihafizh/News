"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from '../context/ThemeContext'; 

const newsData = [
  { id: 1, title: "Breaking News: Big Event!", link: "/page1" },
  { id: 2, title: "Latest Tech Updates", link: "/page2" },
  { id: 3, title: "Market Insights", link: "/page3" },
  { id: 4, title: "Health and Wellness Tips", link: "/page4" },
  { id: 5, title: "Global Politics: New Developments", link: "/page5" },
  { id: 6, title: "Sports Highlights of the Week", link: "/page6" },
  { id: 7, title: "Climate Change: Urgent Action Needed", link: "/page7" },
  { id: 8, title: "Innovative Startups to Watch", link: "/page8" },
  { id: 9, title: "Entertainment Buzz: Movie Premieres", link: "/page9" },
  { id: 10, title: "Travel Destinations for 2024", link: "/page10" },
  { id: 11, title: "New Breakthroughs in AI", link: "/page11" },
  { id: 12, title: "Top Business Strategies of the Year", link: "/page12" }
];

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;
  const totalSlides = Math.ceil(newsData.length / slidesPerPage);
  const { isDarkMode } = useTheme(); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full my-20 sm:my-20 md:my-10 lg:my-10 xl:my-28">
      <div className="relative">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform ease-out duration-300"
            style={{
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
              width: `${100 * totalSlides}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div key={index} className="flex justify-center w-full">
                {newsData
                  .slice(index * slidesPerPage, (index + 1) * slidesPerPage)
                  .map((newsItem) => (
                    <Link href={newsItem.link} key={newsItem.id}>
                      <div className="mr-10">
                      <div className={`mx-10 h-56 w-full flex items-center justify-center text-center ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} px-4 py-4 border rounded-lg cursor-pointer`}>
                        <p className={`text-sm font-medium  ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{newsItem.title}</p>
                      </div>
                  </div>
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/* Dot Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? (isDarkMode ? "bg-gray-300" : "bg-gray-800") : (isDarkMode ? "bg-gray-500" : "bg-gray-400")
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
