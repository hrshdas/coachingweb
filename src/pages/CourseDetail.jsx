import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseBySlug } from '../data/courseData.jsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseDetail = () => {
    const { courseSlug } = useParams();
    const course = getCourseBySlug(courseSlug);

    // If course not found, redirect to home
    if (!course) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-blue-50">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200 pt-20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gray-400">Courses</span>
                        <span>/</span>
                        <span className="text-primary font-medium">{course.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-primary mb-4">
                                {course.fullTitle}
                            </h1>
                            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light mb-6">
                                {course.tagline}
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {course.description}
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    Enroll Now
                                </button>
                                <button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="rounded-2xl shadow-2xl w-full max-w-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section - Only for courses with programs */}
            {course.programs && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-primary mb-4 text-center">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Programs</span>
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Choose the program that best fits your academic journey and goals
                        </p>

                        <div className="space-y-8">
                            {course.programs.map((program, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">{program.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-primary mb-2">
                                                {program.title}
                                            </h3>
                                            <p className="text-sm text-accent font-semibold mb-4">
                                                {program.subtitle}
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                {program.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-gray-700">Duration: {program.duration}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-gray-700">Target: {program.targetExam}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Highlights Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Highlights</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {course.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
                                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 font-medium">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Included</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {course.features.map((feature, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="mb-3">{feature.icon}</div>
                                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Syllabus Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Syllabus</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(course.syllabus).map(([subject, topics], index) => (
                            <div key={index} className="bg-blue-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-primary mb-4 capitalize">{subject}</h3>
                                <ul className="space-y-2">
                                    {topics.map((topic, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <span className="text-accent mt-1">•</span>
                                            <span className="text-gray-700">{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Batches & Schedule */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        Batches & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Schedule</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {course.batches.map((batch, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl font-bold text-primary mb-4">{batch.name}</h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{batch.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm">{batch.timing}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee Structure */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        Fee <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Structure</span>
                    </h2>
                    <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-2xl p-8 shadow-xl">
                        <div className="space-y-4">
                            {Object.entries(course.fees).map(([key, value], index) => (
                                key !== 'scholarship' && (
                                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                                        <span className="text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <span className="text-2xl font-bold text-primary">{value}</span>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-300">
                            <div className="flex items-center space-x-2 text-accent">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="font-semibold">Scholarship: {course.fees.scholarship}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Stories</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {course.successStories.map((story, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary">{story.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">{story.name}</h3>
                                <p className="text-accent font-semibold mb-1">{story.achievement}</p>
                                <p className="text-gray-500 text-sm">{story.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Questions</span>
                    </h2>
                    <div className="space-y-4">
                        {course.faqs.map((faq, index) => (
                            <div key={index} className="bg-blue-50 rounded-xl p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join thousands of successful students and achieve your dreams with Gravity Classes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            Enroll Now
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
                            Schedule a Counseling Session
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CourseDetail;
