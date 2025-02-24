"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const images = [
  "/images/video/main.jpg",
  "/images/logo/gal1.jpg",
  "/images/logo/gal2.jpg",
  "/images/logo/gal3.jpg",
  "/images/logo/gal4.jpg",
  "/images/logo/gal5.jpg",
  "/images/logo/gal6.jpg",
  "/images/logo/gal7.jpg",
  "/images/logo/gal8.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{marginTop:"100px"}} className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">معرض الصور</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Company Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Dialog open={true} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="w-full rounded" />
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;