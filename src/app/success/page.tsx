import Link from 'next/link';
import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";


export default function Success() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen text-center'>
    <p className='text-orange-500 font-bold font-serif'>SUCCESS</p>
    <h1 className='text-3xl sm:text-5xl font-bold text-gray-900'>Your order has been placed! 🎉</h1>
    <p className='text-gray-600'>Thank you for your purchase!</p>
    <Link href='/' className='mt-10 flex items-center justify-center gap-2 bg-orange-500 text-white px-3.5 py-2.5 rounded-md  great-vibes-regular font-extrabold text-2xl'>
        Continue shopping <FaArrowRightLong />
    </Link>
</div>
  )
}