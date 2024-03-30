import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const page = () => {

    const text = `
        In 1962, the Southern Michigan Mutual Insurance Company celebrated its 100th year in continuous operation and was presented with a plaque by the State of Michigan as a Centenary Business.
        \n\n
        In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may have changed, but the dedication to our customers, our drive to serve them and their communities hasn’t. USA Underwriters’ mission as a leading Property and Casualty Insurance company in Michigan, remains largely unchanged from the mission of its progenitor: to provide affordable, quality insurance solutions to families and individuals.
        \n\n
        Insurance has changed a lot in the last century and a half. When Southern Michigan Mutual Insurance Company was founded, automobiles simply didn’t exist. That all changed — right in the company’s back yard — at the turn of the 20th century when Henry Ford’s Model T began rolling off the assembly line.
        \n\n
        In an instant of history, the car supplanted the horse and buggy as American’s primary mode of transportation. The era of the Automobile had begun, and the Southern Michigan Mutual Insurance Company was front and center for one of the most dramatic shifts in American history. The car accelerated economic growth, and offered a freedom of travel that had been nigh-unimaginable for the vast majority of people through the whole of human history.
    `;

    const lines = text.trim().split('\n');

    const firstLine = lines.shift();

    const chunks = [];
    for (let i = 0; i < lines.length; i += 2) {
        chunks.push(lines.slice(i, i + 2).join('\n'));
    }


    return (
        <div className=" container mx-auto w-full ">
            <h1 className=" text-center text-[36px] font-medium">About us</h1>

            <div className="text-sm breadcrumbs flex flex-row justify-center">
                <ul>
                    <li>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            

            <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center mb-[60px]">
                <div className=" lg:w-1/5">
                    <p className=" text-[#374151] text-[16px] hidden lg:flex ">About us</p>
                    <p className=" text-[30px] text-[#111928] font-bold">History</p>
                </div>

                <div className=" lg:w-4/5">
                    <p className="text-gray-600 text-sm">{firstLine}</p>
                </div>

            </div>

            <div className=" mb-[50px]">
                <Image
                    className=' lg:w-full w-[334px] lg:h-[500px] h-[150px] rounded-md'
                    src="/drive.jfif"
                    alt='drive.jpg'
                    width={100}
                    height={4}
                    priority={true}
                ></Image>
            </div>

            <div>
                {chunks.map((chunk, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                        {chunk}
                        <br />
                        {/* <br /> */}
                    </p>
                ))}
            </div>

        </div>
    );
};

export default page;