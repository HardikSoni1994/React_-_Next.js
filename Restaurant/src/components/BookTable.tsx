import { useState } from 'react';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Table booked successfully! We'll contact you shortly.");
    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="book-table" className="w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 bg-[#1e182e] relative z-10">
      
      {/* Gradient Line */}
      <div className="mx-auto h-px w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>
      
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        
        {/* Top Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-2 xs:mb-3 tracking-wide">
            Reserve Your Table
          </h2>
          <p className="text-gray-400 text-sm xs:text-base leading-relaxed px-2">
            Planning a casual dinner or special celebration? We're here to make it seamless.
          </p>
        </div>

        {/* Main Compact Card */}
        <div className="w-full bg-[#2a223e] rounded-xl xs:rounded-2xl border border-white/5 p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-5 xs:gap-6 sm:gap-7 md:gap-8 shadow-2xl">
          
          {/* Left Column: Booking Form */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-4 xs:mb-5 sm:mb-6">Book a Table</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 xs:gap-4 sm:gap-5">
              
              {/* Row 1: Name & Phone */}
              <div className="flex flex-col md:flex-row gap-3 xs:gap-4 sm:gap-5">
                {/* Name Input */}
                <div className="w-full relative flex flex-col gap-1.5 xs:gap-2">
                  <label className="text-gray-300 text-[11px] xs:text-xs">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    placeholder="Enter your name here..."
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 rounded-lg px-3 xs:px-4 py-2 xs:py-2.5 text-gray-300 text-xs xs:text-sm focus:border-[#7c3aed] outline-none transition-colors"
                  />
                  <svg className="absolute right-3 xs:right-4 top-[38px] xs:top-[42px] w-4 h-4 xs:w-5 xs:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Phone Input */}
                <div className="w-full relative flex flex-col gap-1.5 xs:gap-2">
                  <label className="text-gray-300 text-[11px] xs:text-xs">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    placeholder="+1 (212) 555-1234"
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 rounded-lg px-3 xs:px-4 py-2 xs:py-2.5 text-gray-300 text-xs xs:text-sm focus:border-[#7c3aed] outline-none transition-colors"
                  />
                  <svg className="absolute right-3 xs:right-4 top-[38px] xs:top-[42px] w-4 h-4 xs:w-5 xs:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>

              {/* Row 2: Date & Time */}
              <div className="flex flex-col md:flex-row gap-3 xs:gap-4 sm:gap-5">
                {/* Date Input */}
                <div className="w-full relative flex flex-col gap-1.5 xs:gap-2">
                  <label className="text-gray-300 text-[11px] xs:text-xs">Enter The Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 rounded-lg px-3 xs:px-4 py-2 xs:py-2.5 text-gray-400 text-xs xs:text-sm focus:border-[#7c3aed] outline-none transition-colors [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>

                {/* Time Input */}
                <div className="w-full relative flex flex-col gap-1.5 xs:gap-2">
                  <label className="text-gray-300 text-[11px] xs:text-xs">Enter Time</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/10 rounded-lg px-3 xs:px-4 py-2 xs:py-2.5 text-gray-400 text-xs xs:text-sm focus:border-[#7c3aed] outline-none transition-colors [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full relative flex flex-col gap-1.5 xs:gap-2">
                <label className="text-gray-300 text-[11px] xs:text-xs">Message (Optional)</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  value={formData.message}
                  placeholder="Any special requests?"
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 rounded-lg px-3 xs:px-4 py-2 xs:py-2.5 text-gray-300 text-xs xs:text-sm focus:border-[#7c3aed] outline-none transition-colors resize-none"
                ></textarea>
                <svg className="absolute right-3 xs:right-4 top-[38px] xs:top-[42px] w-4 h-4 xs:w-5 xs:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group relative overflow-hidden w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium py-2.5 xs:py-3 rounded-lg transition-all duration-300 mt-1 touch-manipulation active:scale-95 min-h-[44px]"
              >
                <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                <span className="relative z-10 text-xs xs:text-sm sm:text-base">Book a Reservation</span>
              </button>

            </form>
          </div>

          {/* Right Column: Contact Info Boxes */}
          <div className="w-full lg:w-2/5 flex flex-col gap-3 xs:gap-4 sm:gap-5 pt-4 lg:pt-12">
            
            {/* Email/Phone Box */}
            <div className="w-full border border-white/10 rounded-xl p-4 xs:p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-1 hover:border-purple-500/30 transition-all duration-300">
              <h4 className="text-white font-medium text-sm xs:text-base mb-1">Email / Phone</h4>
              <p className="text-gray-400 text-xs xs:text-sm">johndoe@gmail.com</p>
              <p className="text-gray-400 text-xs xs:text-sm">+148 589 2001 2466</p>
            </div>

            {/* Location Box */}
            <div className="w-full border border-white/10 rounded-xl p-4 xs:p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-1 hover:border-purple-500/30 transition-all duration-300">
              <h4 className="text-white font-medium text-sm xs:text-base mb-1">Our Location</h4>
              <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                Office 149,<br />
                450 South Brand Brooklyn<br />
                San Diego County,<br />
                CA 91905, USA
              </p>
            </div>

            {/* Opening Hours Text */}
            <p className="text-center text-gray-400 text-[10px] xs:text-xs sm:text-sm mt-1">
              Opening Hours <span className="text-[#7c3aed] font-medium">9AM - 11PM</span> Everyday
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BookTable;