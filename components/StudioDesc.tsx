import Link from 'next/link';
import React from 'react';

function StudioDesc() {
    return (
        <section>
            <div className='flex flex-col'>
            <h2 className='text-5xl'>
                A Boundless Studio Experience
            </h2>  
            <Link href='/'>
                <a>Read More</a>
            </Link>  
            </div>
        </section>
    );
}

export default StudioDesc;