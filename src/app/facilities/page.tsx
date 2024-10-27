
import React from 'react'
import Navbar from '../navbar/page'
import Image from 'next/image'
import Footer from '../footer/page'
const Facilites = () => {
  return (
    <div>
        <Navbar />
          
        <section >
            <div className=' flex-shrink-0'>
                <Image src={'/facilitesimage.png'} alt='homeimage' width={1920} height={1080}></Image>
                
                <div className='abolute  transfrom ml-24 -mt-48 -translate-y-96'>
                <h1 className='text-white text-[50px] font-montserrat'>WELCOME To</h1>
                <h1 className='w-[680px] h-[134px] flex-shrink-0 text-white font-garamond text-[100px] font-bold leading-normal tracking-[10.78px]'>LUXURY</h1>
                <h1  className='text-white font-garamond text-60px font-bold tracking-24px '>HOTAL</h1>
                <p className='text-white text-[25px] font-normal leading-normal tracking-[2.5px] font-montserrat text-storke'>Book your stay and enjoy Luxury</p>
                <p className='text-white text-[25px] font-normal leading-normal tracking-[2.5px] font-montserrat text-storke'>redefined at the most affordable rates.</p>
                </div>
            </div>
          </section>

          <div>
            <h1 className='text-[#14274A] text-center text-[30px] font-garamond  leading-normal font-bold'>FACILITIES</h1>
            <br />
            <p className='text-[#14274A] text-center font-montserrat text-[20px] font-normal leading-normal'>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so </p>
            <p className='text-[#14274A] text-center font-montserrat text-[20px] font-normal leading-normal'>that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure</p>
            <p className='text-[#14274A] text-center font-montserrat text-[20px] font-normal leading-normal'>and our modern luxury resort facilities will help you enjoy the best of all. </p>
          </div>
          <br />
          <div>
            <Image 
            className='flex-shrink-0 ml-56'
            src={'/gymimage.png'} 
            alt='gymimage' 
            width={900} 
            height={700}>
            </Image>
             
            <div className='relative'>
            <div className='abolute transfrom -translate-y-10  inset-0 flex items-center justify-center'>
                <h1 className='text-[#14274A] font-bold text-[20px] bg-white px-40 py-2 leading-normal'>THE GYM</h1>
            </div>
            </div>
          </div>

          <div>
            <Image 
            className='flex-shrink-0 ml-56'
            src={'/POOLSIDEBAR.png'} 
            alt='gymimage' 
            width={900} 
            height={700}>
            </Image>
             
            <div className='relative'>
            <div className='abolute transfrom -translate-y-10  inset-0 flex items-center justify-center'>
            <h1 className='text-[#14274A] font-bold text-[20px] bg-white px-40 py-2 leading-normal'>POOLSIDE BAR</h1>
            </div>
            </div>
          </div>

          <div>
            <Image 
            className='flex-shrink-0 ml-56'
            src={'/THESPA.png'} 
            alt='gymimage' 
            width={900} 
            height={700}>
            </Image>
             
            <div className='relative'>
            <div className='abolute transfrom -translate-y-10  inset-0 flex items-center justify-center'>
            <h1 className='text-[#14274A] font-bold text-[20px] bg-white px-40 py-2 leading-normal'>THE SPA</h1>
            </div>
            </div>
          </div>

          <div>
            <Image 
            className='flex-shrink-0 ml-56'
            src={'/SWIMMINGPOOL.png'} 
            alt='gymimage' 
            width={900} 
            height={700}>
            </Image>
             
            <div className='relative'>
            <div className='abolute transfrom -translate-y-10  inset-0 flex items-center justify-center'>
            <h1 className='text-[#14274A] font-bold text-[20px] bg-white px-40 py-2 leading-normal'>SWIMMING POOL</h1>
            </div>
            </div>
          </div>

          <div>
            <Image 
            className='flex-shrink-0 ml-56'
            src={'/RESTAURANT.png'} 
            alt='gymimage' 
            width={900} 
            height={700}>
            </Image>
             
            <div className='relative'>
            <div className='abolute transfrom -translate-y-10  inset-0 flex items-center justify-center'>
            <h1 className='text-[#14274A] font-bold text-[20px] bg-white px-40 py-2 leading-normal'>RESTAURANT</h1>
            </div>
            </div>
          </div>

          <div>
            <Image 
            className='flex-shrink-0 ml-56'
            src={'/LAUNDRY.png'} 
            alt='gymimage' 
            width={900} 
            height={700}>
            </Image>
             
            <div className='relative'>
            <div className='abolute transfrom -translate-y-10  inset-0 flex items-center justify-center'>
            <h1 className='text-[#14274A] font-bold text-[20px] bg-white px-40 py-2 leading-normal'>LAUNDRY</h1>
            </div>
            </div>

            <div className='mb-10 p-5'>
            <h1 className='text-[#14274A] font-garamond text-4xl font-bold leading-normal text-center'>Testimonials</h1>
            <p className='text-[#14274A] font-montserrat text-2xl font-normal leading-normal text-center'>Clam,Serene,Retro-What a way to relax and enjoy</p>
            <p className='text-[#14274A] font-montserrat text-2xl font-normal leading-normal text-center'>Mr.and Mrs.Baxter,UK</p> 
            </div> 
          </div>
          <Footer />
    </div>
  )
}

export default Facilites