const servicesData = [
  {
    id: 1,
    title: "Buffet Service",
    description: "Navigate effortlessly with our intuitive design, optimized for all devices. Enjoy a seamless experience whether you're on a computer or mobile device.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Food Delivery",
    description: "Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Cafeteria",
    description: "Find products quickly with advanced filters, sorting options, and suggestion. Save time and effortlessly locate exactly what you need with ease.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  }
];

function Services() {
  return (
    <section id="services" className="w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 relative z-10 bg-transparent">
      
      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        {/* Top Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 tracking-wide">
            Crafting Moments, Serving You
          </h2>
          <p className="text-gray-400 text-sm xs:text-base leading-relaxed px-2">
            From unforgettable flavors to seamless service, we're here to make every meal feel special. Whether you dine in, take out, or order online we've got your cravings covered.
          </p>
        </div>

        {/* Cards Grid - Responsive: 1 col (mobile) → 2 col (tablet) → 3 col (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#1e182e]/50 border border-white/5 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)] transition-all duration-300 group"
            >
              {/* Card Image - Responsive height */}
              <div className="w-full h-44 xs:h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs xs:text-sm leading-relaxed mb-4 xs:mb-5 sm:mb-6 md:mb-7">
                  {service.description}
                </p>
                
                {/* Read More Button - Full width on mobile, auto on desktop */}
                <button className="group relative overflow-hidden bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs xs:text-sm font-medium w-full sm:w-auto touch-manipulation active:scale-95 min-h-[40px] xs:min-h-[44px]">
                  <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                  
                  <span className="relative z-10">Read More</span>
                  <svg className="relative z-10 w-3.5 h-3.5 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;