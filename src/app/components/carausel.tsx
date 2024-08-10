"use client";
import { useState, useEffect } from "react";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "./picture/car1.jpeg",
        "./picture/car2.jpeg",
        "./picture/car3.jpeg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <div className="relative w-[40vw] max-w-[100vw] sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[60vw] xl:max-w-[60vw] overflow-hidden rounded-3xl">
                <div className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`carousel-${index}`} 
                             className="w-full flex-shrink-0 object-cover" /> 
                    ))}
                </div>
            </div>
        </div>
    );
}
