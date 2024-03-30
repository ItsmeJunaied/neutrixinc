"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Cards.module.css';
import "swiper/css";
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
const Cards = () => {
    return (
        <div>
            {/* lg */}
            <div className=' mt-[40px] hidden lg:flex '>
                <div className=' flex flex-row gap-5 ]'>
                    <div className=' ps-[46px] pt-[46px] pb-[96px] flex flex-col border-[#F3F4F6] border-2 rounded-[16px] lg:w-[390px'>
                        <div className=' bg-[#E5E7EB] w-fit rounded-full'>
                            <Image
                                className='h-20 w-20 p-3'
                                src="/Frame.svg"
                                alt='logo'
                                width={100}
                                height={4}
                            ></Image>
                        </div>
                        <div>
                            <h1 className=' text-black text-[20px] font-semibold mt-[18px]'>Affordable Auto Insurance </h1>
                            <p className='text-[#6B7280] text-[20px] font-medium mt-[10px]'>USA Underwriters offers affordable rates on quality coverage.</p>
                        </div>
                    </div>
                    <div className=' ps-[46px] pt-[46px] pb-[96px] flex flex-col border-[#F3F4F6] border-2 rounded-[16px] lg:w-[390px'>
                        <div className=' bg-[#E5E7EB] w-fit rounded-full'>
                            <Image
                                className='h-20 w-20 p-3'
                                src="/Frame.svg"
                                alt='logo'
                                width={100}
                                height={4}
                            ></Image>
                        </div>
                        <div>
                            <h1 className=' text-black text-[20px] font-semibold mt-[18px]'>Accidents Can Add Up</h1>
                            <p className='text-[#6B7280] text-[20px] font-medium mt-[10px]'>
                                Accidents and infractions can linger long after the fines are paid and the car is repaired.
                            </p>
                        </div>
                    </div>
                    <div className=' ps-[46px] pt-[46px] pb-[96px] flex flex-col border-[#F3F4F6] border-2 rounded-[16px] lg:w-[390px'>
                        <div className=' bg-[#E5E7EB] w-fit rounded-full'>
                            <Image
                                className='h-20 w-20 p-3'
                                src="/Frame.svg"
                                alt='logo'
                                width={100}
                                height={4}
                            ></Image>
                        </div>
                        <div>
                            <h1 className=' text-black text-[20px] font-semibold mt-[18px]'>Price Conscious</h1>
                            <p className='text-[#6B7280] text-[20px] font-medium mt-[10px]'>Price conscious consumers choose USA Underwriters for affordable auto insurance solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* md */}

            <div className=' lg:hidden mt-3'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className=' ps-[46px] lg:pt-[46px] pt-[20px] lg:pb-[96px] pb-[46px] flex flex-col border-[#F3F4F6] border-2 rounded-[16px] lg:w-[390px'>
                            <div className=' bg-[#E5E7EB] w-fit rounded-full'>
                                <Image
                                    className='h-20 w-20 p-3'
                                    src="/Frame.svg"
                                    alt='logo'
                                    width={100}
                                    height={4}
                                ></Image>
                            </div>
                            <div>
                                <h1 className=' text-black text-[20px] font-semibold mt-[18px]'>Affordable Auto Insurance </h1>
                                <p className='text-[#6B7280] lg:text-[20px] text-[12px] font-medium mt-[10px]'>USA Underwriters offers affordable rates on quality coverage.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' ps-[46px] lg:pt-[46px] pt-[20px] lg:pb-[96px] pb-[46px] flex flex-col border-[#F3F4F6] border-2 rounded-[16px] lg:w-[390px'>
                            <div className=' bg-[#E5E7EB] w-fit rounded-full'>
                                <Image
                                    className='h-20 w-20 p-3'
                                    src="/Frame.svg"
                                    alt='logo'
                                    width={100}
                                    height={4}
                                ></Image>
                            </div>
                            <div>
                                <h1 className=' text-black text-[20px] font-semibold mt-[18px]'>Accidents Can Add Up </h1>
                                <p className='text-[#6B7280] lg:text-[20px] text-[12px] font-medium mt-[10px]'>
                                    Accidents and infractions can linger long after the fines are paid and the car is repaired.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' ps-[46px] lg:pt-[46px] pt-[20px] lg:pb-[96px] pb-[46px] flex flex-col border-[#F3F4F6] border-2 rounded-[16px] lg:w-[390px'>
                            <div className=' bg-[#E5E7EB] w-fit rounded-full'>
                                <Image
                                    className='h-20 w-20 p-3'
                                    src="/Frame.svg"
                                    alt='logo'
                                    width={100}
                                    height={4}
                                ></Image>
                            </div>
                            <div>
                                <h1 className=' text-black text-[20px] font-semibold mt-[18px]'>Price Conscious</h1>
                                <p className='text-[#6B7280] lg:text-[20px] text-[12px] font-medium mt-[10px]'>Price conscious consumers choose USA Underwriters for affordable auto insurance solutions.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Cards;