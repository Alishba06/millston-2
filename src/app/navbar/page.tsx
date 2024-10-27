import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
      return(
        <>
          
          <nav className=''>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
             <div className='absolute flex items-center justify-between h-16'>
              <div className=' relative z-0 flex shrink-0'>
              <Image className='mt-9 ml-10' src={'/Logo.png'} alt='logo' width={200} height={149}></Image>
              </div>
              <div className=' items-center space-x-14 mt-14 ml-64  text-white'>
                <Link  href={'/'}>Home</Link>
                <Link  href={'/facilities'}>Facilities</Link>
                <Link  href={'/rooms'}>Rooms</Link>
                <Link  href={'/contact'}>Contact us</Link>
              </div>
            </div>
          </div>
          </nav>

        </>
      )
}

export default Navbar