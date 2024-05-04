import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Header() {
    return (
        <>
            <div className='h-[650px] relative'>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper h-full rounded-2xl"
                >
                    <SwiperSlide className=''>
                        <div className="relative">
                            <img src="/src/assets/images/banner/1.jpg" alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-950 opacity-70"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative">
                            <img src="/src/assets/images/banner/2.jpg" alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-950 opacity-70"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative">
                            <img src="/src/assets/images/banner/3.jpg" alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-950 opacity-70"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative">
                            <img src="/src/assets/images/banner/4.jpg" alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-950 opacity-70"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative">
                            <img src="/src/assets/images/banner/5.jpg" alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-950 opacity-70"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="relative">
                            <img src="/src/assets/images/banner/6.jpg" alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-950 opacity-70"></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='absolute top-1/2 px-48 transform  -translate-y-1/2 z-10 space-y-6'>
                    <h1 className='text-6xl text-white font-bold'>Affordable Price<br /> For Car {' '}
                        <span className='text-6xl text-red-500 font-bold'>
                            <Typewriter
                                words={['Servicing', 'Modifying', 'Checking', 'Washing!']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='text-lg text-white font-medium'>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4 items-center'>
                        <button className='text-lg btn border-none text-white bg-primary rounded-lg'>Discover More</button>
                        <button className='text-lg btn text-white bg-transparent border border-white rounded-lg'>Latest Project</button>
                    </div>
                </div>
            </div>
        </>
    );
}
