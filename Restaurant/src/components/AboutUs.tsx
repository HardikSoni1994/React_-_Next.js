import masterChef from "../assets/master_chef.jpg"

function AboutUs() {
  return <>
    <section id="about-us" className="w-full relative z-10 pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28 md:pb-32 lg:pb-40 bg-[#17161b] transform-gpu">
      {/* Gradient Line - Section ke top me */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8 sm:mb-10 md:mb-12"></div>

      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center px-4 sm:px-6 mb-12 sm:mb-14 md:mb-16">
        
        {/* 1. Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 tracking-wide">
          About Us
        </h2>

        {/* 2. Description Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-7 md:mb-8 font-light max-w-[90%] sm:max-w-full">
          Our achievement story stands as a powerful testament to teamwork and perseverance. 
          United, we have faced challenges, celebrated victories, and woven a narrative of growth and success.
        </p>

        {/* 3. Read More Button */}
        <button className="group relative overflow-hidden bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-colors shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] mb-12 sm:mb-14 md:mb-16 flex items-center gap-2 text-sm sm:text-base">
          {/* Glass Sliding Effect */}
          <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
          
          <span className="relative z-10">Read More</span>
          <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <div className="w-[95%] sm:w-[92%] md:w-[96%] max-w-[1216px] mx-auto mt-8 sm:mt-10 md:mt-12 relative">
        <div className="w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-[644px] rounded-[12px] bg-[#1d1136] overflow-hidden shadow-2xl relative">
          <img 
            src={masterChef} 
            alt="Professional Chef Plating Gourmet Food" 
            className="w-full h-full object-cover transform-gpu" 
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>
        {/* ---> PERFECT STATS CARD <--- */}
        <div className="absolute -bottom-10 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] md:w-[85%] max-w-5xl bg-[#1d1136] rounded-xl sm:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-12 flex flex-wrap justify-between md:justify-around items-center z-20 transform-gpu gap-4 sm:gap-0">
          
          {/* Stat 1: 7+ Years */}
          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto mb-6 md:mb-0 group cursor-pointer">
            <svg className="w-9 h-9 text-[#7c3aed] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
            <h4 className="text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">7+</h4>
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-gray-200">Years Exp.</p>
          </div>

          {/* Stat 2: 30+ Dishes */}
          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto mb-6 md:mb-0 group cursor-pointer">
            <svg className="w-9 h-9 text-[#7c3aed] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
              <line x1="6" y1="17" x2="18" y2="17"></line>
            </svg>
            <h4 className="text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">30+</h4>
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-gray-200">Menu Dishes</p>
          </div>

          {/* Stat 3: 500+ Reviews */}
          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto group cursor-pointer">
            <svg className="w-9 h-9 text-[#7c3aed] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <h4 className="text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">500+</h4>
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-gray-200">Daily Guests</p>
          </div>

          {/* Stat 4: 10k+ Customers */}
          <div className="flex flex-col items-center gap-2 w-1/2 md:w-auto group cursor-pointer">
            <svg className="w-9 h-9 text-[#7c3aed] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h4 className="text-3xl md:text-4xl font-bold text-[#7c3aed] tracking-wide transition-colors duration-300 group-hover:text-white">10k+</h4>
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-gray-200">Happy Clients</p>
          </div>

        </div>
        </div>
    </section>
    </>
};

export default AboutUs;