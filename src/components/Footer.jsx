import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white pt-16 pb-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start sh">
                            <div className="bg-white p-2 rounded-lg mb-4">
                                <img src={logo} alt="Gravity Classes" className="h-20 w-auto object-contain" />
                            </div>
                            <div className="text-sm font-medium tracking-wider text-orange-400 mb-1">
                                — Ananya's —
                            </div>
                            <div className="text-xl font-bold text-blue-200/20 tracking-widest leading-none mb-4">
                                GRAVITY CLASSES
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                With the promise of "<span className="text-orange-500 font-bold">सुनिश्चित सफलता</span>", Ananya's Gravity Classes provides premier coaching for IIT-JEE, NEET, and CBSE preparation.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group">
                                <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group">
                                <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group">
                                <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 0C8.7 0 8.3 0 7.1 0.1c-1.2 0-2 0.2-2.7 0.5s-1.2 0.7-1.7 1.2c-0.5 0.5-0.9 1-1.2 1.7s-0.4 1.5-0.5 2.7c-0.1 1.2-0.1 1.6-0.1 4.9s0 3.7 0.1 4.9c0 1.2 0.2 2 0.5 2.7s0.7 1.2 1.2 1.7c0.5 0.5 1 0.9 1.7 1.2s1.5 0.4 2.7 0.5c1.2 0.1 1.6 0.1 4.9 0.1s3.7 0 4.9-0.1c1.2 0 2-0.2 2.7-0.5s1.2-0.7 1.7-1.2c0.5-0.5 0.9-1 1.2-1.7s0.4-1.5 0.5-2.7c0.1-1.2 0.1-1.6 0.1-4.9s0-3.7-0.1-4.9c0-1.2-0.2-2-0.5-2.7s-0.7-1.2-1.2-1.7c-0.5-0.5-1-0.9-1.7-1.2s-1.5-0.4-2.7-0.5c-1.2-0.1-1.6-0.1-4.9-0.1zM12 4.4c2.6 0 2.9 0 3.9 0.1s1.6 0.2 2 0.4c0.5 0.2 0.8 0.4 1.1 0.7c0.3 0.3 0.5 0.6 0.7 1.1c0.2 0.4 0.3 0.8 0.4 2s0.1 1.3 0.1 3.9s0 2.9-0.1 3.9s-0.2 1.6-0.4 2c-0.2 0.5-0.4 0.8-0.7 1.1c-0.3 0.3-0.6 0.5-1.1 0.7c-0.4 0.2-0.8 0.3-2 0.4s-1.3 0.1-3.9 0.1s-2.9 0-3.9-0.1s-1.6-0.2-2-0.4c-0.5-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1.1c-0.2-0.4-0.3-0.8-0.4-2s-0.1-1.3-0.1-3.9s0-2.9 0.1-3.9s0.2-1.6 0.4-2c0.2-0.5 0.4-0.8 0.7-1.1c0.3-0.3 0.6-0.5 1.1-0.7c0.4-0.2 0.8-0.3 2-0.4s1.3-0.1 3.9-0.1zM12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5zM12 14.9c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9zM17.2 6.8c-0.7 0-1.2 0.5-1.2 1.2s0.5 1.2 1.2 1.2s1.2-0.5 1.2-1.2s-0.5-1.2-1.2-1.2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group">
                                <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12L10 15V9l5.194 3z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Courses', 'Results', 'Achievements', 'Testimonials'].map((link) => (
                                <li key={link}>
                                    <a href={`/#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Courses */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Our Courses</h4>
                        <ul className="space-y-3">
                            {['IIT-JEE', 'NEET', 'CBSE Foundation', 'Olympiad Prep'].map((course) => (
                                <li key={course}>
                                    <Link to={`/courses/${course.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium">
                                        {course}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="mt-1 flex-shrink-0 mr-4 text-orange-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm leading-relaxed font-medium">
                                        A-1/7, Janakpuri, New Delhi-110058
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="flex-shrink-0 mr-4 text-orange-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-300 text-sm font-medium">+91-9999345093</p>
                                    <p className="text-gray-300 text-sm font-medium">+91-7290905123</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="flex-shrink-0 mr-4 text-orange-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm font-medium">info@gravityclasses.in</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; 2026 Ananya's Gravity Classes. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
