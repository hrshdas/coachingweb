const CentresBar = () => {
    const centres = [
        {
            id: 1,
            city: "Delhi",
            address: "A-1/17, Janakpuri, New Delhi"
        },
        {
            id: 2,
            city: "Chandigarh",
            address: "Chandigarh City Center Mohali, Panjab"
        },
        {
            id: 3,
            city: "Lucknow",
            address: "Airforce Colony Sarojini Nagar"
        },
        {
            id: 4,
            city: "Corporate Office",
            address: "A-1/17, Janakpuri, New Delhi"
        }
    ];

    return (
        <section id="centers" className="bg-[#1e3a8a] py-5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:divide-x lg:divide-white/30">
                    {centres.map((centre) => (
                        <div
                            key={centre.id}
                            className="flex-1 text-center py-3 lg:py-0 lg:px-8"
                        >
                            <h3 className="text-white font-bold text-base mb-1">
                                {centre.city}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {centre.address}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CentresBar;
