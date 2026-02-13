import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center z-50 relative">
                        <img src={logo} alt="Gravity Classes" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-16">
                        <Link
                            to="/#centers"
                            className="transition-colors font-medium text-gray-700 hover:text-primary"
                        >
                            Centers
                        </Link>

                        {/* Courses with dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center transition-colors font-medium text-gray-700 hover:text-primary"
                            >
                                Courses
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-2">
                                    <a
                                        href="/courses/iit-jee"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">IIT-JEE</div>
                                        <div className="text-xs text-gray-500">Engineering Entrance</div>
                                    </a>
                                    <a
                                        href="/courses/neet"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">NEET</div>
                                        <div className="text-xs text-gray-500">Medical Entrance</div>
                                    </a>
                                    <a
                                        href="/courses/foundation"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">Foundation</div>
                                        <div className="text-xs text-gray-500">Class 8-10</div>
                                    </a>
                                    <a
                                        href="/courses/cuet"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">CUET</div>
                                        <div className="text-xs text-gray-500">University Entrance</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/#results"
                            className="transition-colors font-medium text-gray-700 hover:text-primary"
                        >
                            Results
                        </Link>

                        <Link
                            to="/scholarship"
                            className="transition-colors font-medium text-gray-700 hover:text-primary"
                        >
                            Scholarship
                        </Link>

                        {/* Students Hub with dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center transition-colors font-medium text-gray-700 hover:text-primary"
                            >
                                Students Hub
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-2">
                                    <a
                                        href="#study-material"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">Study Material</div>
                                        <div className="text-xs text-gray-500">Notes & Resources</div>
                                    </a>
                                    <a
                                        href="#online-tests"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">Online Tests</div>
                                        <div className="text-xs text-gray-500">Practice & Mock Tests</div>
                                    </a>
                                    <a
                                        href="#doubt-clearing"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">Doubt Clearing</div>
                                        <div className="text-xs text-gray-500">Ask Your Questions</div>
                                    </a>
                                    <a
                                        href="#performance"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">Performance Analysis</div>
                                        <div className="text-xs text-gray-500">Track Your Progress</div>
                                    </a>
                                    <a
                                        href="#student-portal"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                                    >
                                        <div className="font-semibold">Student Portal</div>
                                        <div className="text-xs text-gray-500">Login to Dashboard</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Icon and CTA Button (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="https://www.google.com/maps/place/Gravity+Classes%7C+IIT+NEET+Coaching+in+Delhi+%7CJanakpuri+Delhi/@28.625426,77.067901,15z/data=!4m6!3m5!1s0x390d0533ea7f65a5:0x580f4b837803d464!8m2!3d28.6254256!4d77.0679005!16s%2Fg%2F11sfr70h3_?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100"
                            aria-label="View location on Google Maps"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>

                        <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                            Enquire Now
                        </button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden z-50 p-2 text-gray-700 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around relative">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
                    <Link
                        to="/#centers"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-800 hover:text-accent transition-colors"
                    >
                        Centers
                    </Link>

                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Courses</span>
                        <a href="/courses/iit-jee" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-accent">IIT-JEE</a>
                        <a href="/courses/neet" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-accent">NEET</a>
                        <a href="/courses/foundation" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-accent">Foundation</a>
                        <a href="/courses/cuet" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-accent">CUET</a>
                    </div>

                    <Link
                        to="/#results"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-800 hover:text-accent transition-colors"
                    >
                        Results
                    </Link>

                    <Link
                        to="/scholarship"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-800 hover:text-accent transition-colors"
                    >
                        Scholarship
                    </Link>

                    <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-accent/30">
                        Enquire Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
