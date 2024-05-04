const ChooseUs = () => {
    return (
        <div>
            <div className="space-y-4 text-center">
                <p className="text-primary font-bold text-xl">Core Features</p>
                <h1 className="text-[#151515] font-bold text-2xl">Why Choose Us</h1>
                <p className="text[#737373] text-base px-96">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="mt-24 flex justify-center">
                <div className="grid grid-cols-6 gap-8 justify-stretch">
                    <div className="p-8 hover:cursor-pointer border border-[#E8E8E8] rounded-xl flex items-center justify-center flex-col font-bold hover:bg-primary hover:border-none transition hover:text-white">
                        <img src="/src/assets/icons/group.svg" alt="" />
                        <p>Expert Team</p>
                    </div>
                    <div className="p-8 hover:cursor-pointer border border-[#E8E8E8] rounded-xl flex items-center justify-center flex-col font-bold bg-primary hover:border-none transition text-white">
                        <img src="/src/assets/icons/Group 38729.svg" alt="" />
                        <p>Timely Delivery</p>
                    </div>

                    <div className="p-8 hover:cursor-pointer border border-[#E8E8E8] rounded-xl flex items-center justify-center flex-col font-bold hover:bg-primary hover:border-none transition hover:text-white">
                        <img src="/src/assets/icons/person.svg" alt="" />
                        <p>24/7 Support</p>
                    </div>
                    <div className="p-8 hover:cursor-pointer border border-[#E8E8E8] rounded-xl flex items-center justify-center flex-col font-bold hover:bg-primary hover:border-none transition hover:text-white">
                        <img src="/src/assets/icons/Wrench.svg" alt="" />
                        <p>Best Equipment</p>
                    </div>
                    <div className="p-8 hover:cursor-pointer border border-[#E8E8E8] rounded-xl flex items-center justify-center flex-col font-bold hover:bg-primary hover:border-none transition hover:text-white">
                        <img src="/src/assets/icons/check.svg" alt="" />
                        <p>100% Guarantee</p>
                    </div>
                    <div className="p-8 hover:cursor-pointer border border-[#E8E8E8] rounded-xl flex items-center justify-center flex-col font-bold hover:bg-primary hover:border-none transition hover:text-white">
                        <img src="/src/assets/icons/./deliveryt.svg" alt="" />
                        <p>Timely Delivery</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;