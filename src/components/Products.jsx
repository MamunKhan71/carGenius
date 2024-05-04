import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
const Products = () => {
    const [rating, setRating] = useState(4)
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div>
            <div className="text-center space-y-6">
                <div className="space-y-4">
                    <p className="text-primary font-bold text-xl">Popular Products</p>
                    <h1 className="text-[#151515] font-bold text-2xl">Browse Our Products</h1>
                    <p className="text[#737373] text-base px-96">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="space-y-12">
                    <div className="mt-24 card w-96 bg-base-100 shadow-xl p-6 hover:transform hover:scale-105 transition ease-in-out hover:cursor-pointer">
                        <div className='flex flex-col items-center justify-center '>
                            <figure><img className="rounded-xl w-48 h-auto" src="/src/assets/images/products/6.png" /></figure>
                            <div className="card-body px-0 text-center items-center">
                                <Rating className='fe' style={{ maxWidth: 150 }} value={rating} onChange={setRating} readOnly={true} itemStyles={myStyles} />
                                <h2 className="card-title font-bold text-2xl">Electrical System</h2>
                                <p className="text-[#FF3811] font-bold text-xl">Price: $20.00</p>
                            </div>
                        </div>
                    </div>
                    <button className="border-primary border-2 btn bg-transparent text-primary font-semibold">More Products</button>
                </div>
            </div>

        </div>
    );
};

export default Products;