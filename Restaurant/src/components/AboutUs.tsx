import masterChef from "../assets/master_chef.jpg"

function AboutUs() {
  return (
    <section id="about-us" className="w-full relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-24 md:pb-28 lg:pb-36 bg-[#17161b] transform-gpu">
      
      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center px-4 sm:px-6 mb-10 sm:mb-12 md:mb-14">
        
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 tracking-wide">
          About Us
        </h2>

        <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6 md:mb-7 font-light max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
          Our achievement story stands as a powerful testament to teamwork and perseverance. 
          United, we have faced challenges, celebrated victories, and woven a narrative of growth and success.
        </p>

        <button className="group relative overflow-hidden bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 xs:px-6 sm:px-7 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-md font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] active:scale-95 touch-manipulation min-h-[44px]">
          <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
          
          <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base">
            Read More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>
      </div>

      {/* Image Container */}
      <div className="w-[95%] sm:w-[92%] md:w-[96%] max-w-[1216px] mx-auto mt-6 sm:mt-8 md:mt-10 relative">
        <div className="w-full h-[220px] xs:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[644px] rounded-lg sm:rounded-xl md:rounded-2xl bg-[#1d1136] overflow-hidden shadow-2xl relative">
          {/* ✅ Fixed: Removed fetchpriority as prop, using native attribute */}
          <img 
            src={masterChef} 
            alt="Professional Chef Plating Gourmet Food" 
            className="w-full h-full object-cover transform-gpu"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>
        
        {/* Stats Card */}
        <div className="absolute -bottom-8 xs:-bottom-10 sm:-bottom-12 md:-bottom-14 lg:-bottom-16 xl:-bottom-20 left-1/2 -translate-x-1/2 w-[98%] xs:w-[96%] sm:w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-5xl bg-[#1d1136] rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/5 py-4 xs:py-5 sm:py-6 md:py-8 px-2 xs:px-3 sm:px-4 md:px-6 flex flex-wrap justify-around items-center z-20 transform-gpu gap-3 xs:gap-4 sm:gap-5 md:gap-6">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2 w-[45%] xs:w-auto sm:w-auto group cursor-pointer transition-all duration-300 hover:scale-105">
            <svg className="w-6 h-6 xs:w-7 sm:w-8 md:w-9 text-[#7c3aed] mb-0.5 xs:mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
            <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">7+</h4>
            <p className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium">Years Exp.</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2 w-[45%] xs:w-auto sm:w-auto group cursor-pointer transition-all duration-300 hover:scale-105">
            <svg className="w-6 h-6 xs:w-7 sm:w-8 md:w-9 text-[#7c3aed] mb-0.5 xs:mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
              <line x1="6" y1="17" x2="18" y2="17"></line>
            </svg>
            <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">30+</h4>
            <p className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium">Menu Dishes</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2 w-[45%] xs:w-auto sm:w-auto group cursor-pointer transition-all duration-300 hover:scale-105">
            <svg className="w-6 h-6 xs:w-7 sm:w-8 md:w-9 text-[#7c3aed] mb-0.5 xs:mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">500+</h4>
            <p className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium">Daily Guests</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2 w-[45%] xs:w-auto sm:w-auto group cursor-pointer transition-all duration-300 hover:scale-105">
            <svg className="w-6 h-6 xs:w-7 sm:w-8 md:w-9 text-[#7c3aed] mb-0.5 xs:mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">10k+</h4>
            <p className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium">Happy Clients</p>
          </div>

        </div>
      </div>

      <div className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24"></div>
    </section>
  );
}

export default AboutUs;