import React from 'react'

function NewsLetters() {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-18 mt-10'>
        {/* NewsLetters */}
      <div>
         <h2 className='title mb-8 mt-20'></h2>
         <form className='md:w-1/2 mx-auto text-center'>
            <input type='email' name='email' id='email' placeholder='Email Address....' 
            className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md-w-2/3 w-full mb-5
            placeholder:text-black/50 mr-4' />
            <input type='submit' value={'Subscribe'} className='bg-black text-white px-6 py-1 rounded-md cursor-pointer hover:bg-violet-700' />
         </form>
      </div>

    </div>
  )
}

export default NewsLetters
