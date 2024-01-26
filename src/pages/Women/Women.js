import React from 'react'
import { useState } from 'react'
import Womenfilter from './womenfilter'
import WomenProductData from './womenProductData'
import WomenProducts from './WomenProducts'


const Women = ({ allproduct , addToCart }) => {


    //  This code for shorting product data array in random form

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    
    // Used like so
    var womenRandomArr = [...WomenProductData ];
    shuffle(womenRandomArr);
    
  

  // code of filter the cart products


   const[wProductData, setWProductData] = useState(womenRandomArr);

   const filterCart = (cateItem) =>{
    const updatedItems = WomenProductData.filter((curElem) => {
      return curElem.categary === cateItem;
    });
    setWProductData(updatedItems);
   }

  return (
    <div className='main-container '>
      <Womenfilter filterCart={filterCart}/>
      <WomenProducts allproduct={allproduct} addToCart={addToCart} wProductData={wProductData}/>
      
    </div>
  )
}

export default Women
