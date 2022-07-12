import React from 'react';
import {BsArrowRightShort} from 'react-icons/bs'

function Newsletter() {
    return (

        <section className='py-24'>
            <div className='container px-12 flex flex-col items-center gap-4'>
                    {/* <span className='text-[30px] leading-[39px] lg:text-[70px] inline-block font-medium max-w-[720px] lg:leading-[95px]'>
                    A Boundless Studio Experience
                </span> */}
                    <span className='heading inline-block font-medium text-center max-w-[800px]'>
                        Be The First To Know
                    </span>
                    <p className='center-text-alt text-gray-500'>Join our mailing list to get exclusive updates</p>
                    <div className='flex items-center relative px-4 w-2/4 mt-4'>
                        <input placeholder='EMAIL ADDRESS' className='bg-transparent outline-none p-2 border-b border-gray-500 focus:border-white duration-500 w-full'/>
                        <i className='text-4xl absolute right-3'><BsArrowRightShort/></i>
                    </div>
                </div>
        </section>
    );
}

export default Newsletter;