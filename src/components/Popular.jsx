import React from 'react'

const Popular = () => {
  return (
    <div>
       <div className=' max-w-[80vw] mx-auto mt-5'>
       <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Popular Biopic</h1>
       <div className='grid grod-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-5'>

       <div className='border-2 border-gray-700 w-full h-[100%]   rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <button className='font-bold text-white text-[0.8rem] bg-blue-500 px-4 py-1/4 absolute left-2 top-2 rounded-[0.5rem]'>Free</button>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://m.media-amazon.com/images/M/MV5BYzIzYjFmODAtNzlhNy00YWQxLThlODYtYmEzOTkzOTFkZDE1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <button className='font-bold text-white text-[0.8rem] bg-blue-500 px-4 py-1/4 absolute left-2 top-2 rounded-[0.5rem]'>Free</button>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://m.media-amazon.com/images/M/MV5BZjJlYzI1Y2YtZGJkZi00YzRkLWFlNjQtNTViM2Q2NTY5OGQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <button className='font-bold text-white text-[0.8rem] bg-blue-500 px-4 py-1/4 absolute left-2 top-2 rounded-[0.5rem]'>Free</button>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://m.media-amazon.com/images/M/MV5BZDhjM2E0OWMtOTA0Yy00NTNhLWEwNTEtZjhkNjNmNTdiZDA2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <button className='font-bold text-white text-[0.8rem] bg-blue-500 px-4 py-1/4 absolute left-2 top-2 rounded-[0.5rem]'>Free</button>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://static.toiimg.com/photo/61271391.cms" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <button className='font-bold text-white text-[0.8rem] bg-blue-500 px-4 py-1/4 absolute left-2 top-2 rounded-[0.5rem]'>Free</button>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://m.media-amazon.com/images/M/MV5BOWQ3YTgzNjEtZTU3YS00M2VlLWJjNzAtMTBiZDI2ZGY4Y2RkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" alt="" />
        </div>


        </div>
    </div>
    </div>
  )
}

export default Popular
