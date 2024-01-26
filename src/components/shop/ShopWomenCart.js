import React, { useState } from 'react'

// React toast liberay import component and css


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShopWomenCart = ({ shopItems, addToCart }) => {

    // code for Add to Cart Alert

    const addToCartSuccessAlert = () =>{
      toast.warn('Something Worng! Try in All Products', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
  }

  

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

   const shopWomenData = [
    {
        id: 7,
        cover: "https://images.meesho.com/images/products/74207442/naul8_512.webp",
        name: "Women Top",
        price: "250",
        
      },
      {
        id: 8,
        cover: "https://images.meesho.com/images/products/29167475/5dddd_512.webp",
        name: "Dress",
        price: "500",
        
      },
      {
        id: 9,
        cover: "https://images.meesho.com/images/products/58929961/7hytq_512.webp",
        name: "Women Jeans",
        price: "400",
        
      },
      {
        id: 10,
        cover: "https://images.meesho.com/images/products/64194095/sklwa_512.webp",
        name: "Lahenga",
        price: "799",
        
      },
   ]



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
  var womenShopCartRandomArray = [...shopWomenData ];
  shuffle(womenShopCartRandomArray);





  return (
    <>
       {
                womenShopCartRandomArray.map((value) => {

                    return (
                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                   
                                    <img src={value.cover} alt="" />
                                    <div className="product-like">
                                    
                                        <i className='fa-regular fa-heart' onClick={() => increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{value.name}</h3>
                                    
                                    <div className="price">
                                        <h4>{value.price} ₹</h4>
                                        <button onClick={() => addToCart(shopItems)} >
                                                <span onClick={addToCartSuccessAlert} >Add to cart <i class="fa-solid fa-bag-shopping"></i> </span>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })
            }

<ToastContainer />

    </>
  )
}

export default ShopWomenCart
