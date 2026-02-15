import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EnrollmentFlow from '../components/EnrollmentFlow';
import ProgramsSection from '../components/ProgramsSection';
import ResultsSection from '../components/ResultsSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import CentresBar from '../components/CentresBar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <section id="home">
                <Hero />
            </section>
            <EnrollmentFlow />
            <ProgramsSection />
            <ResultsSection />
            <AboutSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Home;
