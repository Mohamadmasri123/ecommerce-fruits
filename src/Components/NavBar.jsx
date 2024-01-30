import React from 'react'


import logo from "./../assets/logo-healthy.jpg"
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className='container hidden lg:block'>
      <div className='flex justify-between items-center pt-1'>
       <img src={logo} alt="" className=' w-48' />
       <div className=' relative w-full max-w-[500px]'>
        <input type="text" placeholder='Search Products....' className='bg-[#f2f3f5] border-none outline-none px-4 py-2 rounded-xl w-full' />
        <CiSearch className=' absolute top-3 right-1' />
       </div>
       <div className=' flex'> 
           <div className='icon' >
              <CiUser className=' 'size={25} />
           </div>
           <div className='icon relative'>
              <PiShoppingCartThin  size={25} />
              <p className='absolute bg-red-600 text-white text-[14px] bottom-6 left-6 rounded-full grid place-items-center w-[20px] h-[20px]  '>3</p>
          </div> 

            </div>
              </div>
     
      </div>
   
  )
}

export default Navbar