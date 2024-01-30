import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";

import dried from "./../assets/dried.jpg"
import pizza from "./../assets/pizza.jpg"
import chips from "./../assets/chips.jpg"

const Main = () => {
  return ( 
    <div className='container  py-20 px-24 '>
        <div className=' grid  xl:grid-rows-2  gap-8 xl:grid-cols-3' >

          <div className='  relative xl:col-span-2  xl:row-start-1   xl:row-end-[-1]  '>  
           <img src={dried} className=' w-full h-full object-cover rounded-lg '  />
            <div className=' absolute max-w-[470px] ml-8 top-[50%] sm:ml-16 -translate-y-[50%] sm:space-y-4  xl:ml-24'>
              <p className=' sm:py-0 hidden sm:block text-2xl'> 100% Original Dry Fruits</p>
              <h1 className='py-2  sm:py-0 text-2xl sm:text-4xl  md:text-5xl font-bold'>Dried Fruits Best Healthy</h1>
              <p className=' py-2  sm:py-0 text-2xl text-gray-500'>Starting AT</p>
              <p className=' py-2 sm:py-0  text-3xl text-red-600 font-medium'>$18.36</p>
              <div className=' bg-green-800 hover:bg-green-500 flex gap-4 text-white rounded-full w-fit px-4 py-3 text-[14px]'>
                  Shop Now  <CgArrowLongRight  className=' mt-1' size={15}/>
              </div>
            </div>
          </div>
           <div className='relative'>  
            <img src={pizza}  className=' w-full h-full object-cover rounded-lg' />
            <div className=' absolute max-w-[470px] sm:ml-12 ml-8 top-[50%]  -translate-y-[50%] sm:space-y-2  '>
              <h2 className=' text-2xl sm:text-3xl   font-bold'>Best Yummy Pizza</h2>
              <p className='pt-4 text-xl text-gray-500'>Starting AT</p>
              <div className=' font-medium text-red-600 text-2xl sm:text-4xl pb-8'>
                15$
              </div>
              <div className=' bg-green-800 hover:bg-green-500 flex gap-4 text-white rounded-full w-fit px-4 py-1 text-[14px]'>
                  Shop Now  <CgArrowLongRight  className=' mt-1' size={15}/>
              </div>
             
            </div>
           </div>
           <div className='relative'>  
            <img src={chips}  className=' w-full h-full object-cover rounded-lg' />
            <div className=' absolute max-w-[470px] sm:ml-12 ml-8 top-[50%]  -translate-y-[50%] sm:space-y-2  '>
              <h2 className=' text-2xl sm:text-3xl   font-bold'>Best Yummy Chips</h2>
              <p className='pt-4 text-xl text-gray-300'>Starting AT</p>
              <div className=' font-medium text-red-600 text-2xl sm:text-4xl pb-8'>
                10$
              </div>
              <div className=' bg-green-800 hover:bg-green-500 flex gap-4 text-white rounded-full w-fit px-4 py-1 text-[14px]'>
                  Shop Now  <CgArrowLongRight  className=' mt-1' size={15}/>
              </div>
             
            </div>
           </div>
        
        </div>

    </div>
  )
}

export default Main