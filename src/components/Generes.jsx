import React from 'react'

const Generes = () => {
  return (
    <div>
      <div>
       <div className=' max-w-[80vw] mx-auto mt-5'>
       <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Popular Generes</h1>
       <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 py-5'>

        <div className='border-2 border-pink-500/20 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-pink-500/20 font-bold text-white text-2xl'>
          <p className=' absolute bottom-4 text-left ml-2 '>Romance</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://hips.hearstapps.com/hmg-prod/images/magic-mike-main-1672861727.png" alt="" />
        </div>

        <div className='border-2 border-pink-500/20 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-green-500/30 font-bold text-white text-2xl'>
          <p className=' absolute bottom-4 text-left ml-2 '>Drama</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/entertainmentbollywood/IndiaTv67b391_drishyam.jpg" alt="" />
        </div>

        <div className='border-2 border-pink-500/20 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-yellow-500/30 font-bold text-white text-2xl'>
          <p className=' absolute bottom-4 text-left ml-2 '>Family</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://d30ny7ijak9wq4.cloudfront.net/s3fs-public/images/story/2013/08/16/Best-of-Luck-Nikki-on-Disney-Channel---2.JPG" alt="" />
        </div>

        <div className='border-2 border-pink-500/20 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-blue-500/30 font-bold text-white text-2xl'>
          <p className=' absolute bottom-4 text-left ml-2 '>Comedy</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://media.newyorker.com/photos/5ced542b3f43b6598b649936/master/w_2560%2Cc_limit/Hogan-ModernFamily.jpg" alt="" />
        </div>
        
       </div>
      </div>
    </div>
    </div>
  )
}

export default Generes
