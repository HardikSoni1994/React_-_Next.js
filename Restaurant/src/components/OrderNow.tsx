import pizza from '../assets/pizza.png';
import mint from '../assets/mint.png';

const OrderNow = () => {
  return (
    <section id="order-now" className="w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-[#1e182e] relative z-10">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        {/* Gradient Line */}
        <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
        
        {/* Main Banner Card */}
        <div className="relative w-full bg-gradient-to-r from-[#2d2342] via-[#211a31] to-[#1e182e] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch justify-between border border-white/5 shadow-[0_0_60px_-15px_rgba(59,130,246,0.3)]">
          
          {/* Left Column: Text & Button */}
          <div className="w-full md:w-[55%] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-5 xs:py-6 sm:py-7 md:py-8 relative z-20 flex flex-col justify-center">
            
            {/* Heading */}
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight">
              Order Now & Satisfy Your Cravings
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed mb-4 xs:mb-5 sm:mb-6 max-w-[580px]">
              Let us bring the flavors you love straight to your door. From classic comfort dishes to chef-curated specials, every bite is made with care and delivered fresh. Skip the wait — your next favorite meal is just a click away.
            </p>
            
            {/* Button */}
            <div className="flex">
              <button className="group relative overflow-hidden bg-[#7c3aed] text-white px-5 xs:px-6 sm:px-7 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-lg font-medium shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all duration-300 w-full sm:w-auto justify-center touch-manipulation active:scale-95 min-h-[44px]">
                <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base justify-center">
                  Read More
                  <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Pizza Image */}
          <div className="w-full md:w-[45%] relative flex items-center justify-center md:justify-end py-4 xs:py-5 md:py-0">
            
            {/* Background Blur Effect */}
            <div className="absolute top-1/2 left-[10%] md:left-[20%] -translate-y-1/2 w-[150px] xs:w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px] h-[150px] xs:h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] bg-[#7c3aed]/30 rounded-full blur-[80px] z-0 pointer-events-none"></div>
            
            {/* Pizza Image - No extra spacing */}
            <div className="relative z-10 leading-none">
              <img 
                src={pizza} 
                alt="Delicious Pizza" 
                className="relative w-[180px] xs:w-[210px] sm:w-[260px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-2xl hover:scale-105 transition-transform duration-500 block"
                style={{ display: 'block', lineHeight: 0 }}
                loading="eager"
              />
            </div>

            {/* Mint Leaf Decoration */}
            <img 
              src={mint} 
              alt="Mint Leaf" 
              className="absolute top-[0%] xs:top-[2%] sm:top-[5%] md:top-[8%] lg:top-[10%] right-[45%] xs:right-[48%] sm:right-[50%] md:right-[52%] lg:right-[55%] w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 z-20 drop-shadow-lg block" 
              style={{ display: 'block' }}
              loading="eager"
            />

          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-6 sm:mt-8 md:mt-10"></div>

      </div>
    </section>
  );
};

export default OrderNow;