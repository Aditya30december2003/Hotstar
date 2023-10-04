import React from 'react'
import {useState} from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {LuSearch} from 'react-icons/lu'
import {GoHomeFill} from 'react-icons/go'
import {PiTelevisionSimpleBold} from 'react-icons/pi'
import {MdLocalMovies} from 'react-icons/md'
import {BiTennisBall} from 'react-icons/bi'
import {SlArrowRight} from 'react-icons/sl'
import {RxHamburgerMenu} from 'react-icons/rx'
import {PiSlideshowBold} from 'react-icons/pi'
import {LiaLanguageSolid} from 'react-icons/lia'
import {PiMaskHappyLight} from 'react-icons/pi'

const Navbar = () => {
    const [nav ,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

    // const [hover , setHover]=useState(flase)
    // const hoverNav=()=>{
    //     setHover(!hover)
    // }

  return (
    
    <div className=''>

    <div className='h-screen bg-black/20 md:w-[12%] lg:w-[8%] w-[20%] left-0 top-0 fixed hidden md:block'>
        <ul className='flex flex-col gap-8 items-center '>
            <li>
                <img src="https://ww2.freelogovectors.net/wp-content/uploads/2021/12/disneyplus-hotstar-logo-freelogovectors.net_-400x400.png?lossy=1&ssl=1&fit=400%2C400" className='w-16 mx-auto' alt="" />
                <button className='flex justify-between items-center text-center mx-auto text-yellow-300 bg-yellow-800 border-yellow-800 rounded-[1rem] py-1 px-4 text-[0.7rem] mt-5'>
                    Subscribe 
                    <SlArrowRight/>
                </button>
            </li>
            <li className='text-white flex items-center flex-row gap-3'>
                <BiUserCircle size={25} className='cursor-pointer hover:scale-150 duration-200 ease-in-out' />
                <p className='hidden '>My Space</p>
            </li>
            <li className='text-white flex items-center flex-row gap-3'>
                <LuSearch size={25} className='cursor-pointer hover:scale-150 duration-500 ease-in-out' />
                <p className='hidden '>Search</p>
            </li>
            <li className='text-white flex items-center flex-row gap-3'>
                <GoHomeFill size={25} className='cursor-pointer hover:scale-150 duration-500 ease-in-out' />
                <p className='hidden '>Home</p>
            </li>
            <li className='text-white flex items-center flex-row gap-3'>
                <PiTelevisionSimpleBold size={25} className='cursor-pointer hover:scale-150 duration-500 ease-in-out' />
                <p className='hidden '>TV</p>
            </li>
            <li className='text-white flex items-center flex-row gap-3'>
                <MdLocalMovies size={25} className='cursor-pointer hover:scale-150 duration-500 ease-in-out' />
                <p className='hidden '>Movies</p>
            </li>

            <li className='text-white flex items-center flex-row gap-3'>
                <BiTennisBall size={25} className='cursor-pointer hover:scale-150 duration-500 ease-in-out' />
                <p className='hidden '>Sports</p>
            </li>
        </ul>
    </div>

    {/* Mobile bottom bar */}
    <div className='md:hidden'>
    {/* top navbar */}
     <div className='top-0 left-0 w-full bg-[] fixed z-10'>
      <div className='flex items-center justify-between'>
        <ul className='flex items-center p-2 gap-3'>
            <li>
            <RxHamburgerMenu className={nav ? 'hidden' : 'text-white cursor-pointer'} size={20} onClick={handleNav}/>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/2560px-Disney%2B_Hotstar_logo.svg.png" className='w-28' alt="" />
            </li>
            <li>
                <button className='text-[0.5rem] font-bold text-white bg-blue-500 px-2 py-1 rounded-sm'>SUBSCRIBE</button>
            </li>
        </ul>
        <p>
            <LuSearch className='text-gray-300 cursor-pointer mr-5'/>
        </p>
      </div>
     </div>
     {/* mobie-menu */}
     <div onClick={handleNav} className={nav ? 'h-screen w-[80%] bg-gray-900 fixed left-0 top-0 duration-300 z-10' :'fixed left-[-100%]'}>
        <div className='flex items-center justify-between cursor-pointer'>
            <div className='p-3 text-white'>
               <h1 className='font-bold text-white text-sm text-left'>Log in</h1>
               <p className='text-[0.7rem] mt-2'>For a better experience</p>
            </div>
            <SlArrowRight className='mr-2 text-white cursor-pointer'/>
        </div>
        <hr />
        <h1 className='p-5 cursor-pointer font-bold text-white text-[0.8rem] text-left'>Watchlist</h1>
        <hr />
        <ul className='flex flex-col gap-6 p-5'>
            <li  className='flex items-center  gap-10'>
             <PiSlideshowBold className='text-white cursor-pointer text-sm' />
             <p className='text-white cursor-pointer text-sm'>Channels</p>
            </li>
            <li className='flex items-center gap-10'>
                <LiaLanguageSolid  className='text-white cursor-pointer text-sm'/>
                <p className='text-white cursor-pointer text-sm'>Languages</p>
            </li>
            <li className='flex items-center gap-10'>
                <PiMaskHappyLight  className='text-white cursor-pointer text-sm'/>
                <p className='text-white cursor-pointer text-sm'>Genres</p>
            </li>
        </ul>
     </div>


    {/* bottom bar */}
    <div className='fixed bottom-0 h-[6%] left-0 w-full bg-gray-900 text-white py-1 z-20'>
      <ul className='flex justify-between p-2 items-center'>
        <li className='flex flex-col items-center text-center'>
        <GoHomeFill size={17} className='cursor-pointer text-white' />
        <p className='text-[0.6rem] text-center'>Home</p>
        </li>
        <li  className='flex flex-col items-center text-center'>
        <PiTelevisionSimpleBold size={17} className='cursor-pointer text-white' />
        <p className='text-[0.6rem] text-center'>TV</p>
        </li>
        <li  className='flex flex-col items-center text-center cursor-pointer'>
            <img src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/64f94469c32e9d788a4af86200a333031c6bb835/public/images/logo.svg" className='w-16 top-0' alt="" />
        </li>
        <li  className='flex flex-col items-center text-center'>
        <MdLocalMovies size={17} className='cursor-pointer text-white' />
        <p className='text-[0.6rem] text-center'>Movies</p>
        </li>
        <li  className='flex flex-col items-center text-center'>
        <BiTennisBall size={17} className='cursor-pointer' />
        <p className='text-[0.6rem] text-center'>Sports</p>
        </li>
      </ul>
    </div>
    </div>


    </div>
  )
}

export default Navbar
