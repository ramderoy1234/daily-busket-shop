import React, { useState } from 'react'
import MenFilter from './menFilter'
import MenProducts from './MenProducts'
import MenProductData from './menProductsData'

const Men = ({ allproduct , addToCart }) => {


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
    var finalRandomArray = [...MenProductData ];
    shuffle(finalRandomArray);
    
  

  // code of filter the cart products


  const[mProductData, setMProductData] = useState(finalRandomArray);

  const filterCart = (cateItem) =>{ 
    const updatedItems = MenProductData.filter((curElem) => {
      return curElem.categary === cateItem;
    });

    setMProductData(updatedItems);
}


  return (
    <div className='main-container '>
    
     <MenFilter filterCart={filterCart} />
     <MenProducts allproduct={allproduct} addToCart={addToCart} mProductData={mProductData} />
    </div>
  )
}

export default Men
