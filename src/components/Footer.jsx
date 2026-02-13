import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="relative bg-primary text-white py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* About */}
                    <div className="md:col-span-2">
                        <img src={logo} alt="Gravity Classes" className="h-24 w-auto mb-4 object-contain" />
                        <p className="text-white/80 leading-relaxed mb-4">
                            India's leading coaching institute dedicated to nurturing future toppers with expert mentorship, proven results, and a commitment to excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#programs" className="text-white/80 hover:text-accent transition-colors">
                                    Programs
                                </a>
                            </li>
                            <li>
                                <a href="#results" className="text-white/80 hover:text-accent transition-colors">
                                    Results
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>A-1/7, Janakpuri, New Delhi-110058</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="flex flex-col">
                                    <span>+91-9999345093</span>
                                    <span>+91-7290905123</span>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@gravityclasses.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 text-center text-white/60">
                    <p>&copy; 2026 Gravity Classes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
