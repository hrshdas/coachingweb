import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                setSubmitted(false); // Reset for next time if we were to clearer session storage
            }, 3000);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                    >
                        {/* Gradient Header */}
                        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] p-6 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Get specific advice from expert</h3>
                            <p className="text-blue-100/80 text-sm">Fill out the form below and our experts will contact you shortly.</p>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="p-6 md:p-8">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                                    <p className="text-gray-600">We have received your details. Our team will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-400"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course</label>
                                        <select
                                            id="course"
                                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-gray-600"
                                        >
                                            <option value="">Select a course</option>
                                            <option value="iit-jee">IIT-JEE</option>
                                            <option value="neet">NEET</option>
                                            <option value="cbse">CBSE Foundation</option>
                                            <option value="olympiad">Olympiad Prep</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mt-2"
                                    >
                                        Get Expert Advice
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupForm;
