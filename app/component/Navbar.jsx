'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const pathName = usePathname;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <nav className="bg-white border-gray-200 lg:h-[84px] shadow-md">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <div>
                        <Link href='/'>
                            <Image
                                className='h-10 w-auto'
                                src="/logo.png"
                                alt='logo'
                                width={100}
                                height={4}
                            ></Image>
                        </Link>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>
                       
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center align-middle justify-between h-full lg:p-0 p-8  lg:bg-white bg-[#C81E1E] lg:text-black text-white w-full lg:flex lg:w-auto  ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className=' py-5'>
                                
                                <Link href='/'>
                                    <p className='text-[16px] '>Home</p>
                                </Link>
                            </li>
                            <li className=' py-5'>
                                <Link href='/about'>
                                    <p className='text-[16px]'>About US</p>
                                </Link>
                            </li>
                            <li className=' py-5'>
                                <p className='text-[16px]'>Contact</p>
                            </li>
                            <li className=' py-5'>
                                <p className='text-[16px]'>Popcyholder Portal</p>
                            </li>
                            <li className=' py-5 hidden lg:flex'>
                                <p className='px-[20px] py-[10px] bg-[#C81E1E] text-[#E5E7EB] rounded-3xl text-[16px]'>Report a Claim</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;