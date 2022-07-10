import Link from 'next/link';
import React from 'react';

function Nav() {
    return (
        <header>
            <nav className='container flex justify-between items-center gap-4 py-8'>
                <div className='flex text-center gap-0'>
                    <span className='font-bold text-xl'>DE CRYSTAL HAVEN</span>
                    {/* <span className='ml-24 font-medium italic'>HAVEN</span> */}
                </div>
                <div className='flex gap-x-8 font-light'>
                        <Link href="/">
                        <a>HOME</a>
                        </Link>
                        <Link href="/">
                        <a>ARTISTS</a>
                        </Link>
                        <Link href="/">
                        <a>RELEASES</a>
                        </Link>
                        <Link href="/">
                        <a>OUR LABEL</a>
                        </Link>
                        <Link href="/">
                        <a>ABOUT</a>
                        </Link>      
                </div>
            </nav>
        </header>
    );
}

export default Nav;