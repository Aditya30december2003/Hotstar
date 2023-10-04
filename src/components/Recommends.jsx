import React from 'react'

const Recommends = () => {
  return (
    <div>
      <div className=' max-w-[80vw] mx-auto mt-20'>
       <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Recommended for You</h1>
       <div className='grid grod-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-5'>
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/Lightyear.jpeg" alt="" />
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://w0.peakpx.com/wallpaper/396/955/HD-wallpaper-incredibles-2-poster-2019-movie-3d-animation-2019-incredibles-2.jpg" alt="" />
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://ntvb.tmsimg.com/assets/p17008561_v_h8_ab.jpg?w=1280&h=720" alt="" />
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://wallpapercave.com/wp/wp9328493.jpg" alt="" />
       </div>
      </div>
    </div>
  )
}

export default Recommends
