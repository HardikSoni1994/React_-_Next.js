import { useState, useEffect } from 'react';

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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 70;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4 text-white transition-all duration-300 ${
                isScrolled ? 'bg-[#1a1625] shadow-lg' : 'bg-transparent'
            }`}>
                
                {/* Logo - Touch friendly size */}
                <div 
                    onClick={() => scrollToSection('home')}
                    className="text-lg sm:text-xl font-bold flex items-center gap-2 cursor-pointer z-50 min-h-[44px] min-w-[44px]"
                >
                    <span className="text-purple-500 text-xl sm:text-2xl">🍽️</span>
                    <span className="hidden xs:inline">Midnight <span className='text-purple-500'>Fork</span></span>
                    <span className="xs:hidden">M<span className='text-purple-500'>F</span></span>
                </div>

                {/* Desktop Menu - Hidden on mobile */}
                <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium text-gray-300">
                    <li 
                        onClick={() => scrollToSection('home')} 
                        className={`cursor-pointer transition-colors duration-300 relative group py-2 ${
                            activeSection === 'home' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Home
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                            activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </li> 
                    <li 
                        onClick={() => scrollToSection('about-us')} 
                        className={`cursor-pointer transition-colors duration-300 relative group py-2 ${
                            activeSection === 'about-us' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        About Us
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                            activeSection === 'about-us' ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </li> 
                    <li 
                        onClick={() => scrollToSection('services')} 
                        className={`cursor-pointer transition-colors duration-300 relative group py-2 ${
                            activeSection === 'services' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Services
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                            activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </li> 
                    <li 
                        onClick={() => scrollToSection('feedback')} 
                        className={`cursor-pointer transition-colors duration-300 relative group py-2 ${
                            activeSection === 'feedback' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Feedback
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                            activeSection === 'feedback' ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </li>
                    <li 
                        onClick={() => scrollToSection('team')} 
                        className={`cursor-pointer transition-colors duration-300 relative group py-2 ${
                            activeSection === 'team' ? 'text-purple-500' : 'hover:text-purple-500'
                        }`}
                    >
                        Team
                        <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                            activeSection === 'team' ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </li>
                </ul>

                {/* Desktop Book Button */}
                <button 
                    onClick={() => scrollToSection('book-table')}
                    className="hidden lg:block group relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                    <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                    <span className="relative z-10">Book A Table</span>
                </button>

                {/* Mobile Menu Toggle Button - Touch friendly */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-md active:bg-white/10 transition-colors"
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

                {/* Mobile Menu - Solid background, no blur */}
                <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[280px] bg-[#1a1625] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden z-40 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col pt-24 px-5 h-full">
                        <ul className="flex flex-col gap-4 text-base font-medium text-gray-300">
                            <li 
                                onClick={() => scrollToSection('home')} 
                                className={`cursor-pointer transition-colors duration-300 py-3 px-2 rounded-lg ${
                                    activeSection === 'home' ? 'text-purple-500 bg-purple-500/10' : 'hover:text-purple-500 hover:bg-white/5'
                                }`}
                            >
                                Home
                            </li> 
                            <li 
                                onClick={() => scrollToSection('about-us')} 
                                className={`cursor-pointer transition-colors duration-300 py-3 px-2 rounded-lg ${
                                    activeSection === 'about-us' ? 'text-purple-500 bg-purple-500/10' : 'hover:text-purple-500 hover:bg-white/5'
                                }`}
                            >
                                About Us
                            </li> 
                            <li 
                                onClick={() => scrollToSection('services')} 
                                className={`cursor-pointer transition-colors duration-300 py-3 px-2 rounded-lg ${
                                    activeSection === 'services' ? 'text-purple-500 bg-purple-500/10' : 'hover:text-purple-500 hover:bg-white/5'
                                }`}
                            >
                                Services
                            </li> 
                            <li 
                                onClick={() => scrollToSection('feedback')} 
                                className={`cursor-pointer transition-colors duration-300 py-3 px-2 rounded-lg ${
                                    activeSection === 'feedback' ? 'text-purple-500 bg-purple-500/10' : 'hover:text-purple-500 hover:bg-white/5'
                                }`}
                            >
                                Feedback
                            </li>
                            <li 
                                onClick={() => scrollToSection('team')} 
                                className={`cursor-pointer transition-colors duration-300 py-3 px-2 rounded-lg ${
                                    activeSection === 'team' ? 'text-purple-500 bg-purple-500/10' : 'hover:text-purple-500 hover:bg-white/5'
                                }`}
                            >
                                Team
                            </li>
                        </ul>

                        <button 
                            onClick={() => scrollToSection('book-table')}
                            className="mt-6 group relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 w-full"
                        >
                            <div className="absolute top-0 -left-[100%] h-full w-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                            <span className="relative z-10">Book A Table</span>
                        </button>
                    </div>
                </div>

                {/* Overlay */}
                {isMobileMenuOpen && (
                    <div 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 lg:hidden z-30"
                    />
                )}
            </nav>

            {/* Scroll indicator line */}
            {isScrolled && (
                <div className="fixed top-[56px] sm:top-[64px] left-0 right-0 z-40 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            )}

            {/* Add custom CSS for extra small screens */}
            <style>{`
                @media (min-width: 480px) {
                    .xs\\:inline {
                        display: inline;
                    }
                    .xs\\:hidden {
                        display: none;
                    }
                }
                @media (max-width: 479px) {
                    .xs\\:inline {
                        display: none;
                    }
                    .xs\\:hidden {
                        display: inline;
                    }
                }
            `}</style>
        </>
    );
}

export default Navbar;