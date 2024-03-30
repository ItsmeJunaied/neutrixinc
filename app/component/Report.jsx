import React from 'react';
import './Report.module.css';
const Report = () => {
    return (
        <div className=''>
            <div className='lg:w-full w-[360px] lg:h-[514px] mt-[40px]  bg-cover bg-center rounded-lg overflow-hidden relative'  style={{backgroundImage: 'url("https://i.ibb.co/vstRxrf/63016579069feebf68c6c6cfaeacacde.jpg")'}}>


                <div className=' lg:pt-[220px] lg:ps-[114px]'>
                    <div className=' bg-[#C81E1E] w-[460px] lg:h-[241px] h-[241px] pt-[28px] ps-[34px] rounded-md '>
                        <p className=' w-[312px] text-white text-[18px] font-bold mb-[18px]'>Obtain cost-effective same-day insurance coverage quickly.</p>

                        <p className=' w-[322px] text-white text-[12px] font-medium '>Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. Etiam enim varius dictum amet hac imperdiet facilisis malesuada.</p>

                        <button className='lg:w-[177px] w-[310px] h-[54px] px-[32px]  py-[16px] bg-[#111928] text-[#E5E7EB] rounded-3xl text-[16px] mt-[18px]'>
                            Report a Claim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;