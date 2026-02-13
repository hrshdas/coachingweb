import ScrollReveal from './ScrollReveal';
import CountUp from './CountUp';

const ResultsSection = () => {
    const results = [
        {
            rank: 'AIR 1',
            exam: 'JEE Advanced',
            name: 'Rahul Sharma',
            year: '2025',
        },
        {
            rank: 'AIR 3',
            exam: 'NEET',
            name: 'Priya Patel',
            year: '2025',
        },
        {
            rank: 'AIR 7',
            exam: 'JEE Main',
            name: 'Arjun Kumar',
            year: '2025',
        },
        {
            rank: 'AIR 12',
            exam: 'NEET',
            name: 'Sneha Reddy',
            year: '2024',
        },
    ];

    return (
        <section id="results" className="relative py-28 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Achievements</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Celebrating the success of our students who made their dreams come true
                    </p>
                </ScrollReveal>

                {/* Stats Row */}
                <ScrollReveal
                    variant="fade"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-gray-100 py-12 bg-white/50 backdrop-blur-sm"
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                            <CountUp end={500} suffix="+" />
                        </div>
                        <div className="text-gray-600 font-medium">Top Rankers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                            <CountUp end={15} suffix="+" />
                        </div>
                        <div className="text-gray-600 font-medium">Years Legacy</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                            <CountUp end={98} suffix="%" />
                        </div>
                        <div className="text-gray-600 font-medium">Success Rate</div>
                    </div>
                </ScrollReveal>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {results.map((result, index) => (
                        <ScrollReveal
                            key={index}
                            variant="slideUp"
                            delay={index * 0.1}
                            className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2 text-accent">
                                        {result.rank}
                                    </div>
                                    <div className="text-lg font-semibold mb-1 text-primary">
                                        {result.exam}
                                    </div>
                                    <div className="text-gray-700 text-sm mb-1">
                                        {result.name}
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                        {result.year}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
