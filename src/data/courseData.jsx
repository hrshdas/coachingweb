// Course data for all programs
export const coursesData = {
    'iit-jee': {
        id: 'iit-jee',
        title: 'IIT-JEE',
        fullTitle: 'IIT-JEE Preparation',
        tagline: 'Your Gateway to Premier Engineering Institutes',
        description: 'Comprehensive preparation for JEE Main and Advanced with expert faculty, proven methodology, and personalized attention to help you achieve your engineering dreams.',
        image: '/courses/iit-jee-final.png',
        icon: (
            <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        highlights: [
            'Expert IIT Alumni Faculty',
            'Comprehensive Study Material',
            'Regular Mock Tests',
            'Doubt Clearing Sessions',
            'Performance Analytics',
            'Scholarship Opportunities'
        ],
        syllabus: {
            physics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
            chemistry: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
            mathematics: ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Vectors']
        },
        features: [
            {
                title: 'Live Interactive Classes',
                description: 'Engaging online and offline classes with real-time doubt solving',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                )
            },
            {
                title: 'Comprehensive Test Series',
                description: 'Regular tests modeled on JEE Main and Advanced patterns',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            },
            {
                title: 'Study Material',
                description: 'Curated notes, practice problems, and previous year questions',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Personal Mentorship',
                description: 'One-on-one guidance from experienced mentors',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                )
            }
        ],
        batches: [
            { name: 'Crash Course', duration: '6 months', timing: 'Mon-Sat, 6:00 AM - 9:00 AM' },
            { name: 'Regular Batch', duration: '1 year', timing: 'Mon-Sat, 4:00 PM - 7:00 PM' },
            { name: 'Foundation + JEE', duration: '2 years', timing: 'Mon-Sat, 2:00 PM - 6:00 PM' }
        ],
        fees: {
            crashCourse: '₹75,000',
            regularBatch: '₹1,20,000',
            foundationJEE: '₹2,00,000',
            scholarship: 'Up to 50% based on merit'
        },
        faqs: [
            {
                question: 'What is the eligibility for JEE coaching?',
                answer: 'Students who have completed or are pursuing Class 11 and 12 with PCM (Physics, Chemistry, Mathematics) are eligible. A strong grasp of fundamental concepts from Class 9 and 10 is highly recommended for a smooth start.'
            },
            {
                question: 'Do you provide study material?',
                answer: 'Yes, we provide comprehensive study material including notes, practice problems, and previous year question papers. These materials are regularly updated to align with the latest JEE exam patterns and difficulty levels.'
            },
            {
                question: 'What is the batch size?',
                answer: 'We maintain small batch sizes of 25-30 students to ensure personalized attention and effective learning. This allows our faculty to focus on individual student weaknesses and track their progress closely.'
            },
            {
                question: 'Are scholarships available?',
                answer: 'Yes, we offer merit-based scholarships up to 50% for deserving students based on their performance. Scholarship tests are conducted periodically to identify and reward meritorious talent.'
            }
        ],
        programs: [
            {
                title: 'Two Year Integrated Program for 10th Passed Students',
                subtitle: 'For 10th passed/ 11th studying students',
                description: 'Designed for students aiming to crack IIT-JEE with a clear vision. Covers both School and JEE syllabus comprehensively, ensuring a strong foundation and top rank.',
                duration: '2 Years',
                targetExam: 'IIT-JEE Main and Advance',
                icon: (
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'One Year Integrated Program for 11th Passed Students',
                subtitle: 'For 11th passed/ 12th studying students',
                description: 'Targeted at students moving to Class 12. Focuses on both Board exams and IIT-JEE, covering the complete syllabus for guaranteed success.',
                duration: '1 Year',
                targetExam: 'IIT-JEE Main and Advance + Board Examination',
                icon: (
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Dropper\'s Program for 12th Passed Students',
                subtitle: 'For 12th passed students',
                description: 'Exclusive program for 12th passed students dedicating a year to IIT-JEE. Intensive practice, error analysis, and concept strengthening for top results.',
                duration: '1 Year',
                targetExam: 'IIT-JEE Mains and Advance',
                icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Crash Course',
                subtitle: 'Short-term intensive program',
                description: 'Fast-track program for final revision. Focuses on high-weightage topics, speed improvement, and rank enhancement for JEE Main.',
                duration: '3-6 Months',
                targetExam: 'JEE Main Examination',
                icon: (
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
        ],
        successStories: [
            { name: 'Rahul Sharma', achievement: 'AIR 42 in JEE Advanced', year: '2024' },
            { name: 'Priya Patel', achievement: 'AIR 156 in JEE Advanced', year: '2024' },
            { name: 'Arjun Mehta', achievement: 'AIR 289 in JEE Advanced', year: '2023' }
        ]
    },
    'neet': {
        id: 'neet',
        title: 'NEET',
        fullTitle: 'NEET Preparation',
        tagline: 'Your Path to Medical Excellence',
        description: 'Complete NEET preparation with focused approach on Biology, Physics, and Chemistry. Expert faculty, comprehensive study material, and regular assessments to ensure your success.',
        image: '/courses/neet-final.png',
        icon: (
            <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        highlights: [
            'Medical Expert Faculty',
            'NCERT-Focused Curriculum',
            'Daily Practice Tests',
            'Biology Lab Sessions',
            'NEET Pattern Mock Tests',
            'Counseling Support'
        ],
        syllabus: {
            physics: ['Mechanics', 'Thermodynamics', 'Electrodynamics', 'Optics', 'Modern Physics'],
            chemistry: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
            biology: ['Botany', 'Zoology', 'Human Physiology', 'Genetics', 'Ecology']
        },
        features: [
            {
                title: 'NCERT-Based Teaching',
                description: 'Complete coverage of NCERT syllabus with additional practice',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'Daily Practice Tests',
                description: 'Regular DPTs to strengthen concepts and improve speed',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                )
            },
            {
                title: 'Biology Lab',
                description: 'Practical sessions for better understanding of biological concepts',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                )
            },
            {
                title: 'Medical Counseling',
                description: 'Guidance for college selection and admission process',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                )
            }
        ],
        batches: [
            { name: 'Dropper Batch', duration: '1 year', timing: 'Mon-Sat, 8:00 AM - 2:00 PM' },
            { name: 'Regular Batch', duration: '1 year', timing: 'Mon-Sat, 3:00 PM - 7:00 PM' },
            { name: 'Foundation + NEET', duration: '2 years', timing: 'Mon-Sat, 2:00 PM - 6:00 PM' }
        ],
        fees: {
            dropperBatch: '₹90,000',
            regularBatch: '₹1,10,000',
            foundationNEET: '₹1,90,000',
            scholarship: 'Up to 40% based on merit'
        },
        faqs: [
            {
                question: 'What is the eligibility for NEET coaching?',
                answer: 'Students who have completed or are pursuing Class 11 and 12 with PCB (Physics, Chemistry, Biology) are eligible. There is typically a minimum age requirement of 17 years by the time of admission to medical college.'
            },
            {
                question: 'Is NCERT sufficient for NEET?',
                answer: 'NCERT is the foundation, and we provide additional practice material and advanced concepts to ensure complete preparation. Our curriculum integrates these resources to cover every aspect of the exam thoroughly.'
            },
            {
                question: 'Do you provide biology lab facilities?',
                answer: 'Yes, we have well-equipped biology labs for practical sessions and better conceptual understanding. Visualizing biological processes helps students retain complex information more effectively.'
            },
            {
                question: 'What about counseling support?',
                answer: 'We provide complete counseling support for college selection and admission process after NEET results. Our experts guide you through the choice-filling process to maximize your chances of securing a top seat.'
            }
        ],
        programs: [
            {
                title: 'Two Year Integrated Program for 10th Passed Students',
                subtitle: 'For 10th passed/ 11th studying students',
                description: 'Integrated program covering School curriculum and CUET prep. Builds correct aptitude and subject knowledge for top central universities.',
                duration: '2 Years',
                targetExam: 'NEET + Board Examination',
                icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'One Year Integrated Program for 11th Passed Students',
                subtitle: 'For 11th passed/ 12th studying students',
                description: 'Balanced preparation for Class 12 Boards and CUET. Ensures high board percentage while securing a seat in your dream university.',
                duration: '1 Year',
                targetExam: 'NEET + Board Examination',
                icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
        ],
        successStories: [
            { name: 'Sneha Reddy', achievement: 'AIR 234 in NEET', year: '2024' },
            { name: 'Amit Kumar', achievement: 'AIR 567 in NEET', year: '2024' },
            { name: 'Divya Singh', achievement: 'AIR 892 in NEET', year: '2023' }
        ]
    },
    'foundation': {
        id: 'foundation',
        title: 'Foundation',
        fullTitle: 'Foundation Course',
        tagline: 'Building Strong Fundamentals for Future Success',
        description: 'Strong foundation building for Class 8-10 students preparing for competitive exams. Early start with concept clarity and problem-solving skills.',
        image: '/courses/foundation-final.png',
        icon: (
            <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        highlights: [
            'Early Competitive Exam Preparation',
            'CBSE Board Focus',
            'Concept Building Approach',
            'Olympiad Training',
            'Regular Parent-Teacher Meetings',
            'Holistic Development'
        ],
        syllabus: {
            mathematics: ['Number Systems', 'Algebra', 'Geometry', 'Mensuration', 'Statistics'],
            science: ['Physics Basics', 'Chemistry Fundamentals', 'Biology Concepts', 'Practical Science'],
            competitive: ['Logical Reasoning', 'Mental Ability', 'Olympiad Preparation']
        },
        features: [
            {
                title: 'Concept Building',
                description: 'Strong foundation with focus on understanding core concepts',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                )
            },
            {
                title: 'Board + Competitive',
                description: 'Dual preparation for CBSE boards and competitive exams',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                )
            },
            {
                title: 'Olympiad Training',
                description: 'Special sessions for Math and Science Olympiads',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                )
            },
            {
                title: 'Regular Assessments',
                description: 'Weekly tests and monthly evaluations to track progress',
                icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            }
        ],
        batches: [
            { name: 'Class 8 Foundation', duration: '1 year', timing: 'Mon-Sat, 4:00 PM - 6:00 PM' },
            { name: 'Class 9 Foundation', duration: '1 year', timing: 'Mon-Sat, 4:00 PM - 7:00 PM' },
            { name: 'Class 10 Foundation', duration: '1 year', timing: 'Mon-Sat, 3:00 PM - 6:00 PM' }
        ],
        fees: {
            class8: '₹40,000',
            class9: '₹50,000',
            class10: '₹60,000',
            scholarship: 'Up to 30% based on merit'
        },
        faqs: [
            {
                question: 'Why start foundation course early?',
                answer: 'Early start helps build strong fundamentals and gives students an edge in competitive exams later. It reduces pressure in higher classes by spreading the learning curve over a longer period.'
            },
            {
                question: 'Is it only for competitive exams?',
                answer: 'No, we focus on both CBSE board exams and competitive exam preparation simultaneously. This ensures students excel in their school academics while building a robust base for future challenges.'
            },
            {
                question: 'Do you provide Olympiad training?',
                answer: 'Yes, we have special sessions dedicated to Math and Science Olympiad preparation to identify talent. Our specialized coaching helps students develop critical thinking and problem-solving skills at a young age.'
            },
            {
                question: 'How do you track student progress?',
                answer: 'We conduct weekly tests, monthly evaluations, and regular parent-teacher meetings to track and discuss progress. Detailed performance reports are shared to maintain transparency and focus on improvement areas.'
            }
        ],
        programs: [
            {
                title: 'Three Year (1+2) Integrated Program for 9th Passed Students',
                subtitle: 'For 9th passed/ 10th studying students',
                description: 'Starts early to build a strong base for 10th Boards, NTSE, and Olympiads. Smooth transition into IIT-JEE/NEET preparation in Class 11 & 12.',
                duration: '3 Years (1+2)',
                targetExam: 'Board + NTSE/KVPY/Olympiad → IIT-JEE/NEET/CUET',
                icon: (
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                )
            },
            {
                title: 'Four Year (2+2) Integrated Program for 8th Passed Students',
                subtitle: 'For 8th passed/ 9th studying students',
                description: 'A 4-year journey starting from Class 9. Focuses on NTSE/Olympiads initially, then transforms into rigorous JEE/NEET training.',
                duration: '4 Years (2+2)',
                targetExam: 'Board + NTSE/KVPY/Olympiad → IIT-JEE/NEET/CUET',
                icon: (
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            }
        ],
        successStories: [
            { name: 'Ananya Gupta', achievement: 'Class 10 CBSE - 98.6%', year: '2024' },
            { name: 'Rohan Joshi', achievement: 'Gold Medal in Math Olympiad', year: '2024' },
            { name: 'Kavya Nair', achievement: 'Class 9 CBSE - 97.2%', year: '2023' }
        ]
    },
    'cuet': {
        id: 'cuet',
        title: 'CUET',
        fullTitle: 'CUET Preparation',
        tagline: 'Your Gateway to Top Central Universities',
        description: 'Comprehensive preparation for Common University Entrance Test (CUET) with domain-specific subjects and general test preparation.',
        image: '/courses/cuet-final.png',
        icon: (
            <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        ),
        highlights: [
            'Domain-Specific Subject Training',
            'General Test Preparation',
            'University Counseling',
            'Mock Tests',
            'Current Affairs Updates',
            'Admission Guidance'
        ],
        syllabus: {
            domainSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Economics', 'Political Science', 'History', 'Geography'],
            generalTest: ['General Knowledge', 'Current Affairs', 'Logical Reasoning', 'Quantitative Aptitude', 'English Comprehension']
        },
        features: [
            {
                title: 'Domain Subject Mastery',
                description: 'In-depth coverage of your chosen domain subjects',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'General Test Prep',
                description: 'Comprehensive preparation for the general test section',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                )
            },
            {
                title: 'University Counseling',
                description: 'Guidance for university selection and course choices',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                )
            },
            {
                title: 'Regular Mock Tests',
                description: 'CUET pattern mock tests with detailed analysis',
                icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            }
        ],
        batches: [
            { name: 'Regular Batch', duration: '6 months', timing: 'Mon-Sat, 5:00 PM - 8:00 PM' },
            { name: 'Crash Course', duration: '3 months', timing: 'Mon-Sat, 6:00 AM - 9:00 AM' },
            { name: 'Weekend Batch', duration: '6 months', timing: 'Sat-Sun, 9:00 AM - 4:00 PM' }
        ],
        fees: {
            regularBatch: '₹60,000',
            crashCourse: '₹40,000',
            weekendBatch: '₹55,000',
            scholarship: 'Up to 25% based on merit'
        },
        faqs: [
            {
                question: 'What is CUET?',
                answer: 'CUET (Common University Entrance Test) is a national-level entrance exam for admission to central universities across India. It provides a single-window opportunity for students to seek admission in participating universities.'
            },
            {
                question: 'Which subjects should I choose?',
                answer: 'You should choose domain subjects based on your desired course and university requirements. We provide personalized counseling to help you align your subject choices with your career goals and strengths.'
            },
            {
                question: 'Do you cover all domain subjects?',
                answer: 'Yes, we offer coaching for all major domain subjects including Science, Commerce, and Humanities streams. Our expert faculty ensures deep understanding of subject-specific concepts required for the exam.'
            },
            {
                question: 'What about university counseling?',
                answer: 'We provide complete guidance for university selection, course choices, and the admission process. Our team helps you navigate the counseling procedure to ensure you secure admission to the best possible institution.'
            }
        ],
        programs: [
            {
                title: 'Two Year Integrated Program for 10th Passed Students',
                subtitle: 'For 10th passed/ 11th studying students',
                description: 'Comprehensive 2-year strategy for CUET and Boards. Ideal for students aiming for top colleges through Common University Entrance Test.',
                duration: '2 Years',
                targetExam: 'CUET + Board Examination',
                icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            },
            {
                title: 'One Year Integrated Program for 11th Passed Students',
                subtitle: 'For 11th passed/ 12th studying students',
                description: 'Intensive 1-year program balancing Class 12 Boards and CUET prep. Ensures maximum score with optimized study plan.',
                duration: '1 Year',
                targetExam: 'CUET + Board Examination',
                icon: (
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
        ],
        successStories: [
            { name: 'Aditya Verma', achievement: 'Admitted to DU - Economics', year: '2024' },
            { name: 'Meera Shah', achievement: 'Admitted to JNU - Political Science', year: '2024' },
            { name: 'Karan Malhotra', achievement: 'Admitted to BHU - Mathematics', year: '2023' }
        ]
    }
};

export const getAllCourses = () => Object.values(coursesData);

export const getCourseBySlug = (slug) => coursesData[slug] || null;
