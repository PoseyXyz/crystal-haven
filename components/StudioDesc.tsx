import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function StudioDesc() {
    return (
        <section className='py-16'>
            <div className='container flex flex-col gap-12'>
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
                <div>
                    <div className='flex justify-center'>
                        <p className='text-center max-w-4xl text-gray-400 center-text'>Tempor consectetur aute Lorem veniam cillum culpa mollit quis. Nisi amet eiusmod voluptate minim eiusmod aute labore est sit incididunt. Cupidatat ullamco nisi aliqua aute nostrud labore anim eiusmod Lorem in dolor Lorem. Excepteur fugiat sit anim magna deserunt eiusmod sint officia ullamco nostrud.</p>
                    </div>
                    <div>
                        <div>
                            <div className='relative w-full h-[780px]'>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudioDesc;