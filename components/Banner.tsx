import Image from 'next/image';
import React from 'react';

function Banner() {
    return (
        <section>
            <div className='bg-red-500 relative'>
                <div className='absolute bg-blue-500 z-10 top-0 flex justify-center items-center text-center left-0 w-full h-full overlay'>
                    {/* <div className='text-white'>
                        <h5 className='text-3xl font-medium tracking-widest'>
                        {`THE MIDWEST'S PREMIER`} 
                        </h5>
                        <h4 className='text-6xl font-bold tracking-wide mt-4'>
                        Residential <br></br> Audio-Visual Group
                        </h4>
                    </div> */}
                </div>
        <div className='relative w-full h-[780px]'>
        <Image src="/home/banner.jpg" alt="Vercel Logo" layout="fill" priority objectFit='cover' objectPosition='start' />
        </div>
            </div>
        </section>
    );
}
export default Banner;