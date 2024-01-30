import React from 'react'
import Cart from './Cart'
import kiwi from "./../assets/p-kiwi.jpg"
import carrot from "./../assets/p-freshCarrot.jpg"
import mango from "./../assets/p-freshMango.jpg"
import strawberry from "./../assets/strawberry.jpg"
import Vegtable from "./../assets/Vegetable-Bag.jpg"
import almonds from "./../assets/p-almondsOrganic.jpg"
import  CrunchyCrisps from "./../assets/Crunchy Crisps.webp"

import diredMango from "./../assets/p-driedMango.jpg"
import mixedFruits from "./../assets/p-mixedFruits.jpg"
import breakfast from "./../assets/breakfast.jpg"
import bgbreakfast1 from "./../assets/bgbreakfast1.avif"
import bgbreakfast2 from "./../assets/bgbreakfast2.jpg"


const SectionFruits = () => {
  return (
<div>
    <div className='row1 container py-10 px-12'>
      <div className=' flex justify-between '>
        <div >
          <h1 className=' text-2xl font-bold'>Fruits & Vegtebles</h1>
          <p className=' py-3 text-gray-500'>Buy farm fresh fruits and vegetales online at the best price</p>
        </div>
        <div className='flex ' >
          <p className='mx-3 bg-green-700 rounded-xl h-6 text-white  px-3'>Fruits</p>
          <p className='mx-3 text-gray-500'>Vegetables</p>
          <p className='mx-3 text-gray-500'>Bread & Bakery</p>
        </div>
      </div>
    <div className=' grid  gap-3  rounded-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5    '>
      <img src={Vegtable} alt=""  className=' w-full  h-full rounded-lg'/>
      <Cart img={kiwi} name="Kiwi"  price="$15"   />
      <Cart img={carrot} name="Fresh Carrot"  price="$32" />
      <Cart img={mango} name=" Fresh  Mango"  price="$22" />
      <Cart img={strawberry} name=" Fresh Strawberry"  price="$12" />
    </div>
 
    </div>
    
    <div className=' row2 container py-10 px-12'>
      <div className=' flex justify-between '>
        <div >
          <h1 className=' text-2xl font-bold'>Breakfast & Dairy</h1>
          <p className=' py-3 text-gray-500'>Buy best quality breakfast online big-basket stop near you .</p>
        </div>
        <div className='flex ' >
          <p className='mx-3 bg-green-700 rounded-xl h-6 text-white  px-3'>Dairy</p>
          <p className='mx-3 text-gray-500'>Pizza</p>
          <p className='mx-3 text-gray-500'>Snacks</p>
        </div>
      </div>
    <div className=' grid  gap-3  rounded-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5    '>
      <img src={breakfast} alt=""  className=' w-full  h-full rounded-lg'/>
      <Cart img={almonds} name="Almonds Organic"  price="$50"   />
      <Cart img={CrunchyCrisps} name="Crunchy Crisps"  price="$30" />
      <Cart img={diredMango} name="Dired Mango"  price="$20" />
      <Cart img={mixedFruits} name="Dired Mix Fruits"  price="$10" />
    </div>
    </div>
    <div className='flex  container py-6 px-48 w-full h-full  items-center ' >
      <img src={bgbreakfast1} className=' rounded-lg  h-[300px]    '/>
      <img src={bgbreakfast2}  className='bg-gray-500  ml-32 rounded-lg h-[300px]    ' />

    </div>

    </div>

  )
}

export default SectionFruits