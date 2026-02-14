import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Yanni',
            role: 'Student',
            text: 'Teacher at Gravity Classes are experts in their subject. They are highly skilled and are best for the students who want best results.Teacher at Gravity Classes are experts in their subject. They are highly skilled and are best for the students who want best results.',
            type: 'student',
        },
        {
            name: 'Aryan',
            role: 'Student',
            text: 'Having taken classes from Gravity Classes, I feel fully satisfied. Teachers are highly experiended and focus on result oriented preparations.',
            type: 'student',
        },
        {
            name: 'Deepkia',
            role: 'Student',
            text: 'As a student of Gravity Classes, I appreciate the efforts put in by the teachers to provide individual support and attetion to the students under their guidance. Highly recommended!',
            type: 'student',
        },
    ];

    // Split testimonials into two rows
    const row1 = [testimonials[0], testimonials[1], testimonials[2]];
    const row2 = [testimonials[1], testimonials[2], testimonials[0]]; // Reuse testimonials for variety

    // Duplicate for infinite scroll
    const duplicatedRow1 = [...row1, ...row1];
    const duplicatedRow2 = [...row2, ...row2];

    const TestimonialCard = ({ testimonial }) => (
        <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-80">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300">
                    {testimonial.type === 'student' ? (
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    )}
                </div>
                <div>
                    <div className="font-bold text-primary text-sm">
                        {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                        {testimonial.role}
                    </div>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed italic mb-4 text-sm">
                "{testimonial.text}"
            </p>

            <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        </div>
    );

    return (
        <section id="testimonials" className="relative py-20 bg-blue-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        What Our <span className="text-black">Students Say</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Hear from students and parents who achieved their dreams with us
                    </p>
                </ScrollReveal>

                {/* Dual Row Carousel */}
                <ScrollReveal variant="fade" delay={0.2} className="space-y-6">
                    {/* Row 1 - Scrolling Left */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex gap-6 animate-scroll-left hover:pause-animation">
                                {duplicatedRow1.map((testimonial, index) => (
                                    <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Scrolling Right */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex gap-6 animate-scroll-right hover:pause-animation">
                                {duplicatedRow2.map((testimonial, index) => (
                                    <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section >
    );
};

export default Testimonials;
