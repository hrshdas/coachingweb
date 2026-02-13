import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EnrollmentFlow from '../components/EnrollmentFlow';
import StatsSection from '../components/StatsSection';
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
            <Hero />
            <EnrollmentFlow />
            <StatsSection />
            <ProgramsSection />
            <ResultsSection />
            <AboutSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <CentresBar />
            <Footer />
        </div>
    );
};

export default Home;
