import React from 'react';
import img1 from '../assets/Gallery/1.jpeg';
import img2 from '../assets/Gallery/2.jpeg';
import img3 from '../assets/Gallery/3.jpeg';
import img4 from '../assets/Gallery/4.jpeg';
import img5 from '../assets/Gallery/5.jpeg';
import img6 from '../assets/Gallery/6.jpeg';

const PhotoGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-20 px-6 bg-[#dad4f6] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">Photo Gallery</h2>
          <div className="h-1 w-24 bg-[#EAB308] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;