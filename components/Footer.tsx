import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-black text-gray-400 px-4 py-4'>
        <footer>
            &copy; {new Date().getFullYear()}, created by <Link href={`https://www.ekambains.com`} ><span className='text-white'>bainsinbusiness@gmail.com</span></Link>
        </footer>
    </div>
  )
}

export default Footer