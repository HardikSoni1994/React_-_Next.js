const FoodGallery = () => {
  return (
    <>
      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-10 overflow-x-auto overflow-y-hidden hide-scrollbar">
        
        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 px-4 sm:px-6 md:px-8 min-w-max md:min-w-0 md:justify-center">
          
          {/* Image 1 */}
          <div className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 rounded-t-xl xs:rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-md sm:shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 hover:-translate-y-2">
            {/* ✅ Fixed: Removed fetchpriority */}
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" 
              alt="Fresh Salad" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Image 2 */}
          <div className="w-28 xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] mt-2 xs:mt-3 sm:mt-4 md:mt-5 rounded-t-2xl xs:rounded-t-3xl sm:rounded-t-[2rem] md:rounded-t-[2.5rem] overflow-hidden shadow-lg sm:shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800" 
              alt="Pancakes" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Image 3 */}
          <div className="w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 rounded-t-lg xs:rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl overflow-hidden shadow-md sm:shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 hover:-translate-y-2">
            <img 
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600" 
              alt="Dessert" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Image 4 - Main */}
          <div className="w-36 xs:w-44 sm:w-48 md:w-52 lg:w-56 xl:w-64 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] rounded-t-2xl xs:rounded-t-3xl sm:rounded-t-[2rem] md:rounded-t-[2.5rem] lg:rounded-t-[3rem] overflow-hidden shadow-xl sm:shadow-2xl flex-shrink-0 z-10 hover:scale-105 transition-transform duration-300">
            {/* ✅ Fixed: No fetchpriority, using loading="eager" for main image */}
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" 
              alt="Healthy Bowl" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Image 5 */}
          <div className="w-28 xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] mt-5 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 rounded-t-2xl xs:rounded-t-3xl sm:rounded-t-[2rem] overflow-hidden shadow-lg sm:shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600" 
              alt="BBQ Skewers" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Image 6 */}
          <div className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 rounded-t-lg xs:rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl overflow-hidden shadow-md sm:shadow-lg opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 hover:-translate-y-2">
            <img 
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=600" 
              alt="Peaches" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default FoodGallery;