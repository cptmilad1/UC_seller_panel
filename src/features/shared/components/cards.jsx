import React, { useState } from 'react'

function Cards({count, price, afterPrice}) {
    const [buy, setBuy] = useState(false)
  return (
    <div className='p-5 flex flex-col lg:flex-row gap-5 rounded-2xl shadow-[inset_0px_0px_100px_rgba(225,225,225,0.7),3px_3px_9px_rgba(0,0,0,0.4)] backdrop-blur-md hover:shadow-[4px_4px_12px_rgba(0,0,0,0.7),inset_0px_0px_100px_rgba(225,225,225,0.9)]'>
        <div>
            <img src="/img.jpg" className='w-20 h-20'/>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='text-2xl font-extrabold'>
                {count} UC
            </div>
            <div className='rounded-full flex justify-between px-5 md:px-6 lg:px-7 items-center bg-amber-500'>
                <span className='font-extrabold'>
                    {afterPrice}
                    <sub className='font-light'>af</sub> 
                </span>
                <span> : </span>
                <span className='font-bold'> قیمت</span>
            </div>
            <div className='text-sm font-mono'>
                <div><del>{price}</del> : <span className='text-[10px]'>قیمت فروشنده</span></div>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <button onClick={()=>{setBuy(true)}} className='bg-green-500 py-2 px-4 rounded-full text-md font-extrabold hover:bg-green-700'>خرید</button>
            {buy && <>
                <input type="text" placeholder='اسم اکانت' className='border border-black/30 outline-0 p-1 rounded-4xl'/>
                <input type="text" placeholder='ایدی مشتری' className='border border-black/30 outline-0 p-1 rounded-4xl'/>
                <button className='bg-orange-600 hover:bg-orange-800 font-bold py-1 rounded-full'>ارسال</button>
            </> 
            }
        </div>
    </div>
  )
}

export default Cards