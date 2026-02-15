import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseBySlug, getAllCourses } from '../data/courseData.jsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseDetail = () => {
    const { courseSlug } = useParams();
    const course = getCourseBySlug(courseSlug);
    const allCourses = getAllCourses();

    // If course not found, redirect to home
    if (!course) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100 pt-24 pb-4">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gray-400">Courses</span>
                        <span>/</span>
                        <span className="text-primary font-medium">{course.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                                The Best <span className="text-accent">{course.title}</span> Coaching Institute <br className="hidden md:block" />
                                <span className="text-2xl md:text-3xl font-medium text-gray-600 block mt-2">for Class : 11th & 12th</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-6">
                                <a href="tel:+919999345093" className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-lg transition-all shadow-sm hover:shadow-md">
                                    Call Now
                                </a>
                                <button className="text-primary font-bold hover:text-accent px-4 text-lg transition-colors underline decoration-2 decoration-transparent hover:decoration-accent underline-offset-4">
                                    Book a Class
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl transform rotate-12"></div>
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="relative w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16 relative inline-block left-1/2 transform -translate-x-1/2">
                        What's Included
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full opacity-70"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {course.features.map((feature, index) => (
                            <div key={index} className="group bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs List (Retained for detail but styled minimally) */}
            {course.programs && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-primary mb-12">
                            Our Programs
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                            {course.programs.map((program, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-primary">{program.title}</h3>
                                        <span className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                                            {program.duration}
                                        </span>
                                    </div>
                                    <p className="text-sm text-accent font-semibold mb-4 uppercase tracking-wide">{program.subtitle}</p>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                                    <div className="flex items-center text-sm font-medium text-gray-500 border-t border-gray-100 pt-4">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        Target: <span className="text-gray-900 ml-1">{program.targetExam}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Success Stories Section */}
            <section className="py-24 bg-gray-100 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
                        Success Stories
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {course.successStories.map((story, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group">
                                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                                    {story.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{story.name}</h3>
                                <p className="text-accent font-bold text-sm mb-2">{story.achievement}</p>
                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{story.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">
                        Common Questions
                    </h2>

                    <div className="space-y-4">
                        {course.faqs.map((faq, index) => (
                            <div key={index} className="group border border-gray-200 rounded-xl p-6 hover:border-accent/50 transition-colors bg-gray-50/50 hover:bg-white">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors flex items-start">
                                    <span className="text-accent mr-3 mt-1">Q.</span>
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-7 border-l-2 border-gray-200 group-hover:border-accent/30 pl-4 ml-1 transition-all">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Programs Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">
                        Explore Other Programs
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allCourses.filter(c => c.id !== course.id).map((otherCourse) => (
                            <Link key={otherCourse.id} to={`/courses/${otherCourse.id}`} className="block group h-full">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-accent/20 flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                        {/* Simple icon placeholder or use course.icon if available/serializable */}
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                                        {otherCourse.title}
                                    </h3>
                                    <span className="text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                                        View Details <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CourseDetail;
