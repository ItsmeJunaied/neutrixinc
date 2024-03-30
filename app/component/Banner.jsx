"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const Banner = () => {

    return (
        <div className=' lg:mt-[40px] mt-[12px]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2000 }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='lg:flex lg:flex-row lg:justify-between bg-[#C81E1E] rounded-[10px]'>
                        <div className=' lg:w-1/2 lg:py-[64px] py-[31px] lg:ps-[54px] ps-[31px]'>
                            <div>
                                <h1 className=' lg:text-[48px] text-[30px] font-bold text-white uppercase lg:w-[553px] '>Get affordable, same-day coverage in no time.</h1>
                                <p className=' lg:text-[16px] text-[12px] mt-[16px] text-white'>With roots over a century deep in the birthplace of the automobile industry, USA Underwriters has the knowledge and expertise to help tailor a policy to suit your lifestyle, your budget, and your priorities.</p>
                            </div>

                            <div className=' flex flex-row gap-[30px]  items-center mt-[40px]'>
                                <p className=' px-[32px] py-[16px] bg-[#FFFFFF] text-[#1F2A37] rounded-3xl text-[16px]'>Report a Claim</p>

                                <p className='text-white'>Learn More</p>
                            </div>

                        </div>
                        <div className=' w-1/2 justify-center items-end hidden lg:flex'>
                            <Image
                                className='h-full w-auto sliderIMageOne'
                                src="/bannerImg.png"
                                alt='logo'
                                width={100}
                                height={4}
                            ></Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='lg:flex lg:flex-row lg:justify-between bg-green-500 rounded-[10px]'>
                        <div className=' lg:w-1/2 lg:py-[64px] py-[31px] lg:ps-[54px] ps-[31px]'>
                            <div>
                                <h1 className=' lg:text-[48px] text-[30px] font-bold text-white uppercase lg:w-[553px] '>Get affordable, same-day coverage in no time.</h1>
                                <p className=' lg:text-[16px] text-[12px] mt-[16px] text-white'>With roots over a century deep in the birthplace of the automobile industry, USA Underwriters has the knowledge and expertise to help tailor a policy to suit your lifestyle, your budget, and your priorities.</p>
                            </div>

                            <div className=' flex flex-row gap-[30px]  items-center mt-[40px]'>
                                <p className=' px-[32px] py-[16px] bg-[#FFFFFF] text-[#1F2A37] rounded-3xl text-[16px]'>Report a Claim</p>

                                <p className='text-white'>Learn More</p>
                            </div>

                        </div>
                        <div className=' w-1/2 justify-center items-end hidden lg:flex'>
                            <Image
                                className='h-full w-auto sliderIMageOne'
                                src="/bannerImg.png"
                                alt='logo'
                                width={100}
                                height={4}
                            ></Image>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;