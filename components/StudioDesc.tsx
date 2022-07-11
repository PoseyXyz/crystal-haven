import Link from 'next/link';
import React from 'react';

function StudioDesc() {
    return (
        <section className='py-16'>
            <div className='container'>
                <div className='flex flex-col md:flex-row md:items-center gap-6 items-start justify-between'>
                    {/* <span className='text-[30px] leading-[39px] lg:text-[70px] inline-block font-medium max-w-[720px] lg:leading-[95px]'>
                        A Boundless Studio Experience
                    </span> */}
                     <span className='heading inline-block font-medium max-w-[800px]'>
                        A Boundless Studio Experience
                    </span>
                    <span className='oval'>
                        <Link href='/'>
                            <a>Read More</a>
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default StudioDesc;