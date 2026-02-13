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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Achievements</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Celebrating the success of our students who made their dreams come true
                    </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
