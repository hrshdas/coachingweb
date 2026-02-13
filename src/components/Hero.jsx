import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';

const Hero = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Arjun Sharma",
            rank: "AIR 1",
            exam: "JEE Advanced 2024",
            achievement: "Selected for IIT Bombay - Computer Science",
            initials: "AS",
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            name: "Priya Patel",
            rank: "AIR 7",
            exam: "NEET 2024",
            achievement: "Admitted to AIIMS Delhi - MBBS",
            initials: "PP",
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 3,
            name: "Rahul Verma",
            rank: "AIR 15",
            exam: "JEE Advanced 2024",
            achievement: "Selected for IIT Delhi - Electrical Engineering",
            initials: "RV",
            color: "from-green-500 to-green-600"
        },
        {
            id: 4,
            name: "Ananya Singh",
            rank: "AIR 3",
            exam: "NEET 2024",
            achievement: "Admitted to AIIMS New Delhi - MBBS",
            initials: "AS",
            color: "from-pink-500 to-pink-600"
        },
        {
            id: 5,
            name: "Karan Malhotra",
            rank: "AIR 22",
            exam: "JEE Advanced 2024",
            achievement: "Selected for IIT Kanpur - Mechanical Engineering",
            initials: "KM",
            color: "from-orange-500 to-orange-600"
        }
    ]);

    const [isPaused, setIsPaused] = useState(false);

    const moveToEnd = (index) => {
        setCards(prev => [...prev.slice(index + 1), prev[index]]);
    };

    // Auto-slide effect - rotates cards every 4 seconds
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                moveToEnd(0);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, cards]);

    // CardStack configuration
    const offset = 8; // Vertical offset percentage
    const scaleStep = 0.05; // Scale reduction per card
    const dimStep = 0.12; // Brightness reduction per card

    return (
        <section className="relative min-h-screen overflow-hidden overflow-x-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>

            <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-20 overflow-x-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-primary text-sm font-medium">Trusted by 900+ Students</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            <span className="text-primary word-fade-in word-delay-1">We Shape</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-accent gradient-animate word-fade-in word-delay-2">
                                Future Leaders
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-gray-700 leading-normal max-w-xl">
                            <span className="inline-block word-fade-in word-delay-3">Elite coaching for IIT-JEE, NEET, and Foundation.</span>
                            <br />
                            <span className="inline-block word-fade-in word-delay-4">Where ambition meets excellence, and dreams transform into reality.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="group relative bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 word-fade-in word-delay-5">
                                <span className="relative z-10">Start Your Journey</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>

                            <button
                                onClick={() => {
                                    document.getElementById('programs')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                                className="group bg-white/80 backdrop-blur-sm hover:bg-white text-primary border border-primary/30 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl word-fade-in word-delay-5"
                            >
                                <span className="flex items-center space-x-2">
                                    <span>Explore Programs</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>



                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <div className="text-3xl font-bold text-primary">
                                    <CountUp end={500} suffix="+" />
                                </div>
                                <div className="text-gray-600 text-sm">Top Rankers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">
                                    <CountUp end={15} suffix="+" />
                                </div>
                                <div className="text-gray-600 text-sm">Years Legacy</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">
                                    <CountUp end={98} suffix="%" />
                                </div>
                                <div className="text-gray-600 text-sm">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Element - CardStack */}
                    <div className="relative lg:block hidden lg:ml-12">
                        <div
                            className="relative w-[360px] h-[480px]"
                            style={{ perspective: '1000px' }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {cards.map((story, index) => {
                                const isFront = index === 0;
                                const brightness = Math.max(0.3, 1 - index * dimStep);
                                const baseZ = cards.length - index;

                                return (
                                    <motion.div
                                        key={story.id}
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            cursor: isFront ? 'grab' : 'auto',
                                            touchAction: 'none',
                                            zIndex: baseZ,
                                        }}
                                        animate={{
                                            left: `${index * offset}%`,
                                            scale: 1 - index * scaleStep,
                                            filter: `brightness(${brightness})`,
                                            zIndex: baseZ,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 170,
                                            damping: 26
                                        }}
                                        drag={isFront ? 'x' : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragMomentum={false}
                                        onDragStart={() => setIsPaused(true)}
                                        onDragEnd={(e, info) => {
                                            if (Math.abs(info.offset.x) > 50) {
                                                moveToEnd(index);
                                            }
                                            setIsPaused(false);
                                        }}
                                        whileDrag={isFront ? {
                                            zIndex: cards.length,
                                            cursor: 'grabbing',
                                            scale: 1 - index * scaleStep + 0.05,
                                            rotate: 2
                                        } : {}}
                                        className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-2xl"
                                    >
                                        {/* Decorative Elements */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>

                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col items-center justify-between">
                                            <div className="text-center space-y-4">
                                                {/* Student Avatar */}
                                                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${story.color} rounded-full flex items-center justify-center shadow-lg`}>
                                                    <span className="text-white text-3xl font-bold">{story.initials}</span>
                                                </div>

                                                {/* Student Name */}
                                                <h3 className="text-2xl font-bold text-primary">
                                                    {story.name}
                                                </h3>

                                                {/* Rank Badge */}
                                                <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                                                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-accent font-bold text-lg">{story.rank}</span>
                                                </div>

                                                {/* Exam Name */}
                                                <p className="text-primary-light font-semibold">
                                                    {story.exam}
                                                </p>

                                                {/* Achievement */}
                                                <p className="text-gray-600 leading-relaxed px-4 text-sm">
                                                    {story.achievement}
                                                </p>
                                            </div>

                                            {/* Success Icon */}
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Instruction Text */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500">
                                <span className="inline-block mr-1">👉</span>
                                Drag cards left or right to see more success stories
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button
                                onClick={() => {
                                    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
                                }}
                                className="w-12 h-12 rounded-full bg-white border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
                                aria-label="Previous card"
                            >
                                <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={() => moveToEnd(0)}
                                className="w-12 h-12 rounded-full bg-white border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
                                aria-label="Next card"
                            >
                                <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
