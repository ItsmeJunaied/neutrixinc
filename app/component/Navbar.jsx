import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className=' container mx-auto flex flex-row justify-between align-middle items-center py-[19px]  '>
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

                <div className='flex flex-row justify-between align-middle items-center gap-16'>
                    <Link href='/'>
                        <p className=' text-[16px]'>
                            Home
                        </p>
                    </Link>
                    <Link href='/about'>
                        <p className=' text-[16px]'>
                            About US
                        </p>
                    </Link>
                    <p className=' text-[16px]'>Contact</p>
                    <p className=' text-[16px]'>Popcyholder Portal</p>
                    <p className=' px-[20px] py-[10px] bg-[#C81E1E] text-[#E5E7EB] rounded-3xl text-[16px]'>Report a Claim</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;