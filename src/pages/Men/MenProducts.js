import React, { useState } from 'react'

// Resct toast liberay import component and css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MenProducts = ({allproduct , addToCart, mProductData}) => {


     // code for Add to Cart Alert

     const addToCartSuccessAlert = () => toast.warn("Something Worng! Try in All Products");

 
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }


    return (
        <div className='productContainer'>
            {
                mProductData.map((menProduct) => {
                    const {img, name, price} = menProduct;

                    return (

                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                    
                                    <img src={img} alt="" />
                                    <div className="product-like">
                                        <i className='fa-regular fa-heart' onClick={() => increment} ></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{name}</h3>
                                 
                                    <div className="price">
                                        <h4>{price} ₹</h4>
                                        <button onClick={() => addToCart(allproduct)} >
                                                <span onClick={addToCartSuccessAlert} >Add to cart <i class="fa-solid fa-bag-shopping"></i> </span>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )

                })
            }
            <ToastContainer />

        </div>
    )
}

export default MenProducts
