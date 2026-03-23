import React from 'react';
import { useNavigate } from 'react-router-dom';
import room1 from '../assets/Rooms/Room (1).jpeg';
import room2 from '../assets/Rooms/Room (2).jpeg';
import Button from './ui/Button';

const FeaturedRooms = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      image: room1,
      price: '$120/night',
      title: 'Deluxe Mountain View Room'
    },
    {
      id: 2,
      image: room2,
      price: '$150/night',
      title: 'Premium Suite with Balcony'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#dad4f6] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">Featured Rooms</h2>
          <div className="h-1 w-24 bg-[#EAB308] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white/70 rounded-xl overflow-hidden shadow-lg border border-white/20 hover:bg-white/80 transition-all duration-300">
              <img src={room.image} alt={room.title} className="w-full h-64 object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-black">{room.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-[#EAB308] text-xl font-bold">{room.price}</span>
                  <Button 
                    variant="primary" 
                    className="bg-[#EAB308] text-black hover:bg-[#D4AF37] border-0"
                    onClick={() => navigate(`/booking/${room.id}`)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;