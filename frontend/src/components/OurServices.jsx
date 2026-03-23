import React from 'react';

const OurServices = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-6.938 0H5a2 2 0 01-2-2V10a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-.082m-6.938 0H12m0-10V6a2 2 0 012-2h.5a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h.5a2 2 0 012 2v4" />
        </svg>
      ),
      title: 'Free Wi-Fi',
      description: 'Stay connected with high-speed internet access throughout the guest house.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: 'Traditional Breakfast',
      description: 'Start your day with authentic local breakfast featuring fresh ingredients.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Guided Mountain Tours',
      description: 'Explore Skardu\'s breathtaking landscapes with our expert local guides.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#dad4f6] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">Our Services</h2>
          <div className="h-1 w-24 bg-[#EAB308] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-4 p-6 bg-white/70 rounded-xl shadow-lg border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black font-sans text-black">{service.title}</h3>
              <p className="text-black text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;