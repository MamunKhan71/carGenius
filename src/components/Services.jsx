import axios from "axios";
import { useQuery } from "react-query";

const Services = () => {
    const { data, error, isLoading } = useQuery('services', async () => {
        const response = await axios.get('services.json');
        return response.data;
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    console.log(data);
    return (
        <div className="text-center space-y-4">
            <p className="text-primary font-bold text-xl">Service</p>
            <h1 className="text-4xl font-bold text-[#151515]">Our Service Area</h1>
            <p className="text-[#737373] px-96">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="space-y-12">
                <div className="grid grid-cols-3 gap-6">
                    {
                        data.map(service => <>
                            <div className="card bg-base-100 shadow-xl p-6 hover:transform hover:scale-105 transition ease-in-out hover:cursor-pointer">
                                <figure><img className="rounded-xl h-48 object-cover" src={service.img} /></figure>
                                <div className="card-body text-left px-0">
                                    <h2 className="card-title font-bold text-2xl">{service.title}</h2>
                                    <p className="text-[#FF3811] font-bold text-xl">Price: ${service.price}</p>
                                </div>
                            </div>
                        </>)
                    }
                </div>
                <button className="border-primary border-2 btn bg-transparent text-primary font-semibold">More Services</button>
            </div>
        </div>
    );
};

export default Services;