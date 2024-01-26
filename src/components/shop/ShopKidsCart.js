import React, { useState } from 'react'

// Resct toast liberay import component and css


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShopKidsCart = ({ shopItems, addToCart }) => {

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


  const shopKidData = [
    {
      id: 7,
      cover: "https://images.meesho.com/images/products/31112037/76257_512.webp",
      name: "Taddy",
      price: "500",
   
    },
    {
      id: 8,
      cover: "https://images.meesho.com/images/products/60049812/wp1n3_512.webp",
      name: "Baby Shoes",
      price: "350",
      
    },
    {
      id: 9,
      cover: "https://images.meesho.com/images/products/79021362/t4s78_512.webp",
      name: "Baby Dress",
      price: "400",
    
    },
    {
      id: 10,
      cover: "https://images.meesho.com/images/products/77543161/lcxgj_512.webp",
      name: "Baby Towel",
      price: "200",
    
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
var kidsShopCartRandomArray = [...shopKidData ];
shuffle(kidsShopCartRandomArray);

  return (
    <>
        {
                kidsShopCartRandomArray.map((value) => {

                    return (
                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                   
                                    <img src={value.cover} alt="" />
                                    <div className="product-like">
                                        <label >0</label> <br />
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

export default ShopKidsCart
