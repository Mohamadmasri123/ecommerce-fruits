import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { GoStar } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";



const Cart = (props) => {
  return (
    <div className=' border  rounded-lg '>
        <img src={props.img} className='h-[300px] w-full' />
        <div className='flex justify-between py-4 px-4'>
            <div className='flex text-yellow-500 '>
            <TiStarFullOutline  />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <GoStar />
            </div>
            <div className=' bg-green-500 rounded-md px-2 py-2 '>
            <BiShoppingBag />
            </div>
            
        </div>

        <h1 className='py-4 px-4 text-lg font-bold '>{props.name}</h1>
        <p className='py-4 px-4 text-1xl font-bold text-red-500'>{props.price}</p>

    </div>
  )
}

export default Cart