import { useRef } from 'react';

import chef1 from '../assets/chef-1.png';
import chef2 from '../assets/chef-2.png';
import chef3 from '../assets/chef-3.png';
import chef4 from '../assets/chef-4.png';

const teamData = [
    {
    id: 1,
    name: "Chef Elena",
    role: "Pastry Chef",
    specialty: "Artisanal Breads & Gourmet Desserts",
    experience: "12 Years",
    image: chef1,
  },
  {
    id: 2,
    name: "Chef Marcus",
    role: "Executive Chef",
    specialty: "French & Italian Cuisine",
    experience: "15 Years",
    image: chef2,
  },
  {
    id: 3,
    name: "Chef Sarah",
    role: "Head Mixologist",
    specialty: "Craft Cocktails & Beverages",
    experience: "8 Years",
    image: chef3,
  },
  
  {
    id: 4,
    name: "Chef David",
    role: "Sous Chef",
    specialty: "Asian Fusion & Modern Seafood",
    experience: "10 Years",
    image: chef4,
  }
];

const Team = () => {
  return (
    <section id="team" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-[#1e182e] relative z-10">
      {/* Gradient Line - Section ke top me */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8 sm:mb-10 md:mb-12"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        {/* --- Top Heading Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 tracking-wide">
            Meet Our Master Chefs
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-2">
            The Midnight Fork team is composed of passionate professionals. With decades of global experience, our culinary artists bring passion, precision, and unforgettable flavors to your table.
          </p>
        </div>

        {/* --- Team Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {teamData.map((chef) => (
            <div key={chef.id} className="group flex flex-col items-center">
              
              {/* Image Container with Premium Hover Effect */}
              <div className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] overflow-hidden rounded-2xl mb-5 sm:mb-6 relative border border-white/5 shadow-lg group-hover:shadow-[0_10px_40px_rgba(124,58,237,0.3)] transition-all duration-500">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e182e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#7c3aed] transition-colors duration-300">
                {chef.name}
              </h3>
              
              {/* Role with Gradient Line */}
              <div className="flex flex-col items-center mb-3 sm:mb-4">
                <p className="text-[#7c3aed] font-semibold tracking-widest uppercase text-xs mb-2">
                  {chef.role}
                </p>
                {/* Gradient Line under role */}
                <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
              </div>
              
              {/* Specialty */}
              <div className="text-center">
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                  {chef.specialty}
                </p>
                {/* Experience Badge */}
                <span className="inline-block bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] px-3 py-1 rounded-full text-xs font-medium">
                  {chef.experience} Experience
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;