import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='px-4 py-4'>
        <div className='flex justify-between items-center'>

            <div className='flex justify-center items-center'>
                <Link href={`/`}>
                    <span className='text-2xl font-bold text-center'>Hood.</span>
                </Link>  
            </div>

            <div className='sm:flex sm:justify-between sm:items-center hidden gap-4'>
                <Link href={`/`}>
                    <span className=''>Home</span>
                </Link>
                <Link href={`/`}>
                    <span className=''>Services</span>
                </Link>
                <Link href={`/`}>
                    <span className=''>Team</span>
                </Link>
                <Link href={`/`}>
                    <span className=''>About</span>
                </Link>
            </div>

            <div>
                <Link href={`/booking`}>
                    <button className='bg-white text-black rounded-lg text-center h-auto min-h-10 w-auto min-w-24 cursor-pointer'>Book Now</button>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar