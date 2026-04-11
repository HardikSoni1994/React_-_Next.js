function Hero() {
  return <>
    <div id="home" className="flex flex-col items-center justify-center text-center mt-16 sm:mt-20 px-4 sm:px-6 lg:px-4 font-sans">
      {/* Gradient Line - Section ke top me */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8 sm:mb-12"></div>
      
      {/* 1. Top Badge */}
      <div className="border border-white/10 bg-[#ffffff08] rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8 backdrop-blur-md font-medium">
        Serving Food Lovers Since 2016 <span className="text-red-500">❤️</span>
      </div>

      {/* 2. Main Big Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight px-2">
        Savor Every Bite. Savor <br />
        <span className="relative inline-block">
          Every Moment.
          <svg
            className="absolute -bottom-1 sm:-bottom-2 left-0 w-full text-[#7c3aed] -z-10"
            viewBox="0 0 350 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.85645 8.23715C62.4821 3.49284 119.04 1.88864 180.031 1.88864C225.103 1.88864 275.146 1.32978 319.673 4.85546C328.6 5.24983 336.734 6.33887 346.695 7.60269"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      {/* 3. Subtitle Paragraph */}
      <p className="text-gray-400 max-w-[90%] sm:max-w-[600px] md:max-w-[700px] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed font-normal px-2">
        Welcome to a dining experience where flavor, freshness, and hospitality
        come together. Whether it's your first visit or your hundredth, every
        plate is made to impress.
      </p>

      {/* 4. Main CTA Button */}
      <button className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-700 flex items-center gap-2 group overflow-hidden bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] hover:-translate-y-0.5 text-sm sm:text-base">
        <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />

        <span className="relative z-10 flex items-center gap-2">
          <span className="hidden sm:inline">Experience the Flavor</span>
          <span className="sm:hidden">Get Started</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </span>
      </button>
    </div>
</>
};

export default Hero;
