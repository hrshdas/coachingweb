import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out after 1.5 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 1500);

        // Remove loading screen after fade out completes
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="text-center">
                {/* Logo with pulse animation */}
                <div className="mb-8 animate-pulse px-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 break-words">
                        Gravity<span className="text-accent-light">Classes</span>
                    </h1>
                    <p className="text-white/80 text-xl">सुनिश्चित सफलता</p>
                </div>

                {/* Loading spinner */}
                <div className="flex justify-center">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
