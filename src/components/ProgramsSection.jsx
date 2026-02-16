import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const ProgramsSection = () => {
    const programs = [
        {
            title: 'IIT-JEE',
            slug: 'iit-jee',
            description: 'Comprehensive preparation for JEE Main and Advanced with expert faculty and proven methodology',
            image: '/courses/iit-jee-new.png',
            features: ['Live Classes', 'Test Series', 'Doubt Clearing'],
        },
        {
            title: 'NEET',
            slug: 'neet',
            description: 'Complete NEET preparation with focused approach on Biology, Physics, and Chemistry',
            image: '/courses/neet-new.png',
            features: ['Expert Faculty', 'Mock Tests', 'Study Material'],
        },
        {
            title: 'Foundation',
            slug: 'foundation',
            description: 'Strong foundation building for Class 8-10 students preparing for competitive exams',
            image: '/courses/foundation-new.png',
            features: ['Concept Building', 'Regular Tests', 'Mentorship'],
        },
        {
            title: 'CUET',
            slug: 'cuet',
            description: 'Complete preparation for Common University Entrance Test with domain subjects and general test',
            image: '/courses/cuet-new.png',
            features: ['Domain Subjects', 'General Test', 'University Counseling'],
        },
    ];

    return (
        <section id="courses" className="relative py-12 md:py-20 bg-white overflow-hidden">
            {/* Background Pattern - Removed for white background */}
            {/* <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div> */}

            {/* Decorative Elements - Removed for white background */}
            {/* <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div> */}
            {/* <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div> */}

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Our <span className="text-black">Programs</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Choose the right program tailored to your goals and aspirations
                    </p>
                </ScrollReveal>

                {/* Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <ScrollReveal
                            key={index}
                            variant="slideUp"
                            delay={index * 0.1}
                            className={`group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            {/* Course Image */}
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-primary mb-2 text-center">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-normal text-center text-sm">
                                    {program.description}
                                </p>

                                <ul className="space-y-1.5 mb-5">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center justify-center text-gray-700 text-sm">
                                            <svg
                                                className="w-4 h-4 text-primary mr-2 flex-shrink-0"
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
                                    className="block w-2/3 mx-auto bg-accent hover:bg-accent-dark text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1 text-center text-xs"
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
