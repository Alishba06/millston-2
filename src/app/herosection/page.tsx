
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <main>
        <section >
            <div className=' flex-shrink-0'>
                <Image src={'/Hotalimag1.png'} alt='homeimage' width={1920} height={1080}></Image>
                
                <div className='abolute  transfrom ml-24 -mt-48 -translate-y-96'>
                <h1 className='text-white text-[50px] font-montserrat'>WELCOME To</h1>
                <h1 className='w-[680px] h-[134px] flex-shrink-0 text-white font-garamond text-[100px] font-bold leading-normal tracking-[10.78px]'>LUXURY</h1>
                <h1  className='text-white font-garamond text-60px font-bold tracking-24px '>HOTAL</h1>
                <p className='text-white text-[25px] font-normal leading-normal tracking-[2.5px] font-montserrat text-storke'>Book your stay and enjoy Luxury</p>
                <p className='text-white text-[25px] font-normal leading-normal tracking-[2.5px] font-montserrat text-storke'>redefined at the most affordable rates.</p> 
                
                <div className='flex-shrink-0 mt-3 w-[170px] h-[50px] bg-[#E0B973] rounded-md'>
                  <button className='flex-shrink-0 w-[157px] h-[20px] text-white font-montserrat  leading-normal mt-4 ml-4 font-bold'>BOOK NOW</button>
                </div>
                </div>
            </div>
          </section>
        <section>
        <div >
        <p className='text-[#14274A] text-[20px] font-normal -mt-16 font-montserrat text-strok text-center'>
                  All our room types are including complementary breakfast
                </p>

       
       <div className='flex justify-center items-center mt-10 gap-36'>
       <div className='mr-4 mb-10 mt-5'>
       <h1 className='text-[#14274A] font-garamond text-[40px] font-bold leading-normal tracking-[1.2px]'>
          Luxury redefined
       </h1>
        <br />
          <p>Our rooms are designed to tranport</p>
          <p>you into an enviroment made for leisure.</p>
          <p>Take your mind off the day-to-day of home</p>
          <p>life and find a private paradise for yourself</p>
          <button className='mt-4 text-white font-bold bg-[#E0B973] w-[150px] h-[50px] rounded-md '>EXPLORE</button>
        </div>
      
      <div className='flex-shrink-0 mt-4'>
      <Image 
      src={'/home2image.png'} 
      alt='homesecondimage' 
      width={500} 
      height={400} 
      className='object-cover'
    />
    
  </div>
 </div>  

 <div className='flex justify-center items-center mt-10 gap-20'>
       <div className='mr-4 mb-10'>
       <h1 className='text-[#14274A] font-garamond text-[40px] font-bold leading-normal tracking-[1.2px]'>
       Leave your  worries in <br />the sand
       </h1>
        <br />
          <p>Our rooms are designed to tranport</p>
          <p>you into an enviroment made for leisure.</p>
          <p>Take your mind off the day-to-day of home</p>
          <p>life and find a private paradise for yourself</p>
          <button className='mt-4 text-white font-bold bg-[#E0B973] w-[150px] h-[50px] rounded-md '>EXPLORE</button>
        </div>
      
      <div className='flex-shrink-0 mt-4'>
      <Image 
      src={'/home3image.png'} 
      alt='homesecondimage' 
      width={500} 
      height={400} 
      className='object-cover'
    />
</div>
</div>    
<div className=' mb-10 p-5'>
  <h1 className='text-[#14274A] font-garamond text-4xl font-bold leading-normal text-center'>Testimonials</h1>
  <p className='text-[#14274A] font-montserrat text-2xl font-normal leading-normal text-center'>Clam,Serene,Retro-What a way to relax and enjoy</p>
  <p className='text-[#14274A] font-montserrat text-2xl font-normal leading-normal text-center'>Mr.and Mrs.Baxter,UK</p> 
</div>           
</div>
</section>
</main>
  )
}

export default HeroSection