import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const ProgramsSection = () => {
    const programs = [
        {
            title: 'IIT-JEE',
            slug: 'iit-jee',
            description: 'Comprehensive preparation for JEE Main and Advanced with expert faculty and proven methodology',
            image: '/courses/iit-jee.png',
            features: ['Live Classes', 'Test Series', 'Doubt Clearing'],
        },
        {
            title: 'NEET',
            slug: 'neet',
            description: 'Complete NEET preparation with focused approach on Biology, Physics, and Chemistry',
            image: '/courses/neet.png',
            features: ['Expert Faculty', 'Mock Tests', 'Study Material'],
        },
        {
            title: 'Foundation',
            slug: 'foundation',
            description: 'Strong foundation building for Class 8-10 students preparing for competitive exams',
            image: '/courses/foundation.png',
            features: ['Concept Building', 'Regular Tests', 'Mentorship'],
        },
        {
            title: 'CUET',
            slug: 'cuet',
            description: 'Complete preparation for Common University Entrance Test with domain subjects and general test',
            image: '/courses/cuet.png',
            features: ['Domain Subjects', 'General Test', 'University Counseling'],
        },
    ];

    return (
        <section id="programs" className="relative py-16 md:py-28 bg-blue-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Programs</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the right program tailored to your goals and aspirations
                    </p>
                </ScrollReveal>

                {/* Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {programs.map((program, index) => (
                        <ScrollReveal
                            key={index}
                            variant="slideUp"
                            delay={index * 0.1}
                            className={`group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            {/* Course Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-primary mb-3 text-center">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                                    {program.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                                            <svg
                                                className="w-4 h-4 text-accent mr-2 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={`/courses/${program.slug}`}
                                    className="block w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 text-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
