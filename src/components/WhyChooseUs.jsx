import ScrollReveal from './ScrollReveal';

const WhyChooseUs = () => {
    const resources = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            ),
            title: 'JEE Main Admit Card',
            bg: 'bg-primary'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            ),
            title: 'Latest News & Events',
            bg: 'bg-primary'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: 'JEE Answer Key & Solution',
            bg: 'bg-primary'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'NEET 2025 Answer Keys',
            bg: 'bg-primary'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Foundation Answer Key',
            bg: 'bg-primary'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Student Testimonials',
            bg: 'bg-primary'
        },
    ];

    return (
        <section id="resources" className="relative py-16 bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-outfit">
                        Do <span className="text-accent">More</span> with Gravity Classes
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Access exclusive guides, preparation tips, and practice resources for free
                    </p>
                </ScrollReveal>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    {resources.map((item, index) => (
                        <ScrollReveal
                            key={index}
                            variant="fade"
                            delay={index * 0.1}
                            className="group flex items-center justify-between bg-[#F8FBFF] hover:bg-white border border-transparent hover:border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
                        >
                            <div className="flex items-center space-x-6">
                                <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors pr-4">
                                    {item.title}
                                </h3>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal variant="fade" delay={0.4} className="text-center">
                    <button className="bg-primary hover:bg-primary-light text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                        Latest Updates By Gravity Classes
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default WhyChooseUs;
