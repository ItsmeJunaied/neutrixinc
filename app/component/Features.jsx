import React from 'react';

const Features = () => {
    return (
        <div className=' lg:mt-[100px] mt-[45px]'>
            <div className=' flex lg:flex-row flex-col justify-between items-start'>
                <div className=' lg:w-1/2'>
                    <p className=' text-[#374151] lg:text-[16px] text-[14px] '>Our Features</p>
                    <p className='text-[#111928] lg:text-[30px] text-[20px] font-medium'>MCCA REFUND INFORMATION</p>
                    <button className=' px-[32px]  py-[16px] bg-[#C81E1E] text-[#E5E7EB] rounded-3xl text-[16px] mt-[23px]'>
                        MCCA Refund FAQ
                    </button>

                </div>
                <div className='lg:w-1/2 lg:mt-0 mt-[34px]'>
                    <p className=' text-[#6B7280] text-[16px]'>
                        The Michigan Catastrophic Claims Association approved refunds for certain Michigan Policyholders due a surplus of funds being held by the MCCA. The approved refund will be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an insured historical vehicle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;