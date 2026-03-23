import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 px-6 bg-[#dad4f6] text-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">Guest Testimonials</h2>
          <div className="h-1 w-24 bg-[#EAB308] mx-auto rounded-full"></div>
          <blockquote className="text-xl md:text-2xl italic text-black leading-relaxed">
            The breathtaking views of Skardu from Gangs Sengy Guest House are simply unforgettable. The hospitality and the serene atmosphere made our stay truly magical.
          </blockquote>
          <cite className="text-black font-semibold">- A satisfied guest</cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;