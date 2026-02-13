const CTASection = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Start Your Journey to <span className="text-accent">Success</span> Today
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Join thousands of successful students who achieved their dreams with our expert guidance
                </p>

                <button className="group relative bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1">
                    <span className="relative z-10">Book Free Counseling</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            </div>
        </section>
    );
};

export default CTASection;
