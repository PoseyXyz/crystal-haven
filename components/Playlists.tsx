import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Playlists() {
    const [playlistState, setPlaylistState] = useState(false)
    return (
        <section className='py-24'>
            <div className='container px-12 flex flex-col gap-20 lg:gap-24'>
                <div className='flex flex-col md:flex-row md:items-center gap-6 items-start justify-between'>
                    {/* <span className='text-[30px] leading-[39px] lg:text-[70px] inline-block font-medium max-w-[720px] lg:leading-[95px]'>
                        A Boundless Studio Experience
                    </span> */}
                    <span className='heading inline-block font-medium max-w-[800px]'>
                        Playlists
                    </span>
                    <span className='oval'>
                        <Link href='/'>
                            <a>View Playlists</a>
                        </Link>
                    </span>
                </div>

                <div>
                {/* <span className='oval'>
                        <button onClick={()=>setPlaylistState(!playlistState)}>
                            View Playlists
                        </button>
                    </span> */}
                    
                    {
                        Array(5).fill(5).map((index)=>(
                            <article key={index} className="border-y border-gray-400 px-2 py-4">
                            <div className={`${playlistState ? 'flex-col lg:flex-row' : 'flex-row'} flex gap-12 lg:gap-16 xl:gap-20`}>
                                <div className={`${playlistState ? 'w-auto' : 'w-1/12'} w-auto`}>
                                    <Image src="/playlist-covers/cover1.webp" alt="Vercel Logo" layout="intrinsic" width="1280" height="1280" />
                                </div>
                                <div className='flex flex-col justify-center w-full gap-6'>
                                    <h3 className='playlist-name'>
                                        The Hottest Hip Hop and R&B!
                                    </h3>
                                    <p className={`${playlistState ? 'block' : 'hidden'} max-w-[680px] text-lg`}>Aliquip dolore et exercitation non labore id duis quis ullamco reprehenderit. Consectetur in officia aliqua dolore irure magna sit. Duis ullamco eu excepteur fugiat esse. Enim nisi enim labore officia.</p>
                                </div>
    
                            </div>
                        </article>
                        ))
                    }
                  
                </div>
            </div>


        </section>
    );
}

export default Playlists;