import React from 'react'

const Iconfooter = (props) => {
  return (
    <div  >
               <div className='flex ml-20 py-4 '>
                <div className='px-3 border rounded-full bg-gray-300 py-3 text-green-700 mr-2 '>
                 
                        {props.icon} 
                     
                </div>
                <div>
                    <h1 className='text-1xl font-bold text-green-600'>{props.name}</h1>
                    <p>{props.info}</p>
                </div>
            </div>     
        
    </div>
  )
}

export default Iconfooter