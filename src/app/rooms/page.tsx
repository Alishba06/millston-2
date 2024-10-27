
import React from 'react'
import Navbar from '../navbar/page'
import Image from 'next/image'
import { AiFillPlusCircle } from "react-icons/ai";
import Footer from '../footer/page';

const Room = () => {
  return (
    <div>
        <Navbar />

        <section >
            <div className=' flex-shrink-0'>
                <Image src={'/ROOMimage.png'} alt='Room Image' width={1920} height={1080}></Image>
                
                <div className='abolute  transfrom ml-24 -mt-48 -translate-y-96'>
                <h1 className='text-white text-[50px] font-montserrat'>WELCOME To</h1>
                <h1 className='w-[680px] h-[134px] flex-shrink-0 text-white font-garamond text-[100px] font-bold leading-normal tracking-[10.78px]'>LUXURY</h1>
                <h1  className='text-white font-garamond text-60px font-bold tracking-24px '>HOTAL</h1>
                <p className='text-white text-[25px] font-normal leading-normal tracking-[2.5px] font-montserrat text-storke'>Book your stay and enjoy Luxury</p>
                <p className='text-white text-[25px] font-normal leading-normal tracking-[2.5px] font-montserrat text-storke'>redefined at the most affordable rates.</p>
                </div>
            </div>
          </section>

          <div className=''>
            <h1 className='text-[#14274A] text-center font-garamond text-[40px] font-bold leading-none'>ROOMS AND RATES</h1>
            <br />
            <p className='text-[#14274A] text-center font-roboto text-[15px] font-normal leading-normal text-stork'>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,</p>
            <p className='text-[#14274A] text-center font-roboto text-[15px] font-normal leading-normal text-stork'>comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented</p>
            <p className='text-[#14274A] text-center font-roboto text-[15px] font-normal leading-normal text-stork'>by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
          </div>


      <div className='flex-shrink-0 ml-64 pl-0  flex justify-start'>
      <div className='mt-10 rounded-b-[8px] border-2 border-[#14274A]'>
      <Image 
      className=' h-auto object-contain'
      src={'/SNIGLEROOM.png'} 
      alt='room image' 
      width={800} 
      height={400}
  />
  <div className=' w-[800px] h-[50px] flex-shrink-0 bg-[#14274A]'>
    <h1 className='ml-64 p-3 w-[452px] h-[59px] flex-shrink-0 text-white font-montserrat text-[30px] font-bold leading-none'>SINGLE ROOM</h1>
  </div>

  <div className="flex items-center ml-20">
   <AiFillPlusCircle className="text-[#E0B973] ml-3 w-10 h-10 flex-shrink-0 mt-8" />
   <h1 className="ml-2 mt-7 text-[#14274A] font-montserrat text-[15px] font-normal leading-normal">
      VIEW ROOM DETAILS
   </h1>
</div>


 <div className='relative flex justify-end mr-24 -right-4 -top-10'>
    <button className='bg-[#E0B973] text-white font-bold py-2 px-4 rounded-lg transction duration-300'>$147 Avg/night</button>
 </div>

  </div>
</div>

<div className='flex-shrink-0 ml-64 pl-0  flex justify-start'>
      <div className='mt-10 rounded-b-[8px] border-2 border-[#14274A]'>
      <Image 
      className=' h-auto object-contain'
      src={'/double-room1.png'} 
      alt='room image' 
      width={800} 
      height={400}
  />
  <div className=' w-[800px] h-[50px] flex-shrink-0 bg-[#14274A]'>
    <h1 className='ml-64 p-3 w-[452px] h-[59px] flex-shrink-0 text-white font-montserrat text-[30px] font-bold leading-none'>DOUBLE ROOM</h1>
  </div>

  <div className="flex items-center ml-20">
   <AiFillPlusCircle className="text-[#E0B973] ml-3 w-10 h-10 flex-shrink-0 mt-8" />
   <h1 className="ml-2 mt-7 text-[#14274A] font-montserrat text-[15px] font-normal leading-normal">
      VIEW ROOM DETAILS
   </h1>
</div>


 <div className='relative flex justify-end mr-24 -right-4 -top-10'>
    <button className='bg-[#E0B973] text-white font-bold py-2 px-4 rounded-lg transction duration-300'>$147 Avg/night</button>
 </div>

  </div>
</div>


<div className='flex-shrink-0 ml-64 pl-0  flex justify-start'>
      <div className='mt-10 rounded-b-[8px] border-2 border-[#14274A]'>
      <Image 
      className=' h-auto object-contain'
      src={'/TwinRoom.png'} 
      alt='room image' 
      width={800} 
      height={400}
  />
  <div className=' w-[800px] h-[50px] flex-shrink-0 bg-[#14274A]'>
    <h1 className='ml-72 p-3 w-[452px] h-[59px] flex-shrink-0 text-white font-montserrat text-[30px] font-bold leading-none'>TWIN ROOM</h1>
  </div>

  <div className="flex items-center ml-20">
   <AiFillPlusCircle className="text-[#E0B973] ml-3 w-10 h-10 flex-shrink-0 mt-8" />
   <h1 className="ml-2 mt-7 text-[#14274A] font-montserrat text-[15px] font-normal leading-normal">
      VIEW ROOM DETAILS
   </h1>
</div>


 <div className='relative flex justify-end mr-24 -right-4 -top-10'>
    <button className='bg-[#E0B973] text-white font-bold py-2 px-4 rounded-lg transction duration-300'>$147 Avg/night</button>
 </div>

</div>
</div>

<div className='mb-10 p-5'>
<h1 className='text-[#14274A] font-garamond text-4xl font-bold leading-normal text-center'>Testimonials</h1>
<p className='text-[#14274A] font-montserrat text-2xl font-normal leading-normal text-center'>Clam,Serene,Retro-What a way to relax and enjoy</p>
<p className='text-[#14274A] font-montserrat text-2xl font-normal leading-normal text-center'>Mr.and Mrs.Baxter,UK</p> 
</div> 

<Footer />
</div>
  )
}

export default Room