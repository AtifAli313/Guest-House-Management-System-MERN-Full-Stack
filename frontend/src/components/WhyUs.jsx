import React from 'react';

const WhyUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: '24/7 Hot Water',
      description: 'Enjoy uninterrupted hot water supply throughout your stay.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Near Shangrila Resort',
      description: 'Conveniently located close to one of Skardu\'s most famous attractions.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Bonfire Terrace',
      description: 'Relax by the fire under the stars on our dedicated terrace area.'
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#dad4f6] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">Why Choose Us</h2>
          <div className="h-1 w-24 bg-[#EAB308] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 bg-white/70 rounded-xl shadow-lg border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
              <p className="text-black text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;