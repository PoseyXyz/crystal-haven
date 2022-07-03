import Link from 'next/link';
import React from 'react';

function Nav() {
    return (
        <header>
            <nav>
                <div>
                    <span>CRYSTAL</span>
                    <span>HAVEN</span>
                </div>
                <div>
                    <ul>
                        <Link href="/">
                        <a>Home</a>
                        </Link>
                        <Link href="/">
                        <a>Artists</a>
                        </Link>
                        <Link href="/">
                        <a>Releases</a>
                        </Link>
                        <Link href="/">
                        <a>Our label</a>
                        </Link>
                        <Link href="/">
                        <a>About</a>
                        </Link>
                    </ul>
                </div>
            </nav>
            
        </header>
    );
}

export default Nav;