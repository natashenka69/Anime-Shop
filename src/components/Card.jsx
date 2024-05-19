import React from 'react'

export default function Card({title, image, price, category, company}) {
  return (
    <div className='w-[170px] h-[305px] bg-white mt-12 cursor-pointer hover:opacity-90 duration-200'>
        <img src={image} className="w-[170px] h-[170px] object-cover object-top"/>
        <div className=' flex flex-row mt-2 ml-[2px]'>
          <div className='bg-red-800 w-[3px]'></div>
        <p className='text-black text-[14px] ml-1 bg-gray-100 border border-gray-200 pr-[4px]'>{category}</p>
        </div>
        <p className='text-black text-[14px] mt-1 capitalize ml-[2px]'>{title}</p>
        <p className='text-gray-500 text-[14px] capitalize ml-[2px] font-medium'>{company}</p>
        <p className='text-[22px] text-orange-600 ml-[2px] font-semibold'>${price}</p>
    </div>
  )
}
