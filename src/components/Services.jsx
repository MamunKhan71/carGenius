const Services = () => {
    return (
        <div className="text-center space-y-4">
            <p className="text-primary font-bold text-xl">Service</p>
            <h1 className="text-4xl font-bold text-[#151515]">Our Service Area</h1>
            <p className="text-[#737373] px-96">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="space-y-12">
                <div className="card w-96 bg-base-100 shadow-xl p-6 hover:transform hover:scale-105 transition ease-in-out hover:cursor-pointer">
                    <figure><img className="rounded-xl" src="/src/assets/images/services/1.jpg" /></figure>
                    <div className="card-body text-left px-0">
                        <h2 className="card-title font-bold text-2xl">Electrical System</h2>
                        <p className="text-[#FF3811] font-bold text-xl">Price: $20.00</p>
                    </div>
                </div>
                <button className="border-primary border-2 btn bg-transparent text-primary font-semibold">More Services</button>
            </div>
        </div>
    );
};

export default Services;