"use client"

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext'; 

export default function SecCarausel() {
  const { isDarkMode } = useTheme(); 

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <div className="flex gap-5">
        {["Berita 1", "Berita 2", "Berita 3", "Berita 4", "Berita 5"].map((berita, index) => (
          <div 
            key={index}
            className={`w-36 h-36 flex justify-center items-center rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:shadow-xl ${
              isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {berita}
          </div>
        ))}
      </div>
    </div>
  );
}
