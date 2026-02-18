const ChapterRow = ({ chapter, index }) => {
    return (
        <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
            <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {index + 1}
                </span>
                <span className="text-gray-700 text-sm font-medium group-hover:text-primary transition-colors">
                    {chapter.name}
                </span>
            </div>
            <a
                href={chapter.downloadUrl || '#'}
                download
                onClick={(e) => { if (!chapter.downloadUrl) e.preventDefault(); }}
                className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/30 bg-blue-50 hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 hover:shadow-md flex-shrink-0 ml-4"
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
            </a>
        </div>
    );
};

export default ChapterRow;
