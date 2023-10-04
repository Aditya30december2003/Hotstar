import React from 'react'

const Sports = () => {
  return (
    <div>
       <div className=' max-w-[80vw] mx-auto mt-5'>
       <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Sports</h1>
       <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 py-5'>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <p className=' absolute bottom-0 text-left ml-2 '>Cricket</p> 
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://cricketidexch.files.wordpress.com/2023/06/cricket-online-id-1.jpg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <p className=' absolute bottom-0 text-left ml-2 '>Hockey</p> 
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://assets.telegraphindia.com/telegraph/2022/Oct/1665216715_hockey.jpg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <p className=' absolute bottom-0 text-left ml-2 '>Football</p> 
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <p className=' absolute bottom-0 text-left ml-2 '>Kabaddi</p> 
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://wallpapers.com/images/featured/kabaddi-pictures-7awdb9vk9aw87dzo.jpg" alt="" />
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default Sports
