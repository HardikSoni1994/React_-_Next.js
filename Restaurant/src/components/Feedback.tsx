import { useState, useEffect } from 'react';

import avatar1 from '../assets/review1.png';
import avatar2 from '../assets/review2.png';
import avatar3 from '../assets/review3.png'; 
import avatar4 from '../assets/review4.png';

const feedbackData = [
  {
    id: 1,
    name: "Alexandra Lee",
    role: "Master Chief Judge",
    image: avatar1,
    text: "The ambiance is amazing, and the food is even better! The grilled salmon was perfectly cooked. A must-try place!"
  },
  {
    id: 2,
    name: "Jason Wu",
    role: "Food Blogger",
    image: avatar2,
    text: "The service was exceptional. From the moment we walked in, the staff made us feel like family."
  },
  {
    id: 3,
    name: "Lindsey Saris",
    role: "Travel Chef Reviewer",
    image: avatar3,
    text: "Takahiro's sushi is pure perfection. So fresh, delicate, and beautifully presented — a five-star experience."
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Food Critic",
    image: avatar4,
    text: "An absolute delight! The attention to detail in every dish is remarkable. Midnight Fork sets a new standard for fine dining."
  }
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile: 1 card
        setCurrentIndex(0); // Reset index on resize
      } else {
        setCardsToShow(2); // Desktop: 2 cards
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = feedbackData.length;
  const maxIndex = Math.max(0, totalCards - cardsToShow);

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
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

  return (
    <section id="feedback" className="w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 bg-[#17161b] relative z-10">
      
      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 items-center lg:items-start">
          
          {/* Left Side - Heading & Controls */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 leading-tight">
              Customers Feedback
            </h2>
            <p className="text-gray-400 text-sm xs:text-base leading-relaxed mb-5 xs:mb-6 sm:mb-8 max-w-sm">
              From casual dinners to dream events, here's how Midnight Fork helped create unforgettable memories.
            </p>
            
            {/* Navigation Buttons - Hidden on mobile (use swipe instead) */}
            <div className="hidden sm:flex gap-3">
              <button 
                onClick={slideLeft}
                disabled={isAtStart}
                className="w-9 h-9 xs:w-10 xs:h-10 rounded-md bg-[#7c3aed] flex items-center justify-center text-white hover:bg-[#6d28d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                aria-label="Previous feedback"
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={slideRight}
                disabled={isAtEnd}
                className="w-9 h-9 xs:w-10 xs:h-10 rounded-md bg-transparent border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                aria-label="Next feedback"
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Carousel Cards with Swipe Support */}
          <div 
            className="w-full lg:w-2/3 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-3 xs:gap-4 sm:gap-5 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: cardsToShow === 1 
                  ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` 
                  : `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 20}px))`,
                width: `${(totalCards * (100 / cardsToShow))}%`
              }}
            >
              {feedbackData.map((feedback) => (
                <div 
                  key={feedback.id} 
                  className="flex-shrink-0 bg-[#2a223e] p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl border border-white/5 transition-all duration-300 hover:border-[#7c3aed]/30 hover:-translate-y-1"
                  style={{ width: `calc(${100 / cardsToShow}% - ${cardsToShow === 1 ? 16 : 20}px)` }}
                >
                  {/* User Info */}
                  <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4 sm:mb-5">
                    <img 
                      src={feedback.image} 
                      alt={feedback.name} 
                      className="w-8 h-8 xs:w-9 sm:w-10 md:w-11 lg:w-12 xs:h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium text-xs xs:text-sm sm:text-base">{feedback.name}</h4>
                      <p className="text-gray-400 text-[10px] xs:text-xs mt-0.5">{feedback.role}</p>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex gap-0.5 xs:gap-1 mb-3 xs:mb-4 sm:mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-xs xs:text-sm leading-relaxed">
                    {feedback.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Dot Indicators */}
        {cardsToShow < totalCards && (
          <div className="flex gap-2 justify-center mt-6 sm:mt-8 lg:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  currentIndex === idx ? 'w-5 xs:w-6 bg-[#7c3aed]' : 'w-1.5 xs:w-2 bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-3 sm:mt-4 lg:hidden">
          <p className="text-gray-500 text-[10px] xs:text-xs">
            ← Swipe to see more →
          </p>
        </div>

      </div>
    </section>
  );
};

export default Feedback;