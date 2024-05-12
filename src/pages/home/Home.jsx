import React from 'react'
import Banner from './Banner';
import Products from './Products';
import BestSellers from './BestSellers';
import Newsletters from './NewsLetters';

function Home() {
  return (
    <div>
     <Banner />
     <Products />
     <BestSellers />
     <Newsletters />
    </div>
  )
}

export default Home
