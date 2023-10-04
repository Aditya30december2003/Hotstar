import React from 'react'
import sliderScale from '../assets/imgs/slider-scale.jpg'
import homeBackground from '../assets/imgs/home-background.png'
const Hero = () => {
  return (
    <div className=''>
      <div className=' max-w-[83vw] mx-auto md:mt-10 mt-20  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>
      <div className='absolute top-0 left-0 bg-black'></div>
       <img className='absolute w-[10rem] md:w-[20rem] mx-10 my-16' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86f59bed-a212-4942-a2f2-a49f76c1cede/def5btw-121dc3fc-e616-44ee-80ef-1cfcb1029032.png/v1/fill/w_1000,h_563/wandavision__title__by_gumballfan333_def5btw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvODZmNTliZWQtYTIxMi00OTQyLWEyZjItYTQ5Zjc2YzFjZWRlXC9kZWY1YnR3LTEyMWRjM2ZjLWU2MTYtNDRlZS04MGVmLTFjZmNiMTAyOTAzMi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eS6vGs4i_oegK7XREa3E3FCfhIQ5QzUEJQmZMibXokI" alt="" />
       <button className='hidden md:absolute bg-white px-12 py-1 left-52 top-56 '>Play</button>
       <img src={sliderScale} alt="" className='rounded-[0.7rem] w-full md:h-[30vh] lg:h-[60vh] h-[20vh] object-cover shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'/>
      </div>
    </div>
  )
}

export default Hero