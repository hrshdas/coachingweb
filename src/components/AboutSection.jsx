import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    const [contentRef, contentVisible] = useScrollAnimation(0.1);
    const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
    return (
        <section id="about-us" className="relative py-28 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div ref={headerRef} className={`text-center mb-12 animate-on-scroll fade-in ${headerVisible ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8"></div>
                </div>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto">
                    {/* Welcome Section */}
                    <div ref={contentRef} className={`bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl mb-8 animate-on-scroll slide-up ${contentVisible ? 'visible' : ''}`}>
                        <h3 className="text-3xl font-bold text-primary mb-6">
                            Welcome to <span className="text-accent">Gravity Classes</span>
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                With the promise of <span className="font-semibold text-primary">"सुनिश्चित सफलता"</span>, Gravity Classes was established by a Team of IITians and Medical professionals. Gravity Classes is the heaven for the students who seek extensive knowledge, targeted practice and perfection in performance in their Entrance preparation.
                            </p>
                            <p>
                                We provide premier coaching to stand ahead in IIT JEE/NEET Entrance Examination. The guidance and teaching from genius mentors, potential discovery using learning-practice-analysis approach and motivating healthy environment let the aspirants start their sail in best wind.
                            </p>
                            <p>
                                Our mentors are well adapted with the latest syllabus of NTA as well as School Examinations. They are fully versed in teaching via practical as well as theoretical way. We don't simply believe in rote learning but also enhancing the practical approach of the topic taught to our students.
                            </p>
                            <p>
                                It should be a dream institute for any student. Here, a student should not receive education only but also a complete guidance for the overall development of his/her personality which will make him able to face future challenges in life.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Grid */}
                    <div ref={cardsRef} className="grid md:grid-cols-2 gap-10">
                        {/* Mission */}
                        <div className={`bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-8 shadow-xl animate-on-scroll slide-in-left stagger-1 ${cardsVisible ? 'visible' : ''}`}>
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                            <p className="text-white/90 leading-relaxed">
                                To provide world-class education and mentorship that empowers students to achieve their dreams of getting into premier institutions like IIT, AIIMS, and top universities.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className={`bg-gradient-to-br from-accent to-accent-light text-white rounded-2xl p-8 shadow-xl animate-on-scroll slide-in-right stagger-2 ${cardsVisible ? 'visible' : ''}`}>
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                            <p className="text-white/90 leading-relaxed">
                                To be India's most trusted and innovative coaching institute, shaping future leaders through excellence in education, character building, and holistic development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
