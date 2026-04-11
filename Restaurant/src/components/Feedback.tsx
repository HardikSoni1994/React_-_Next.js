import { useState } from 'react';

import avatar1 from '../assets/review1.png'; // Agar inka naam alag hai toh change kar lena
import avatar2 from '../assets/review2.png';
import avatar3 from '../assets/review3.png'; 
import avatar4 from '../assets/review4.png'; // 4th Customer ki image

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
    // YEH RAHA TERA NAYA 4th CUSTOMER DATA
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
  const totalCards = feedbackData.length;

  // Responsive cards detection
  useState(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile: 1 card
      } else {
        setCardsToShow(2); // Desktop: 2 cards
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(totalCards - cardsToShow, prev + 1));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= totalCards - cardsToShow;

  return (
    <section id="feedback" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-[#17161b] relative z-10">
      {/* Gradient Line - Section ke top me */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8 sm:mb-10 md:mb-12"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-8 items-center lg:items-start">
          
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left pr-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Customers Feedback
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-sm">
              From casual dinners to dream events, here's how Midnight Fork helped create unforgettable memories.
            </p>
            
            <div className="flex gap-3">
              <button 
                onClick={slideLeft}
                disabled={isAtStart}
                className="w-10 h-10 rounded-md bg-[#7c3aed] flex items-center justify-center text-white hover:bg-[#6d28d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#7c3aed]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              <button 
                onClick={slideRight}
                disabled={isAtEnd}
                className="w-10 h-10 rounded-md bg-transparent border border-[#7c3aed] flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#7c3aed]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3 overflow-hidden">
            <div 
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: cardsToShow === 1 
                  ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` 
                  : `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 12}px))` 
              }}
            >
              {feedbackData.map((feedback) => (
                <div 
                  key={feedback.id} 
                  className="w-full sm:w-[calc(50%-12px)] flex-shrink-0 bg-[#2a223e] p-5 sm:p-6 md:p-8 rounded-xl border border-white/5 transition-all duration-300 hover:border-[#7c3aed]/30"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <img 
                      src={feedback.image} 
                      alt={feedback.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">{feedback.name}</h4>
                      <p className="text-gray-400 text-xs mt-0.5">{feedback.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feedback.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Feedback;