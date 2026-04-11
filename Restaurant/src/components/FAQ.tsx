import { useState } from 'react';

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
  const cardsToShow = 3;
  const totalCards = faqData.length;

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(totalCards - cardsToShow, prev + 1));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= totalCards - cardsToShow;

  return (
    <section id="faqs" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#1a0b2e] to-[#16213e] relative z-10 overflow-hidden">
      {/* Background Question Marks */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-[200px] font-bold text-white absolute top-10 left-10">?</div>
        <div className="text-[150px] font-bold text-white absolute top-40 right-20">?</div>
        <div className="text-[180px] font-bold text-white absolute bottom-20 left-1/4">?</div>
        <div className="text-[160px] font-bold text-white absolute bottom-40 right-1/3">?</div>
      </div>

      {/* Gradient Line - Section ke top me */}
      <div className="mx-auto h-px w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-12"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- Top Heading Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        {/* --- Carousel Section --- */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Arrow Buttons - Left Side */}
          <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
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

          {/* Cards Container */}
          <div className="w-full overflow-hidden order-1 lg:order-2">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 8}px))` }}
            >
              {faqData.map((faq) => (
                <div 
                  key={faq.id} 
                  className="w-[calc(33.333%-16px)] flex-shrink-0 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center">
                    <a href="#" className="text-[#7c3aed] text-sm font-medium flex items-center gap-2 hover:text-[#9355f7] transition-colors group relative">
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#9355f7] group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;