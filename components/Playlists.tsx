import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs'

function Playlists() {
    const [openPlaylistId, setOpenPlaylistId] = useState(1)
    const [playlists, setPlaylists] = useState(
        [
            {
                id:1,
                name:'The Hottest Hip Hop and R&B!',
                description:"Aliquip dolore et exercitation non labore id duis quis ullamco reprehenderit. Consectetur in officia aliqua dolore irure magna sit. Duis ullamco eu excepteur fugiat esse. Enim nisi enim labore officia.",
                coverImgUri:"/playlist-covers/cover1.webp"
            },
            {
                id:2,
                name:'Songs I Heard On Tik Tok',
                description:"Aliquip dolore et exercitation non labore id duis quis ullamco reprehenderit. Consectetur in officia aliqua dolore irure magna sit. Duis ullamco eu excepteur fugiat esse. Enim nisi enim labore officia.",
                coverImgUri:"/playlist-covers/cover2.webp"
            },
            {
                id:3,
                name:'Crystal Holiday',
                description:"Aliquip dolore et exercitation non labore id duis quis ullamco reprehenderit. Consectetur in officia aliqua dolore irure magna sit. Duis ullamco eu excepteur fugiat esse. Enim nisi enim labore officia.",
                coverImgUri:"/playlist-covers/cover3.webp"
            },
            {
                id:4,
                name:'Hymns',
                description:"Aliquip dolore et exercitation non labore id duis quis ullamco reprehenderit. Consectetur in officia aliqua dolore irure magna sit. Duis ullamco eu excepteur fugiat esse. Enim nisi enim labore officia.",
                coverImgUri:"/playlist-covers/cover4.webp"
            },


        ]
    )
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
{/* 
                    <article className="border-y border-gray-400 px-2 py-4">
                        <div className={`flex-col lg:flex-row flex gap-12 lg:gap-16 xl:gap-20`}>
                            <div className={`w-auto`}>
                                <Image src="/playlist-covers/cover1.webp" alt="Vercel Logo" layout="intrinsic" width="1280" height="1280" />
                            </div>
                            <div className='flex flex-col justify-center w-full gap-6'>
                                <h3 className='playlist-name'>
                                    The Hottest Hip Hop and R&B!
                                </h3>
                                <p className={`block max-w-[680px] text-lg`}>Aliquip dolore et exercitation non labore id duis quis ullamco reprehenderit. Consectetur in officia aliqua dolore irure magna sit. Duis ullamco eu excepteur fugiat esse. Enim nisi enim labore officia.</p>
                            </div>
                            
                        </div>

                    </article> */}

                    {
                        playlists.map((playlist) =>{
                            const {id, name, description, coverImgUri} = playlist
                            return (
                                <article onClick={()=>setOpenPlaylistId(id)} key={id} className={`${openPlaylistId===id ? 'border-b-white border-b-2' : ''} border-y border-gray-700 px-2 py-4 cursor-pointer group`}>
                                    <div className={`${openPlaylistId===id ? 'flex-col lg:flex-row' : 'flex-row items-center'} flex gap-5 lg:gap-16 xl:gap-20`}>
                                        <div className={`${openPlaylistId===id ? 'w-auto' : 'w-3/12 md:w-2/12 lg:w-1/12 '}`}>
                                            <Image src={coverImgUri} alt="Vercel Logo" layout="intrinsic" width="1280" height="1280" />
                                        </div>
                                        <div className='flex flex-col justify-center w-full gap-6'>
                                            <h3 className={`${openPlaylistId===id ? 'text-white' : 'text-gray-400 group-hover:text-white'} duration-500 playlist-name`}>
                                                {name}
                                            </h3>
                                            <p className={`${openPlaylistId===id ? 'block' : 'hidden'} max-w-[680px] md:text-lg`}>{description}</p>
                                        </div>
                                        <i className={ `${openPlaylistId===id ? 'hidden' : 'block'} text-gray-400 group-hover:text-white duration-500 playlist-name`}><BsPlus /></i>
                                    </div>
    
                                </article>
                            )
                        } )
                    }


                </div>
            </div>


        </section>
    );
}

export default Playlists;