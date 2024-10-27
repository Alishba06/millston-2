
import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'
const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className='w-[1349px] h-[410px] flex-shrink-0 bg-[#14274A]'>
            <h1 className='text-white font-montserrat text-[80px] font-bold leading-none text-center mr-16 pt-40'>Contact Us</h1>
        </div>

        <div className='relative mt-28 ml-20'>
            <h1 className='text-[#14274A] font-garamond text-[40px] font-bold leading-none'>WE ARE HERE FOR YOU</h1>
            <p className='text-[#14274A] text-[15px] mt-3 font-normal leading-none font-montserrat'>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,</p>
            <p className='text-[#14274A] text-[15px] mt-1 font-normal leading-none font-montserrat'>please forward it to our support desk and we will get back to you as soon as possible.</p>
        </div>
                 
         <div className='relative mt-28 ml-20'>
           
           <p className='text-[#14274A] font-montserrat text-[20px] font-normal leading-none'>497 Evergreen Rd.Roseville,</p>
            <p className='mt-1 text-[#14274A] font-montserrat text-[20px] font-normal leading-none'>CA 95673</p>
            <p className='mt-2 flex-shrink-0 text-[#14274A] text-[20px] font-bold leading-normal'><a href="https://www.google.com/maps/search/?api=1&query=497+Evergreen+Rd,+Roseville,+CA+95673" target='_blank'></a>View map</p>
            <p className='mt-2 text-[#14274A] font-montserrat text-[20px] font-normal leading-none'>Phone: +44 345 678 903</p>
            <p className='mt-2 text-[#14274A] font-montserrat text-[20px] font-normal leading-none'>Email:<a href="mailto:luxury_hotels@gmail.com">luxury_hotels@gmail.com</a></p>
         </div>
        

         
      

          <form className='flex justify-end mr-40 mb-10 -mt-32'>
          <div className=''>
            <h1>Name</h1>
            <input className='flex-shrink-0 w-[200px] h-[30px] border-2 border-[#14274A] bg-white' type="text" placeholder=''/>
            <br />
            <br />
            <h1>Email Address</h1>
            <input className='flex-shrink-0 w-[200px] h-[30px] border-2 border-[#14274A] bg-white' type="email" placeholder=''/>
            <br />
            <br />
            <h1>Message</h1>
            <textarea className='flex-shrink-0 w-[200px] h-[150px] border-2 border-[#14274A] bg-white' name="" id=""></textarea>
            </div>
            <div className='mt-96 ml-[-90px]'>
            <button className='flex-shrink-0  w-[90px] h-[40px] bg-[#E0B973]  rounded-md text-white text-[15px] font-normal leading-normal'>Submite</button>
            </div>
          </form>
          <Footer />
       </div>
  )
}

export default Contact