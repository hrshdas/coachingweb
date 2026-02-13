import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeOut = (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

                setCount(Math.floor(easeOut(percentage) * end));

                if (percentage < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

export default CountUp;
