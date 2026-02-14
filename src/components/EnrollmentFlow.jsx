import { useState, useEffect } from 'react';
import engineerIcon from '../assets/engineer_icon.png';
import doctorIcon from '../assets/doctor_icon.png';
import foundationIcon from '../assets/foundation_icon.png';
import exploreIcon from '../assets/explore_icon.png';

const EnrollmentFlow = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        goal: '',
        class: '',
        phone: '',
        otp: ['', '', '', ''],
        name: ''
    });
    const [otpTimer, setOtpTimer] = useState(0);
    const [generatedOtp, setGeneratedOtp] = useState('');

    // OTP Timer countdown
    useEffect(() => {
        if (otpTimer > 0) {
            const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [otpTimer]);

    const goals = [
        {
            id: 'doctor',
            label: 'Doctor',
            icon: (
                <img src={doctorIcon} alt="Doctor" className="w-20 h-20 object-contain" />
            )
        },
        {
            id: 'engineer',
            label: 'Engineer',
            icon: (
                <img src={engineerIcon} alt="Engineer" className="w-20 h-20 object-contain" />
            )
        },
        {
            id: '6-10th',
            label: '6-10th',
            icon: (
                <img src={foundationIcon} alt="6-10th" className="w-20 h-20 object-contain" />
            )
        },
        {
            id: 'explore',
            label: 'Explore',
            icon: (
                <img src={exploreIcon} alt="Explore" className="w-20 h-20 object-contain" />
            )
        }
    ];

    const classes = ['11th', '12th', '12+'];

    const handleGoalSelect = (goalId) => {
        setFormData(prev => ({ ...prev, goal: goalId }));

        // Auto-navigate logic
        if (goalId === '6-10th') {
            setCurrentStep(3);
        } else {
            setCurrentStep(2);
        }
    };

    const handleClassSelect = (classValue) => {
        setFormData({ ...formData, class: classValue });
        setCurrentStep(3);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, phone: value });
    };

    const handleGetOtp = () => {
        if (formData.phone.length === 10) {
            // Generate random 4-digit OTP
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            setGeneratedOtp(otp);
            setOtpTimer(60);
            setCurrentStep(4);
            console.log('Generated OTP (for demo):', otp);
        }
    };

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...formData.otp];
            newOtp[index] = value;
            setFormData({ ...formData, otp: newOtp });

            // Auto-focus next input
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`)?.focus();
            }
        }
    };

    const handleVerifyOtp = () => {
        const enteredOtp = formData.otp.join('');
        if (enteredOtp === generatedOtp) {
            setCurrentStep(5);
        } else {
            alert('Invalid OTP. For demo, check console for generated OTP.');
        }
    };

    const handleNameChange = (e) => {
        setFormData({ ...formData, name: e.target.value });
    };

    const handleNext = () => {
        if (currentStep === 1 && formData.goal) {
            if (formData.goal === '6-10th') {
                setCurrentStep(3);
            } else {
                setCurrentStep(2);
            }
        }
        else if (currentStep === 2 && formData.class) setCurrentStep(3);
        else if (currentStep === 5 && formData.name) {
            console.log('Enrollment Complete:', formData);
            alert('Enrollment Complete! Check console for data.');
            handleCancel();
        }
    };

    const handlePrev = () => {
        if (currentStep === 3 && formData.goal === '6-10th') {
            setCurrentStep(1);
        } else if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleCancel = () => {
        setCurrentStep(1);
        setFormData({ goal: '', class: '', phone: '', otp: ['', '', '', ''], name: '' });
        setOtpTimer(0);
        setGeneratedOtp('');
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <section className="relative py-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Progress Bar */}
                <div className="flex justify-center items-center gap-3 mb-8">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div
                            key={step}
                            className={`h-2 rounded-full transition-all duration-300 ${step <= currentStep
                                ? step === currentStep
                                    ? 'w-12 bg-cyan-500'
                                    : 'w-8 bg-green-400'
                                : 'w-8 bg-gray-300'
                                }`}
                        ></div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl min-h-[400px]">
                    {/* Step 1: Goal Selection */}
                    {currentStep === 1 && (
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-display">
                                Let's Pinpoint Your <span className="text-blue-600">Dream</span>
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">
                                Select your goal
                            </h3>
                            <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-12">
                                to explore our courses
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                {goals.map((goal) => (
                                    <button
                                        key={goal.id}
                                        onClick={() => handleGoalSelect(goal.id)}
                                        className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${formData.goal === goal.id
                                            ? 'bg-cyan-50 border-2 border-cyan-400 scale-105'
                                            : 'bg-gray-50 border-2 border-transparent hover:border-gray-300 hover:scale-105'
                                            }`}
                                    >
                                        {goal.icon}
                                        <span className="mt-3 text-gray-800 font-medium">{goal.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Class Selection */}
                    {currentStep === 2 && (
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                                Select your class
                            </h2>

                            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                                {classes.map((classValue) => (
                                    <button
                                        key={classValue}
                                        onClick={() => handleClassSelect(classValue)}
                                        className={`w-full md:w-auto px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${formData.class === classValue
                                            ? 'bg-cyan-400 text-white scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {classValue}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Phone Number */}
                    {currentStep === 3 && (
                        <div className="text-center max-w-md mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                                Enter your number
                            </h2>

                            <div className="mb-8">
                                <label className="block text-sm text-gray-600 mb-2 text-left">
                                    Whatsapp Number
                                </label>
                                <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3">
                                    <span className="text-gray-600">+91</span>
                                    <span className="text-gray-300">|</span>
                                    <input
                                        type="tel"
                                        placeholder="Enter number"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className="flex-1 bg-transparent outline-none text-gray-800"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: OTP Verification */}
                    {currentStep === 4 && (
                        <div className="text-center max-w-md mx-auto">
                            <p className="text-gray-600 mb-6">
                                An OTP was sent to your whatsapp number{' '}
                                <span className="text-cyan-500 font-medium">
                                    {formData.phone}
                                </span>
                            </p>

                            <label className="block text-sm text-gray-600 mb-4">Enter otp</label>

                            <div className="flex justify-center gap-4 mb-6">
                                {formData.otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-xl focus:border-cyan-400 focus:outline-none"
                                    />
                                ))}
                            </div>

                            {otpTimer > 0 ? (
                                <p className="text-sm text-cyan-500">
                                    Resend OTP in {formatTime(otpTimer)}
                                </p>
                            ) : (
                                <button
                                    onClick={handleGetOtp}
                                    className="text-sm text-cyan-500 hover:underline"
                                >
                                    Resend OTP
                                </button>
                            )}
                        </div>
                    )}

                    {/* Step 5: Name Input */}
                    {currentStep === 5 && (
                        <div className="text-center max-w-md mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                                Enter your name
                            </h2>

                            <div className="mb-8">
                                <label className="block text-sm text-gray-600 mb-2 text-left">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleNameChange}
                                    className="w-full bg-gray-50 border-2 border-cyan-400 rounded-xl px-4 py-3 outline-none text-gray-800"
                                />
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-12">
                        <button
                            onClick={currentStep === 1 ? handleCancel : handlePrev}
                            className="px-8 py-3 text-gray-600 font-medium hover:text-gray-800 transition-colors"
                        >
                            {currentStep === 1 ? 'Cancel' : 'Prev'}
                        </button>

                        {currentStep === 3 ? (
                            <button
                                onClick={handleGetOtp}
                                disabled={formData.phone.length !== 10}
                                className={`px-8 py-3 rounded-xl font-medium transition-all ${formData.phone.length === 10
                                    ? 'bg-cyan-400 text-white hover:bg-cyan-500'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Get OTP
                            </button>
                        ) : currentStep === 4 ? (
                            <button
                                onClick={handleVerifyOtp}
                                disabled={formData.otp.some(d => !d)}
                                className={`px-8 py-3 rounded-xl font-medium transition-all ${!formData.otp.some(d => !d)
                                    ? 'bg-cyan-400 text-white hover:bg-cyan-500'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Verify OTP
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                disabled={
                                    (currentStep === 1 && !formData.goal) ||
                                    (currentStep === 2 && !formData.class) ||
                                    (currentStep === 5 && !formData.name)
                                }
                                className={`px-8 py-3 rounded-xl font-medium transition-all ${currentStep === 1 || currentStep === 2 ? 'hidden' : ''} ${(currentStep === 1 && formData.goal) ||
                                    (currentStep === 2 && formData.class) ||
                                    (currentStep === 5 && formData.name)
                                    ? 'bg-cyan-400 text-white hover:bg-cyan-500'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentFlow;
