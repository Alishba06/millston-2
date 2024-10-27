
import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#14274A] flex-shrink-0 text-white py-8'>
      <div className='container mx-auto px-8'>
        <div className='flex-col md:flex-row justify-between grid grid-cols-3 gap-8'>
          <div className='mr-28'>
            <h4 className='w-[118px] h-[38px] flex-shrink-0 text-white font-garamond text-[25px] font-bold tracking-[3.75px]'>LUXURY</h4>
            <h3 className='w-[63px] h-[8px] flex-shrink-0 text-white font-garamond text-[9px] font-bold tracking-[5.4px] text-center'>HOTELS</h3>
            <p className='mt-5 text-white font-montserrat text-[14px] font-normal '>497 Evergreen Rd.Rosevills,CA95673</p>
            <p className=' text-white font-montserrat text-[14px] font-normal '>+44 345 678 903</p>
            <p className=' text-white font-montserrat text-[14px] font-normal '>luxury_hotels@gmail.com</p>
          </div>

          <div className='flex flex-col space-y-2 mt-5'>
            <a href="" className='text-white font-montserrat text-[14px] font-normal hover:text-gray-300'>About Us</a>
            <a href="" className='text-white font-montserrat text-[14px] font-normal hover:text-gray-300'>Contact</a>
            <a href="" className='text-white font-montserrat text-[14px] font-normal hover:text-gray-300'>Terms & Conditions</a>
          </div>
          
          
      
  <div className="flex justify-between items-center space-x-20 ">


  <div className="flex flex-col  ">
  <a href="https://facebook.com" target="_blank" className="flex items-center space-x-2">
    <FaFacebookF className="text-white" />
    <span>Facebook</span>
  </a>
  <a href="https://twitter.com" target="_blank" className="flex items-center space-x-2">
    <FaTwitter className="text-white" />
    <span>Twitter</span>
  </a>
  <a href="https://instagram.com" target="_blank" className="flex items-center space-x-2">
    <FaInstagramSquare className="text-white" />
    <span>Instagram</span>
  </a>
</div>


<form className="flex flex-col items-start mb-5">
  <label htmlFor="email" className="mb-2 text-left">
    Subscribe to our newsletter
  </label>
  <div className="flex">
    <input
      type="email"
      placeholder="Email Address"
      className="border border-gray-300 p-2 rounded-l-md mb-2"
    />
    <button className="bg-[#E0B973] text-white px-4 py-2 rounded-r-md mb-2">
      OK
    </button>
  </div>
</form>
</div>
</div>
</div>
</footer>
  )
}

export default Footer
   
    


// space-y-2 mb-6