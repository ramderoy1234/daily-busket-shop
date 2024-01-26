import React from 'react'

import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'

import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({ productItems, cartItem, addToCart, shopItems, }) => {
  return (
    <div>
      <Home cartItem={cartItem} />
      
      
      <NewArrivals />
    
      <Shop shopItems={shopItems} addToCart={addToCart} />
      
      <Wrapper />
    </div>
  )
}


export default Pages
