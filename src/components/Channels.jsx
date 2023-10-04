import React from 'react'
import Marvel from '../assets/imgs/viewers-marvel.png'
import Disney from '../assets/imgs/viewers-disney.png'
import National from '../assets/imgs/viewers-national.png'
import Pixar from '../assets/imgs/viewers-pixar.png'
import Star from '../assets/imgs/viewers-starwars.png'

import MarvelVideo from '../assets/videos/marvel.mp4'
import DisneyVideo from '../assets/videos/disney.mp4'
import NationalVideo from '../assets/videos/national-geographic.mp4'
import PixarVideo from '../assets/videos/pixar.mp4'
import StarWars from '../assets/videos/star-wars.mp4'


const Channels = (props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-20 gap-6 max-w-[80vw] mx-auto'>

      <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 overflow-hidden relative'>
        <img src={Marvel} alt="" className='border-2 border-white rounded-[0.4rem] ring-inset block h-[100%] object-cover opacity-1  z-10 top-0'/>
  
      </div>

      <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 overflow-hidden relative'>
        <img src={Disney} alt="" className='border-2 border-white rounded-[0.4rem] ring-inset block h-[100%] object-cover opacity-1  z-10 top-0'/>
      </div>

      <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 overflow-hidden relative'>
        <img src={National} alt="" className='border-2 border-white rounded-[0.4rem] ring-inset block h-[100%] object-cover opacity-1  z-10 top-0'/>
      </div>
      <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 overflow-hidden relative'>
        <img src={Pixar} alt="" className='border-2 border-white rounded-[0.4rem] ring-inset block h-[100%] object-cover opacity-1  z-10 top-0'/>
      </div>
      <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer hover:scale-110 duration-500 overflow-hidden relative'>
        <img src={Star} alt="" className='border-2 border-white rounded-[0.4rem]  h-[100%] object-cover opacity-1  z-10 top-0'/>
      </div>
    </div>
  )
}



export default Channels