import React from 'react'
import bannerimg from '../../assets/bannerimg.jpg'
import { FaShoppingBag } from "react-icons/fa";

function Banner() {
  return (
    <div className='bg-gray-200 py-12 xl:px-28 px-4'>
        <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        {/* Image */}
        <div className='md:w-1/2'>
                <img src={bannerimg} alt='' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-bold mb-5'>Collections</h1>
              <p className='text-xl mb-7'>Shop many different collections from various brands</p>

              <button className="bg-black hover:bg-violet-600 px-6 py-2 text-white font-semibold rounded sm flex:items-center gap-2" > <FaShoppingBag className='inline-flex' />Shop Now</button>
            </div>
            <div >
            </div>
        </div>
      
    </div>
  )
}

export default Banner
