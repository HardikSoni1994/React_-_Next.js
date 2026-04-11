import React from 'react';

const Footer = () => {
  // Page ke top par smooth scroll karne ka logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1e182e] pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 relative">

        {/* --- Top Row: Logo, Links, Socials --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-center">
          
          {/* Brand / Logo - Left */}
          <div className="flex items-center gap-3 cursor-pointer justify-center md:justify-start" onClick={scrollToTop}>
            <span className="text-2xl">🍽️</span>
            <span className="text-xl font-bold text-white tracking-wide">Midnight <span className='text-purple-500'>Fork</span></span>
          </div>

          {/* Navigation Links - Center */}
          <div className="flex items-center flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="hover:text-white transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#team" className="hover:text-white transition-colors relative group">
              Team
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faqs" className="hover:text-white transition-colors relative group">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Social Icons - Right */}
          <div className="flex items-center justify-center md:justify-end gap-5 text-gray-400">
            {/* Discord */}
            <a href="#" className="hover:text-white transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="hover:text-white transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className="hover:text-white transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>

        {/* --- Bottom Row: Copyright & Scroll to Top --- */}
        <div className="pt-8 flex flex-col items-center gap-6 relative">
          
          {/* Gradient Line */}
          <div className="h-px w-3/5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          
          {/* Copyright Text */}
          <p className="text-gray-400 text-sm text-center">
            ©{new Date().getFullYear()} Made with <span className="text-red-500">❤️</span> by <span className="text-white font-medium">Hardik Soni</span> • Template Design
          </p>

          {/* Scroll to Top Button (Positioned Absolute on Right Edge) */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 top-[22px] md:top-6 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors group"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;