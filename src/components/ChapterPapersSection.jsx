import ChapterCard from './ChapterCard';

const ChapterPapersSection = ({ chapterPapers }) => {
    if (!chapterPapers || chapterPapers.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50/60 to-indigo-50/60">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                        Chapter-wise <span className="text-black">Previous Year Papers</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Download JEE Main &amp; Advanced Chapter-wise Previous Year Questions
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chapterPapers.map((item, index) => (
                        <ChapterCard
                            key={index}
                            subject={item.subject}
                            description={item.description}
                            chapters={item.chapters}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChapterPapersSection;
