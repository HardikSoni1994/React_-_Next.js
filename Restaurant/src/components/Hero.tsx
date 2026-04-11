function Hero() {
  return (
    <>
      <div id="home" className="flex flex-col items-center justify-center text-center mt-14 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 font-sans">
        
        {/* Gradient Line */}
        <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
        
        {/* 1. Top Badge - Responsive padding and text */}
        <div className="border border-white/10 bg-[#ffffff08] rounded-full px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-sm text-gray-300 mb-4 sm:mb-5 md:mb-6 backdrop-blur-md font-medium inline-flex items-center gap-1">
          <span>Serving Food Lovers Since 2016</span>
          <span className="text-red-500 text-xs sm:text-sm">❤️</span>
        </div>

        {/* 2. Main Heading - Responsive font sizes */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-[1.2] sm:leading-[1.3] px-2">
          Savor Every Bite. 
          <br className="hidden xs:block" />
          Savor 
          <span className="relative inline-block ml-1 sm:ml-2">
            Every Moment.
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full text-[#7c3aed] -z-10"
              viewBox="0 0 350 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
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

        {/* 3. Subtitle - Responsive width and text size */}
        <p className="text-gray-400 w-full max-w-[90%] xs:max-w-[85%] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px] text-xs xs:text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed font-normal px-2">
          Welcome to a dining experience where flavor, freshness, and hospitality
          come together. Whether it's your first visit or your hundredth, every
          plate is made to impress.
        </p>

        {/* 4. CTA Button - Touch friendly, responsive sizing */}
        <button className="relative px-5 xs:px-6 sm:px-7 md:px-8 py-2.5 xs:py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-700 flex items-center gap-2 group overflow-hidden bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] active:scale-95 touch-manipulation min-h-[44px]">
          <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />

          <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base">
            <span className="hidden xs:inline">Experience the Flavor</span>
            <span className="xs:hidden">Get Started</span>
            <span className="group-hover:translate-x-1 transition-transform text-base sm:text-lg">
              →
            </span>
          </span>
        </button>
      </div>

      {/* Custom CSS for extra small screens */}
      <style>{`
        @media (min-width: 475px) {
          .xs\\:block {
            display: block;
          }
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
          .xs\\:text-3xl {
            font-size: 1.875rem;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
          }
          .xs\\:py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          .xs\\:px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .xs\\:max-w-\\[85%\\] {
            max-width: 85%;
          }
        }
        @media (max-width: 474px) {
          .xs\\:block {
            display: none;
          }
          .xs\\:inline {
            display: none;
          }
          .xs\\:hidden {
            display: inline;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;