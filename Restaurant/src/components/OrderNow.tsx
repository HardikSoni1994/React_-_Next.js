import { useRef } from 'react';

import pizza from '../assets/pizza.png';
import mint from '../assets/mint.png';
const OrderNow = () => {
  return (
    <section id="order-now" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1e182e] relative z-10">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        {/* Gradient Line - Card ke upar center me */}
        <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8 sm:mb-10 md:mb-12"></div>
        
        {/* --- Main Banner Card --- */}
        
        <div className="relative w-full bg-gradient-to-r from-[#2d2342] via-[#211a31] to-[#1e182e] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch justify-between border border-white/5 shadow-[0_0_60px_-15px_rgba(59,130,246,0.3)]">
          
          {/* --- Left Column: Text & Button --- */}
          <div className="w-full md:w-[55%] px-5 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8 relative z-20 flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-snug max-w-[600px]">
              Order Now & Satisfy Your Cravings
            </h2>
            {/* Paragraph */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-[580px]">
              Let us bring the flavors you love straight to your door. From classic comfort dishes to chef-curated specials, every bite is made with care and delivered fresh. Skip the wait — your next favorite meal is just a click away.
            </p>
            
            <div className="flex">
              <button className="group relative overflow-hidden bg-[#7c3aed] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all duration-300 w-full sm:w-auto justify-center">
                {/* Glass Sliding Effect */}
                <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                
                <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base justify-center">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m-7 7H3" /></svg>
                </span>
              </button>
            </div>
          </div>

          {/* --- Right Column: Pizza Image --- */}
          <div className="w-full md:w-[45%] relative flex items-center justify-center md:justify-end pr-0 py-8 md:py-0">

          <div className="absolute top-1/2 left-[10%] md:left-[20%] -translate-y-1/2 w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] bg-[#7c3aed]/30 rounded-full blur-[80px] z-0 pointer-events-none"></div>
            
            <img src={pizza} alt="Delicious Pizza" className="relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />

            <img src={mint} alt="Mint Leaf" className="absolute top-[5%] sm:top-[2%] lg:top-[0%] right-[55%] sm:right-[55%] lg:right-[43%] w-12 sm:w-16 md:w-20 lg:w-28 z-20 drop-shadow-lg" />

          </div>
        </div>

        {/* Gradient Line - Card ke niche center me */}
        <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-8 sm:mt-10 md:mt-12"></div>

      </div>
    </section>
  );
};

export default OrderNow;