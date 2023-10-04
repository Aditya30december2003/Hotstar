import React from 'react'

const Trending = () => {
  return (
    <div>
       <div>
      <div className=' max-w-[80vw] mx-auto mt-5'>
       <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Trending</h1>
       <div className='grid grod-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-5'>
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://i0.wp.com/viciados.net/wp-content/uploads/2023/01/The-Last-Of-Us-HBO-Max-Serie-2023.webp" alt="" />
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://www.leisurebyte.com/wp-content/uploads/2023/08/the-freelancer-1--696x392.jpg" alt="" />
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg" alt="" />
        <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://igimages.gumlet.io/telugu/gallery/movies/kingofkotha2023/main.jpg?w=480&dpr=2.6" alt="" />
       </div>
      </div>
    </div>
    </div>
  )
}

export default Trending
