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
    <section id="team" className="w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 bg-[#1e182e] relative z-10">
      
      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        {/* Top Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 tracking-wide">
            Meet Our Master Chefs
          </h2>
          <p className="text-gray-400 text-sm xs:text-base leading-relaxed px-2">
            The Midnight Fork team is composed of passionate professionals. With decades of global experience, our culinary artists bring passion, precision, and unforgettable flavors to your table.
          </p>
        </div>

        {/* Team Cards Grid - Responsive: 1 col (mobile) → 2 col (tablet) → 4 col (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-8">
          {teamData.map((chef) => (
            <div 
              key={chef.id} 
              className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              
              {/* Image Container with Hover Effect */}
              <div className="w-full max-w-[280px] sm:max-w-full h-[220px] xs:h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[350px] overflow-hidden rounded-xl xs:rounded-2xl mb-3 xs:mb-4 sm:mb-5 relative border border-white/5 shadow-lg group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.25)] transition-all duration-500">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e182e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Name - with hover color change */}
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1 xs:mb-1.5 sm:mb-2 group-hover:text-[#7c3aed] transition-colors duration-300 text-center">
                {chef.name}
              </h3>
              
              {/* Role with Gradient Line */}
              <div className="flex flex-col items-center mb-2 xs:mb-2.5 sm:mb-3">
                <p className="text-[#7c3aed] font-semibold tracking-wider uppercase text-[10px] xs:text-xs mb-1.5 xs:mb-2">
                  {chef.role}
                </p>
                {/* Animated Gradient Line */}
                <div className="h-px w-12 xs:w-14 sm:w-16 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent group-hover:w-20 xs:group-hover:w-24 transition-all duration-300"></div>
              </div>
              
              {/* Specialty and Experience */}
              <div className="text-center px-2">
                <p className="text-gray-400 text-[10px] xs:text-xs leading-relaxed mb-2 xs:mb-2.5 sm:mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {chef.specialty}
                </p>
                {/* Experience Badge */}
                <span className="inline-block bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full text-[9px] xs:text-[10px] sm:text-xs font-medium group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/50 transition-all duration-300">
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