import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Scholarship = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        class: '12th Passed',
        course: 'IIT-JEE',
        message: '',
        agreeToPolicy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        alert('Application Submitted Successfully!');
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#fdf2f0] flex items-center justify-center">
                <div className="w-full max-w-2xl bg-[#eaddd7] rounded-xl shadow-lg p-8 md:p-10 border border-[#dccac4]/50">
                    <h1 className="text-3xl font-bold text-[#4a3b32] mb-8 text-center">Scholarship Application</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-[#5d4d44] mb-2">
                                Full Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name *"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[#5d4d44] mb-2">
                                Email Address<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Email Address *"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-semibold text-[#5d4d44] mb-2">
                                Contact Number<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                required
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number *"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Class and Course Selection Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="class" className="block text-sm font-semibold text-[#5d4d44] mb-2">
                                    Class<span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="class"
                                        name="class"
                                        value={formData.class}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none appearance-none bg-white"
                                    >
                                        <option value="10th">10th</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                        <option value="12th Passed">12th Passed</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="course" className="block text-sm font-semibold text-[#5d4d44] mb-2">
                                    Course<span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none appearance-none bg-white"
                                    >
                                        <option value="IIT-JEE">IIT-JEE</option>
                                        <option value="NEET">NEET</option>
                                        <option value="Foundation">Foundation</option>
                                        <option value="CUET">CUET</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-[#5d4d44] mb-2">
                                Message<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Privacy Policy */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="agreeToPolicy"
                                name="agreeToPolicy"
                                checked={formData.agreeToPolicy}
                                onChange={handleChange}
                                className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                            />
                            <label htmlFor="agreeToPolicy" className="ml-2 text-sm text-gray-600">
                                I accept <a href="#" className="text-[#d87a2d] font-medium hover:underline">Privacy Policy</a>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-32 bg-[#1a1a1a] text-white py-3 rounded-lg font-medium hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Scholarship;
