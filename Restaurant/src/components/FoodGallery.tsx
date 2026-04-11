const FoodGallery = () => {
  return (
    <>
      {/* Gradient Line - Section ke top me */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-12 sm:mt-14 md:mt-16 mb-8 sm:mb-10 md:mb-12"></div>
      
      {/* Gallery Container */}
      <div className="w-full mb-16 sm:mb-20 md:mb-24 relative z-10 h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden">
      
      <div className="flex justify-center items-start gap-3 sm:gap-4 md:gap-6 lg:gap-10 w-[115vw] sm:w-[110vw] md:w-[105vw] relative left-1/2 -translate-x-1/2">
        
        {/* Image 1: Salad */}
        <div className="w-24 sm:w-28 md:w-32 lg:w-36 h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] mt-12 sm:mt-14 md:mt-16 rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-lg opacity-80 transition-opacity hover:opacity-100">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" alt="Salad" className="w-full h-full object-cover" />
        </div>

        {/* Image 2: Pancakes */}
        <div className="w-36 sm:w-40 md:w-44 lg:w-48 h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] mt-3 sm:mt-4 rounded-t-[2rem] sm:rounded-t-[3rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800" alt="Pancakes" className="w-full h-full object-cover" />
        </div>

        {/* Image 3: Dessert */}
        <div className="w-28 sm:w-32 md:w-36 lg:w-40 h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] mt-16 sm:mt-20 md:mt-24 rounded-t-xl sm:rounded-t-[2rem] overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600" alt="Dessert" className="w-full h-full object-cover" />
        </div>

        {/* Image 4: Healthy Bowl (Center Main Image) */}
        <div className="w-48 sm:w-52 md:w-56 lg:w-[260px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] mt-0 rounded-t-[2.5rem] sm:rounded-t-[3rem] lg:rounded-t-[3.5rem] overflow-hidden shadow-2xl z-10">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" alt="Healthy Bowl" className="w-full h-full object-cover" />
        </div>

        {/* Image 5: Meat Skewers */}
        <div className="w-36 sm:w-40 md:w-44 lg:w-48 h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] mt-8 sm:mt-10 md:mt-12 rounded-t-[1.5rem] sm:rounded-t-[2rem] lg:rounded-t-[2.5rem] overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600" alt="BBQ" className="w-full h-full object-cover" />
        </div>

        {/* Image 6: Peaches */}
        <div className="w-24 sm:w-28 md:w-32 lg:w-36 h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] mt-14 sm:mt-16 md:mt-20 rounded-t-xl sm:rounded-t-[2rem] overflow-hidden shadow-lg opacity-80 transition-opacity hover:opacity-100">
          <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=600" alt="Food" className="w-full h-full object-cover" />
        </div>

      </div>
      </div>
    </>
  );
};

export default FoodGallery;