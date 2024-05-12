import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';

function SingleProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
     // console.log(id);
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchData();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id]);
    

      const {image, title, description, category, price, rating} = product;

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-5'>
            <a href="/" className='text-black/50'>Home</a>
            <a href="/shop" className="font-bold text-black/50">/ Shop</a>
        </div>
        <div className='mt-4 sm:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                <div>
                    <img src={image} alt="" width={200} height={200} className='w-full my-4 ' />
                </div>
                {/* product detail */}
                <div>
                    <h1 className='title'>{title}</h1>
                    <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>{description}</p>
                    
                    <span className='my-2 text-xl text-yellow-500 flex items-center gap-1 sm:my-4'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <p className='text-2xl font-semibold mt-4'>${price}</p>

                </div>

                <div className='mt-4'> 
                    <div className='text-left flex flex-col gap-2 w-full'>
                        <label className='font-semibold'>Quantity</label>
                        <input type="number" id='price' name='price' className=' border border-gray-300 p-2
                         rounded-md text-sm mt-2 font:semi-bold mb-1 
                         max-w-full w-full outline-none m-0 py-3 px-4 md:py-3 md:px-4
                         focus:border-purple-500' />
                    </div>

                    <div className='text-left flex flex-col gap-2 w-full'>
                        <label className='font-semibold'>Size</label>
                        <select id='size' name='size' className=' border border-gray-300 p-2
                         rounded-md text-sm mt-2 font:semi-bold mb-1 
                         max-w-full w-full outline-none m-0 py-3 px-4 md:py-3 md:px-4
                         focus:border-purple-500'>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>

                    <div className='w-full text-left my-4'>
                        <button className='bg-purple-500 text-white font-semibold p-4 tCircleRight/
                        rounded-md w-full mt-4 shadow-slate-600 hover:bg-purple-300 hover:text-purple-500'><span>Add to Cart</span></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
