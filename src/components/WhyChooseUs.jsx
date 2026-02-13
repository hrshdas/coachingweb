import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
    const reasons = [
        {
            icon: (
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'Experienced Faculty',
            description: 'Learn from highly qualified and experienced teachers with proven expertise',
        },
        {
            icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: 'Regular Assessments',
            description: 'Frequent tests and performance analysis to track and improve progress',
        },
        {
            icon: (
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: 'Guidance & Support',
            description: 'Comprehensive guidance and continuous support for every student',
        },
        {
            icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'Routine Interaction With Parents',
            description: 'Regular parent-teacher meetings to discuss student progress and development',
        },
        {
            icon: (
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Reasonable Fee Structure',
            description: 'Affordable and transparent fee structure with scholarship opportunities',
        },
    ];

    return (
        <section id="about" className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div ref={headerRef} className={`text-center mb-16 animate-on-scroll fade-in ${headerVisible ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Choose Us</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We provide everything you need to excel in your competitive exams
                    </p>
                </div>

                {/* Reasons Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll scale-in stagger-${(index % 3) + 1} ${cardsVisible ? 'visible' : ''}`}
                        >
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
