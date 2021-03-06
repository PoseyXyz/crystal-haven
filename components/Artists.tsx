import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export interface Artist {
    id: number,
    name: string,
    role: string,
    imageUri: string
}

function Artists() {
    const [artists, setArtists] = useState<Artist[]>(
        [
            {
                id: 1,
                name: 'Bode Afolabi',
                role: "Role",
                imageUri: "/artist-portraits/portrait1.webp"
            },
            {
                id: 2,
                name: 'Charli XCX',
                role: "Role",
                imageUri: "/artist-portraits/portrait2.webp"
            },
            {
                id: 3,
                name: 'Hayley Kiyoko',
                role: "Role",
                imageUri: "/artist-portraits/portrait3.webp"
            },
            {
                id: 4,
                name: 'SK8',
                role: "Role",
                imageUri: "/artist-portraits/portrait4.webp"
            },
        ]
    )
    return (


        <section className='py-24'>
            <div className='container flex flex-col gap-20 lg:gap-24'>
                <div className='flex flex-col md:flex-row md:items-center gap-6 items-start justify-between'>
                    {/* <span className='text-[30px] leading-[39px] lg:text-[70px] inline-block font-medium max-w-[720px] lg:leading-[95px]'>
                        A Boundless Studio Experience
                    </span> */}
                    <span className='heading inline-block font-medium max-w-[800px]'>
                        Artists
                    </span>
                    <span className='oval'>
                        <Link href='/'>
                            <a>View Artists</a>
                        </Link>
                    </span>
                </div>
            </div>
            {/* <div className='flex flex-col gap-20 lg:gap-24'>
                    <div className='flex justify-center'>
                        <p className='text-center max-w-4xl text-gray-500 center-text'>Tune out from the noise and into your creative potential. Our studio provides the perfect atmosphere for inspiration, along with all the gear you???ll need for effortless recordings. With state-of-the-art equipment at-hand, you can focus on making your project incredible.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8'>
                        <div className=''>
                            <div className='bg-blue-400 flex flex-col relative'>
                                <div className='relative w-full h-[580px] rounded-xl'>
                                    <Image src="/services/one.webp" alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                                </div>
                                <div className='bg-black text-white p-4 text-lg text-center w-3/4 self-center absolute -bottom-8'>
                                    <span className='center-text-alt'>PRODUCTION</span>
                                </div>
                            </div>
                            <div className='mt-12'>
                                <p className='text-center text-gray-500'>Take advantage of 130+ mics, a wide array of instruments and more???all within reach.</p>
                            </div>
                        </div>

                        <div className=''>
                        <div className='bg-blue-400 flex flex-col relative'>
                            <div className='relative w-full h-[580px] rounded-xl'>
                                <Image src="/services/three.webp" alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                            </div>
                            <div className='bg-white text-black p-4 text-lg text-center w-3/4 self-center absolute -bottom-8'>
                                <span className='center-text-alt'>MASTERING</span>
                            </div>
                        </div>
                            <div className='mt-12'>
                                <p className='text-center text-gray-500'>Mid-century modern, on-site lodging ensures an easy transition from recording to relaxing, and vice versa.</p>
                            </div>
                        </div>

                        <div className=''>
                        <div className='bg-blue-400 flex flex-col relative'>
                            <div className='relative w-full h-[580px] rounded-xl'>
                                <Image src="/services/two.webp" alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                            </div>
                            <div className='bg-black text-white p-4 text-lg text-center w-3/4 self-center absolute -bottom-8'>
                                <span className='center-text-alt'>AUDIO MIXING</span>
                            </div>
                        </div>
                            <div className='mt-12'>
                                <p className='text-center text-gray-500'>Just south of Minneapolis-St. Paul. Worlds away from the bustle.</p>
                            </div>
                        </div>


                        {/* <div className='bg-blue-400 flex flex-col relative'>
                            <div className='relative w-full h-[600px] rounded-xl'>
                                <Image src="/services/one.webp" alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                            </div>
                            <div className='bg-black text-white p-4 text-lg text-center w-3/4 self-center absolute -bottom-8'>
                                <span>PRODUCTION</span>
                            </div>
                        </div>
                        <div className='bg-blue-400 flex flex-col relative'>
                            <div className='relative w-full h-[600px] rounded-xl'>
                                <Image src="/services/three.webp" alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                            </div>
                            <div className='bg-white text-black p-4 text-lg text-center w-3/4 self-center absolute -bottom-8'>
                                <span>MASTERING</span>
                            </div>
                        </div>
                        <div className='bg-blue-400 flex flex-col relative'>
                            <div className='relative w-full h-[600px] rounded-xl'>
                                <Image src="/services/two.webp" alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                            </div>
                            <div className='bg-black text-white p-4 text-lg text-center w-3/4 self-center absolute -bottom-8'>
                                <span>AUDIO MIXING</span>
                            </div>
                        </div> 

                    </div>
                </div>
            </div> */}

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24'>
                {
                    artists.map(artist => {
                        const { id, name, imageUri, role } = artist
                        return (
                            <div key={id} className='flex flex-col gap-4 relative'>
                                <div className={`${id%2===0?'lg:mt-12':'lg:mt-0'} relative w-full h-screen lg:h-[600px]`}>
                                    <Image src={imageUri} alt="Vercel Logo" layout="fill" objectFit='cover' objectPosition='start' />
                                </div>
                                <div>
                                    <p className='center-text-alt'>{name}</p>
                                    <span className='text-gray-500'>{role}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Artists;