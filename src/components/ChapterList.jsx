import { useRef, useEffect, useState } from 'react';
import ChapterRow from './ChapterRow';

const ChapterList = ({ chapters, isOpen }) => {
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.scrollHeight);
        }
    }, [chapters]);

    return (
        <div
            style={{
                maxHeight: isOpen ? `${height}px` : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <div ref={containerRef} className="pt-2 pb-3 px-1">
                <div className="divide-y divide-gray-100">
                    {chapters.map((chapter, index) => (
                        <ChapterRow key={index} chapter={chapter} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChapterList;
