import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    const [contentRef, contentVisible] = useScrollAnimation(0.1);

    return (
        <section id="about-us" className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
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
                <div ref={headerRef} className={`text-center mb-8 animate-on-scroll fade-in ${headerVisible ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8"></div>
                </div>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto">
                    {/* Welcome Section */}
                    <div ref={contentRef} className={`bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 md:p-10 shadow-xl mb-6 animate-on-scroll slide-up ${contentVisible ? 'visible' : ''}`}>
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            Welcome to <span className="text-accent">Gravity Classes</span>
                        </h3>
                        <div className="space-y-3 text-gray-700 leading-normal text-lg">
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

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
