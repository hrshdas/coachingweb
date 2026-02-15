import React from 'react';

const FloatingContact = () => {
    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919999345093"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 hover:bg-blue-200 transition-all duration-300 p-2 pr-4 rounded-l-full flex items-center shadow-lg group translate-x-[calc(100%-3.5rem)] hover:translate-x-0 border-l border-t border-b border-white/20"
                aria-label="Chat on WhatsApp"
            >
                <div className="bg-white p-2 rounded-full mr-2">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </div>
                <span className="text-gray-900 font-bold text-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">WhatsApp</span>
            </a>

            {/* Call Us Button */}
            <a
                href="tel:+919999345093"
                className="bg-blue-200 hover:bg-blue-300 transition-all duration-300 p-2 pr-6 rounded-l-full flex items-center shadow-lg group translate-x-[calc(100%-3.5rem)] hover:translate-x-0 border-l border-t border-b border-white/20"
                aria-label="Call Us"
            >
                <div className="bg-white p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.65l1.97-1.57c.23-.29.27-.64.07-1.02-.35-1.09-.53-2.27-.53-3.52 0-.55-.45-1-1-1H4.39c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.32c0-.55-.45-1-1-1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" opacity="0" /> {/* Standard Material Icon path is different, let's use the one from Heroicons or simple path */}
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                </div>
                <span className="text-gray-900 font-bold text-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Call Us</span>
            </a>
        </div>
    );
};

export default FloatingContact;
