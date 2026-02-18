import { useState } from 'react';
import ChapterList from './ChapterList';

const subjectColors = {
    Physics: { bg: 'from-blue-500 to-blue-700', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
    Chemistry: { bg: 'from-emerald-500 to-emerald-700', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
    Mathematics: { bg: 'from-violet-500 to-violet-700', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100' },
};

const subjectIcons = {
    Physics: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    Chemistry: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    Mathematics: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    ),
};

const ChapterCard = ({ subject, description, chapters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = subjectColors[subject] || subjectColors.Physics;
    const icon = subjectIcons[subject] || subjectIcons.Physics;

    return (
        <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${!isOpen ? 'hover:-translate-y-1' : ''} border border-gray-100 overflow-hidden flex flex-col`}>
            {/* Card Header Banner */}
            <div className={`bg-gradient-to-br ${colors.bg} p-6 flex items-center gap-4`}>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{subject}</h3>
                    <p className="text-white/80 text-sm mt-0.5">JEE Chapter-wise Papers</p>
                </div>
                <div className="ml-auto">
                    <span className={`text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full`}>
                        {chapters.length} Chapters
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

                {/* Chapter List (accordion) */}
                <ChapterList chapters={chapters} isOpen={isOpen} />

                {/* CTA Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`mt-auto w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-300 ${isOpen
                            ? `${colors.light} ${colors.text} border ${colors.border}`
                            : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg'
                        }`}
                >
                    {isOpen ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            Hide Chapters
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            View Chapters
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ChapterCard;
