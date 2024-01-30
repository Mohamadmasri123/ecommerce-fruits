import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import Iconfooter from './Iconfooter';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer  '>
        <div className='w-full  bg-green-900'>
        <div className='flex justify-between '>
            <div className='flex ml-32 py-4 text-white'>
                <div className='px-4'>
                <TfiEmail className=' w-12 h-full'/>
                </div>
                <div>
                    <h1 className='text-1xl font-bold'>Sign Up To our NewsLetters</h1>
                    <p>...and receive $20 coupon for fist shopping</p>
                </div>
            </div>      
            <div className=' border bg-white mr-60 my-5 py-1 px-3 rounded-full '>
                <div className='flex justify-between'>
                <input type="text" placeholder='Your Email Address.....' className='rounded-full'/>
                <p className=' text-white bg-green-600 rounded-full px-4 ml-12'>Subscibe!</p>
                </div>
            </div>
        </div>
        </div>
        {/* icon */}
        <div className=' bg-gray-200 '>
        <div className=' grid rounded-lg grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 '>
            <Iconfooter      icon={<TbTruckDelivery size={20} />} name="Free Shipping"   info="Best Delivery"  />
            <Iconfooter      icon={<MdOutlinePriceChange size={20} />} name="Best Price Guarantee"   info="10$ ~ 50$"  />
            <Iconfooter      icon={<FaGift size={20} />} name="Free Curbside Pickup "   info="Best Gift"  />
            <Iconfooter      icon={<MdOutlineWifiCalling3 size={20} />} name="Support "   info="24/7"  />
        </div>
        </div>        
    </div>
  )
}

export default Footer