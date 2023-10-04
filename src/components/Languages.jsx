import React from 'react'

const Languages = () => {
  return (
    <div>
      <div>
       <div className=' max-w-[80vw] mx-auto mt-5'>
       <h1 className='text-white text-[1.5rem] md:text-[1.2rem] font-bold text-left px-1 '>Popular Languages</h1>
       <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 py-5'>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <p className=' absolute bottom-8 text-left ml-2 '>हिंदी</p> 
          <p className=' absolute bottom-0 text-left ml-2 text-[1rem]'>Hindi</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://static.tnn.in/thumb/msid-94172975,thumbsize-1389151,width-1280,height-720,resizemode-75/94172975.jpg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
          <p className=' absolute bottom-4 text-left ml-2 '>English</p> 
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://images.hindustantimes.com/img/2021/09/02/1600x900/black_widow_movie_review_1630582676488_1630582687311.jpeg" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
        <p className=' absolute bottom-8 text-left ml-2 '>தமிழ்</p> 
        <p className=' absolute bottom-0 text-left ml-2 text-[1rem]'>Tamil</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Kamal_Haasan_Vikram_box_office_10.jpg?VersionId=euqn.gV9UwqswJ9ju.mOZbIX8JL8AEQ1" alt="" />
        </div>

        <div className='border-2 border-gray-700 w-full h-[100%]  rounded-[0.4rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 relative'>
        <div className='absolute w-full h-full  bg-black/40 font-bold text-white text-2xl'>
        <p className=' absolute bottom-8 text-left ml-2 '>తెలుగు</p> 
        <p className=' absolute bottom-0 text-left ml-2 text-[1rem]'>Telugu</p>
        </div>
        <img className='h-full rounded-[0.4rem] object-cover' src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/2/25/original/Bheemla.JPG" alt="" />
        </div>
        
       </div>
      </div>
    </div>
    </div>
  )
}

export default Languages
