import React from 'react'

const SelectCategory = (props) => {
  return (
    <div className='  border border-x-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg'>
        <div className="flex justify-between items-center p-6">
            <div className="spacey-4">
              <h1 className="font-medium text-xl">{props.name}</h1>
              <p>{props.count}  Porducts </p>
               
            </div> 
            <div className="  ">
                    <img src={props.img} alt=""  className='border w-28 rounded-full'/>
                </div>

        </div>
    </div>
  )
}

export default SelectCategory