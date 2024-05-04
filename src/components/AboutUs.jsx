const AboutUs = () => {
    return (
        <div className="flex gap-48 h-[500px]">
            <div className="h-full relative flex-1">
                <img className="h-full object-cover" src="/src/assets/images/about_us/person.jpg" alt="" />
                <div className="absolute border-8 border-white h-80 w-80 -right-20 top-64">
                    <div className=" bg-gray-200 h-full w-full opacity-40"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
                <p className="text-xl text-primary font-bold">About Us</p>
                <h1 className="text-[#151515] font-bold text-4xl leading-10">We are qualified<br /> & of experience <br /> in this field</h1>
                <p className="text-[#737373] text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="text-[#737373] text-base">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn bg-primary text-white rounded-lg w-1/3">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;