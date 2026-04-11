import { useState, useEffect } from 'react';
import brandLogo from "../assets/brand-res.png"

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'about-us', 'services', 'team', 'feedback'];
            const scrollPosition = window.scrollY + 150;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return <>
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 lg:py-6 text-white transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1625]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold flex items-center gap-2 cursor-pointer z-50">
            <span className="text-purple-500">🍽️</span>
            <span className="hidden sm:inline">Midnight <span className='text-purple-500'>Fork</span></span>
            <span className="sm:hidden">M<span className='text-purple-500'>F</span></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium text-gray-300">
           <li 
               onClick={() => scrollToSection('home')} 
               className={`cursor-pointer transition-colors duration-300 relative group ${
                   activeSection === 'home' ? 'text-purple-500' : 'hover:text-purple-500'
               }`}
           >
               Home
               <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                   activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
               }`}></span>
           </li> 
           <li 
               onClick={() => scrollToSection('about-us')} 
               className={`cursor-pointer transition-colors duration-300 relative group ${
                   activeSection === 'about-us' ? 'text-purple-500' : 'hover:text-purple-500'
               }`}
           >
               About Us
               <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                   activeSection === 'about-us' ? 'w-full' : 'w-0 group-hover:w-full'
               }`}></span>
           </li> 
           <li 
               onClick={() => scrollToSection('services')} 
               className={`cursor-pointer transition-colors duration-300 relative group ${
                   activeSection === 'services' ? 'text-purple-500' : 'hover:text-purple-500'
               }`}
           >
               Services
               <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                   activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
               }`}></span>
           </li> 
           <li 
               onClick={() => scrollToSection('feedback')} 
               className={`cursor-pointer transition-colors duration-300 relative group ${
                   activeSection === 'feedback' ? 'text-purple-500' : 'hover:text-purple-500'
               }`}
           >
               Feedback
               <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                   activeSection === 'feedback' ? 'w-full' : 'w-0 group-hover:w-full'
               }`}></span>
           </li>
           <li 
               onClick={() => scrollToSection('team')} 
               className={`cursor-pointer transition-colors duration-300 relative group ${
                   activeSection === 'team' ? 'text-purple-500' : 'hover:text-purple-500'
               }`}
           >
               Team
               <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                   activeSection === 'team' ? 'w-full' : 'w-0 group-hover:w-full'
               }`}></span>
           </li>
        </ul>

        {/* Desktop Book Button */}
        <button 
            onClick={() => scrollToSection('book-table')}
            className="hidden lg:block group relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)]">
          <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
          <span className="relative z-10">Book A Table</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
        >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-screen w-[280px] bg-[#1a1625]/98 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex flex-col pt-20 px-6">
                <ul className="flex flex-col gap-6 text-base font-medium text-gray-300 mb-8">
                    <li 
                        onClick={() => scrollToSection('home')} 
                        className={`cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 ${
                            activeSection === 'home' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Home
                    </li> 
                    <li 
                        onClick={() => scrollToSection('about-us')} 
                        className={`cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 ${
                            activeSection === 'about-us' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        About Us
                    </li> 
                    <li 
                        onClick={() => scrollToSection('services')} 
                        className={`cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 ${
                            activeSection === 'services' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Services
                    </li> 
                    <li 
                        onClick={() => scrollToSection('feedback')} 
                        className={`cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 ${
                            activeSection === 'feedback' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Feedback
                    </li>
                    <li 
                        onClick={() => scrollToSection('team')} 
                        className={`cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 ${
                            activeSection === 'team' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Team
                    </li>
                </ul>

                <button 
                    onClick={() => scrollToSection('book-table')}
                    className="group relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.4)] w-full">
                    <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                    <span className="relative z-10">Book A Table</span>
                </button>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div 
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
            ></div>
        )}

    </nav>
    
    {/* Gradient Line - Navbar ke bottom me (scroll pe dikhega) */}
    {isScrolled && (
        <div className="fixed top-[64px] lg:top-[72px] left-0 right-0 z-40 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    )}
    </>
};

export default Navbar;