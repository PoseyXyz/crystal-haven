import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineEast, MdOutlineForward } from 'react-icons/md'

function Albums() {
    return (
        <section className='py-24'>
            <div className='container px-12 flex flex-col gap-8'>
                <div className='flex flex-col md:flex-row md:items-center gap-6 items-start justify-between'>
                    {/* <span className='text-[30px] leading-[39px] lg:text-[70px] inline-block font-medium max-w-[720px] lg:leading-[95px]'>
                    A Boundless Studio Experience
                </span> */}
                    <span className='heading inline-block font-medium max-w-[800px]'>
                        Album Releases
                    </span>
                    <span className='oval'>
                        <Link href='/'>
                            <a>View Playlists</a>
                        </Link>
                    </span>
                </div>

                <article className="">
                    <div className={`flex-col lg:flex-row flex gap-4 sm:gap-6 xl:gap-20`}>
                        <div className={`w-auto`}>
                            <Image src="/album-covers/cover1.webp" alt="Vercel Logo" layout="intrinsic" width="1600" height="1600" />
                        </div>
                        <div className='flex flex-col justify-center w-full gap-8'>
                            <div className='flex flex-row items-center justify-between'>
                                <span className="text-gray-600">NEW MUSIC / 15/06/2021</span>
                                <i className='text-9xl font-bold'><MdOutlineForward /></i>
                            </div>
                            <div>
                                <h3 className='playlist-name'>
                                    Bode Afolabi
                                </h3>
                                <p className={`block max-w-[680px] text-lg text-gray-400`}>{`Insert Album Name`}</p>
                            </div>
                            <div className='bg-[#FDE425] w-[100px] h-[100px] rounded-[50%] flex justify-center items-center text-black font-semibold'>
                                <span >LISTEN</span>
                            </div>
                        </div>

                    </div>

                </article>

            </div>


        </section>
    );
}

export default Albums;