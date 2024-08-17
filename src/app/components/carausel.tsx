    "use client";
    import { useState, useEffect } from "react";
    import Link from "next/link";

    export default function Carousel() {
        const [currentIndex, setCurrentIndex] = useState(0);

        const slides = [
            { src: "./picture/car1.jpeg", link: "/page1" },
            { src: "./picture/car2.jpeg", link: "/page2" },
            { src: "./picture/car3.jpeg", link: "/page3" }
        ];

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
            }, 7000);

            return () => clearInterval(interval);
        }, [slides.length]);

        return (
            <div className="flex justify-center items-center overflow-hidden">
                {/* Adjust width and height as desired */}
                <div className="relative w-[40vw] h-[50vh] max-w-[100vw] sm:max-w-full md:max-w-[60vw] lg:max-w-[60vw] xl:max-w-[60vw] overflow-hidden rounded-3xl">
                    {/* Slide container */}
                    <div
                        className="flex transition-transform duration-1000"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <Link href={slide.link} key={index}>
                                <div className="flex-shrink-0 h-[50vh] w-[40vw] py-10 px-10  ">
                                    {/* Set width and height of images */}
                                    <img
                                        src={slide.src}
                                        alt={`carousel-${index}`}
                                        className="w-full h-full object-cover rounded-3xl cursor-pointer"
                                        style={{ height: "100%", width: "100%" }}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
