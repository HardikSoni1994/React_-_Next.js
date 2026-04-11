import { useState, useEffect } from 'react';

const faqData = [
  {
    id: 1,
    question: "Do you offer home delivery?",
    answer: "Yes, we do! You can place your order directly through our website or via trusted food delivery platforms like Swiggy and Zomato. We ensure that all dishes are packed with care and delivered promptly, so you can enjoy restaurant-quality food in the comfort of your home."
  },
  {
    id: 2,
    question: "How can I book a table?",
    answer: "Booking a table is simple and quick. Just head over to our reservation page, choose your preferred date and time, and confirm your booking in a few clicks. You'll receive a confirmation instantly. Prefer to speak with someone? You can also call us directly."
  },
  {
    id: 3,
    question: "What are your opening hours?",
    answer: "We're open every day from 11:00 AM to 11:00 PM, offering both lunch and dinner service. On weekends, we also serve a special brunch menu from 10:00 AM to 1:00 PM. Holiday hours may vary, so be sure to check our website or follow us on social media for real-time updates and special announcements."
  },
  {
    id: 4,
    question: "Do you cater to dietary restrictions?",
    answer: "Absolutely! We offer a variety of vegan, vegetarian, and gluten-free options. Please inform your server about any allergies or specific dietary requirements, and our chefs will be happy to accommodate your needs."
  }
];

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile: 1 card
        setCurrentIndex(0);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
        setCurrentIndex(0);
      } else {
        setCardsToShow(3); // Desktop: 3 cards
        setCurrentIndex(0);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = faqData.length;
  const maxIndex = Math.max(0, totalCards - cardsToShow);

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && !isAtEnd) {
      slideRight();
    }
    if (isRightSwipe && !isAtStart) {
      slideLeft();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const cardWidth = 100 / cardsToShow;
  const gap = 24;

  return (
    <section id="faqs" className="w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-[#1a0b2e] to-[#16213e] relative z-10 overflow-hidden">
      
      {/* Background Question Marks */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-[120px] xs:text-[150px] sm:text-[180px] md:text-[200px] font-bold text-white absolute top-10 left-5 xs:left-10">?</div>
        <div className="text-[100px] xs:text-[120px] sm:text-[140px] md:text-[150px] font-bold text-white absolute top-40 right-10 xs:right-20">?</div>
        <div className="text-[110px] xs:text-[140px] sm:text-[160px] md:text-[180px] font-bold text-white absolute bottom-20 left-1/4">?</div>
        <div className="text-[100px] xs:text-[120px] sm:text-[140px] md:text-[160px] font-bold text-white absolute bottom-40 right-1/3">?</div>
      </div>

      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm xs:text-base leading-relaxed px-2">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col lg:flex-row gap-5 xs:gap-6 sm:gap-8 items-center">
          
          {/* Navigation Buttons - Hidden on mobile (use swipe instead) */}
          <div className="hidden sm:flex lg:flex-col gap-3 order-2 lg:order-1">
            <button 
              onClick={slideLeft}
              disabled={isAtStart}
              className="w-9 h-9 xs:w-10 xs:h-10 rounded-md bg-[#7c3aed] flex items-center justify-center text-white hover:bg-[#6d28d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
              aria-label="Previous question"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={slideRight}
              disabled={isAtEnd}
              className="w-9 h-9 xs:w-10 xs:h-10 rounded-md bg-transparent border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
              aria-label="Next question"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Cards Container with Swipe Support */}
          <div 
            className="w-full overflow-hidden order-1 lg:order-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (cardWidth + (gap / 12))}%)`,
                gap: `${gap / 16}rem`
              }}
            >
              {faqData.map((faq) => (
                <div 
                  key={faq.id} 
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col h-full"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div className="flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                  
                  <div className="mt-4 xs:mt-5 sm:mt-6 flex items-center">
                    <a 
                      href="#" 
                      className="text-[#7c3aed] text-[10px] xs:text-xs sm:text-sm font-medium flex items-center gap-1.5 xs:gap-2 hover:text-[#9355f7] transition-colors group touch-manipulation"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#9355f7] group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dot Indicators for Mobile */}
        {cardsToShow < totalCards && (
          <div className="flex gap-1.5 xs:gap-2 justify-center mt-6 xs:mt-8 sm:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  currentIndex === idx ? 'w-5 xs:w-6 bg-[#7c3aed]' : 'w-1.5 xs:w-2 bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-3 xs:mt-4 sm:hidden">
          <p className="text-gray-500 text-[9px] xs:text-[10px]">
            ← Swipe to see more questions →
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;