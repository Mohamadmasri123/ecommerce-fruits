import React from 'react'





const Cardnews = (props) => {
  return (
    <div className=' border  rounded-lg '>
    <img src={props.img} className='h-[300px] w-full' />
    <div className=' py-4 px-4'> 
    <h1 className='py-4 px-4 text-lg font-bold text-green-600 '>{props.date} / {props.cmnt} Comments</h1>
    <p className='py-4 px-4 text-1xl font-bold'>{props.desc}</p>
          </div>

   

</div>
  )
}

export default Cardnews