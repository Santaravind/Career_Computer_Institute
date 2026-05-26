import React from 'react';
import im1 from '../../assets/im1.jpeg'
import im2 from '../../assets/im2.jpeg';
import im3 from '../../assets/im3.jpeg';
import im4 from '../../assets/im4.jpeg';
import im5 from '../../assets/im5.jpeg';
import im7 from '../../assets/im7.jpeg';

function Gallery() {
  const images = [im1,im2,im3,im4,im5,im7];

  // Duplicate images to create a seamless loop effect
  const scrollingImages = [...images, ...images];

  return (
    <div className="min-h-screen bg-white/60">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Gallery
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-md mx-auto">
            Explore our collection of beautiful moments
          </p>
        </div>

        {/* Scrolling Row - Left to Right */}
        <div className="relative w-full overflow-hidden py-8">
          <div className="animate-scroll-left-to-right flex gap-6 w-max">
            {scrollingImages.map((image, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-72 md:w-80 h-48 md:h-56 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Second row scrolling in opposite direction */}
        <div className="relative w-full overflow-hidden py-8 mt-8">
          <div className="animate-scroll-right-to-left flex gap-6 w-max">
            {[...scrollingImages].reverse().map((image, index) => (
              <div
                key={`reverse-${index}`}
                className="group relative flex-shrink-0 w-72 md:w-80 h-48 md:h-56 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery item reverse ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>
    </div>
  );
}

export default Gallery;