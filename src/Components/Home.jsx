import React from 'react'
import Navbar from '../Components/Navbar';
import HomeFeaturedProduct from './HomeFeaturedProduct';
import Slide from './Homeslide';
import HomeCategorie from './HomeCategories';

function Home() {
  return (
    <div>
       <Navbar />
       <Slide />
       <HomeCategorie />
      <HomeFeaturedProduct />
    </div>
  )
}

export default Home
