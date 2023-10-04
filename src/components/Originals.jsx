import React from 'react'

const Originals = () => {
  return (
    <div>
    <div className=' max-w-[80vw] mx-auto mt-5'>
     <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Originals</h1>
     <div className='grid grod-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-5'>
      <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6920E49CCAC82623C87260167A42320E9FB7B21034FE805DD27823AE2FC13347/scale?width=3840&aspectRatio=1.78&format=jpeg" alt="" />
      <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://cdn.marvel.com/content/1x/aassembled_card.jpg" alt="" />
      <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7807/877807-h" alt="" />
      <img className='border-2 border-gray-700 w-full h-[100%] object-cover rounded-[0.5rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500' src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6385/656385-h" alt="" />
     </div>
    </div>
  </div>
  )
}

export default Originals
