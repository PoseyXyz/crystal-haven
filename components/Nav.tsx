import Link from 'next/link';
import React from 'react';

function Nav() {
    return (
        <header>
            <nav className='container flex flex-col items-center gap-4 py-8'>
                <div>
                    <span>CRYSTAL</span>
                    <span>HAVEN</span>
                </div>
                <div className='flex gap-x-8'>
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