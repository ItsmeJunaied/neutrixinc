import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=' w-full lg:h-[460px]  mt-[80px] hidden lg:flex '>
                <div className=' w-full lg:py-[75px] bg-[#1F2A37] '>
                    <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* USA Underwriter */}
                        <div className="  p-4 text-white">
                            <h2 className="text-xl font-semibold mb-2">USA Underwriter</h2>
                            <p>NAIC # : 30457</p>
                            <p>P.O. Box 2426</p>
                            <p>Rancho Cucamonga, CA, 91729</p>
                        </div>

                        {/* Underwriting Support */}
                        <div className="  p-4 text-white">
                            <h2 className="text-xl font-semibold mb-2">Underwriting Support</h2>
                            <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                            <p>+1 (248) 541-2800</p>
                            <p>customerservice@usaunderwriters.com</p>
                        </div>

                        {/* Policy Suspensions And Coverage Approvals */}
                        <div className="  p-4 text-white">
                            <h2 className="text-xl font-semibold mb-2">Policy Suspensions And Coverage Approvals</h2>
                            <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                        </div>

                        {/* Customer Service & Support */}
                        <div className="  p-4 text-white">
                            <h2 className="text-xl font-semibold mb-2">Customer Service & Support</h2>
                            <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                            <p>+1 (248) 541-2800</p>
                            <p>customerservice@usaunderwriters.com</p>
                        </div>

                        {/* Claims Administration */}
                        <div className="  p-4 text-white">
                            <h2 className="text-xl font-semibold mb-2">Claims Administration</h2>
                            <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                            <p>+1 (855) 230-1656</p>
                            <p>P.O. Box 647 | Battle Creek, MI 49016</p>
                        </div>

                        {/* PIP Qualification Question and Submissions for Coverage */}
                        <div className="  p-4 text-white">
                            <h2 className="text-xl font-semibold mb-2">PIP Qualification Question and Submissions for Coverage</h2>
                            <p>+1 (248) 541-2800</p>
                            <p>policybinding@usaunderwriters.com</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="lg:hidden bg-[#1F2A37] text-white py-10 px-3">
                {/* USA Underwriter */}
                <div className="collapse collapse-arrow bg-[#1F2A37] border-[#374151] border-2">
                    <input type="radio" name="accordion" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-white">
                        USA Underwriter
                    </div>
                    <div className="collapse-content bg-[#111928] py-4 ">
                        <p>NAIC # : 30457 </p>
                        <p>P.O. Box 2426 </p>
                        <p>Rancho Cucamonga, CA, 91729 </p>
                    </div>
                </div>

                {/* Underwriting Support */}
                <div className="collapse collapse-arrow bg-[#1F2A37] border-[#374151] border-2 mt-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium text-white">
                        Underwriting Support
                    </div>
                    <div className="collapse-content bg-[#111928] py-4 ">
                        <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                        <p>+1 (248) 541-2800</p>
                        <p>customerservice@usaunderwriters.com</p>
                    </div>
                </div>

                {/* Policy Suspensions And Coverage Approvals */}
                <div className="collapse collapse-arrow bg-[#1F2A37] border-[#374151] border-2 mt-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium text-white">
                        Policy Suspensions And Coverage Approvals
                    </div>
                    <div className="collapse-content bg-[#111928] py-4 ">
                        <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                    </div>
                </div>

                {/* Customer Service & Support */}
                <div className="collapse collapse-arrow bg-[#1F2A37] border-[#374151] border-2 mt-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium text-white">
                        Customer Service & Support
                    </div>
                    <div className="collapse-content bg-[#111928] py-4 ">
                        <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                        <p>+1 (248) 541-2800</p>
                        <p>customerservice@usaunderwriters.com</p>
                    </div>
                </div>

                {/* Claims Administration */}
                <div className="collapse collapse-arrow bg-[#1F2A37] border-[#374151] border-2 mt-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium text-white">
                        Claims Administration
                    </div>
                    <div className="collapse-content bg-[#111928] py-4 ">
                        <p>Monday - Friday, 9:00 am - 6:00 pm ET</p>
                        <p>+1 (855) 230-1656</p>
                        <p>P.O. Box 647 | Battle Creek, MI 49016</p>
                    </div>
                </div>

                {/* PIP Qualification Question and Submissions for Coverage */}
                <div className="collapse collapse-arrow bg-[#1F2A37] border-[#374151] border-2 mt-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium text-white">
                        PIP Qualification Question and Submissions for Coverage
                    </div>
                    <div className="collapse-content bg-[#111928] py-4 ">
                        <p>+1 (248) 541-2800</p>
                        <p>policybinding@usaunderwriters.com</p>
                    </div>
                </div>
            </div>



            <div className=' container mx-auto flex flex-col lg:flex-row justify-between items-center h-[60px] bg-[#1F2A37] lg:bg-white  '>
                <div>
                    <p className='text-white lg:text-[#111928] text-[14px] '>Copyright 2022 USA Underwriters <span className=' font-semibold'>| Privacy Policy | Terms of Use</span></p>
                </div>
                <div>
                    <p className='text-white lg:text-[#111928] text-[14px]'>( Built by Neutrix - Powered by Neutrix Systems )</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;