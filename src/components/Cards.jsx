import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ filteredItems }) {
  return (
    <div className=' p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center
      shadow-md'>
      {filteredItems.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <img src={item.image} alt="" width={50} height={50}   className='mx-50 h-40 w-40 hover:scale-105 transition-all
              duration-300'/>
            </Link>
            <div className='mt-4 px-4'>
              <h4 className='text-base font-semibold mb-2'>{item.title}</h4>

              <div className='flex justify-between'>
                <p  className='text-black/50'>{item.category}</p>
                <p className='font-semibold'>${item.price}</p>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
