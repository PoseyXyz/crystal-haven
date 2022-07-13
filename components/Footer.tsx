import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <footer className='py-8 lg:py-24'>
            <div className='container flex flex-col md:flex-row gap-12 justify-between'>
                <div className='flex flex-col gap-8 border-b border-gray-500 py-16 md:py-0 md:border-0'>
                    <div className='bg-[#FDE425] w-[100px] h-[100px] rounded-[50%] flex justify-center items-center text-black font-semibold'>
                        <span>DCH</span>
                    </div>

                    <span className='text-xl md:text-[28px] font-medium'>De Crystal Haven</span>

                    <div className='flex-col my-4 gap-4 md:flex hidden'>
                        <span className='md:text-xl'>© De Crystal Haven 2022. All rights reserved.</span>
                        <div className='flex gap-4 text-gray-400 text-sm'>
                            <Link href='/'>
                                <a>Youtube</a>
                            </Link>
                            <Link href='/'>
                                <a>Facebook</a>
                            </Link>
                            <Link href='/'>
                                <a>Instagram</a>
                            </Link>
                            <Link href='/'>
                                <a>Twitter</a>
                            </Link>
                            <Link href='/'>
                                <a>Spotify</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-4'>
                        <span className='text-lg md:text-2xl font-medium'>Contact</span>
                        <span className='center-text-alt text-gray-400'>hello@decrystalhaven.com</span>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span className='text-lg md:text-2xl font-medium'>Office</span>
                        <span className='max-w-[400px] center-text-alt text-gray-400'>6th floor. Ravihouse 17-A, Saraswati Road, Opp. Podar Jr. College Santacruz West, Mumbai - 400054</span>
                    </div>
                </div>
                <div className='flex flex-col gap-8 md:gap-0 justify-between text-gray-400 font-medium text-lg md:text-2xl'>
                   <Link href=''>
                   <a className='hover:text-white duration-500 cursor-pointer'>About</a>
                  
                   </Link>
                   <Link href=''>
                 
                    <a className='hover:text-white duration-500 cursor-pointer'>Artists</a>
                   
                   </Link>
                   <Link href=''>
                   
                    <a className='hover:text-white duration-500 cursor-pointer'>Playlists</a>
                   
                   </Link>
                   <Link href=''>
                  
                    <a className='hover:text-white duration-500 cursor-pointer'>Albums</a>
                   </Link>
                </div>
                <div className='border-t border-gray-500 py-8 md:hidden flex flex-col my-4 gap-4'>

                    <span className=''>© DE Crystal Haven 2022. All rights reserved.</span>
                    <div className='flex justify-between md:gap-4 text-gray-400'>
                        <Link href='/'>
                            <a>Youtube</a>
                        </Link>
                        <Link href='/'>
                            <a>Facebook</a>
                        </Link>
                        <Link href='/'>
                            <a>Instagram</a>
                        </Link>
                        <Link href='/'>
                            <a>Twitter</a>
                        </Link>
                        <Link href='/'>
                            <a>Spotify</a>
                        </Link>

                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;