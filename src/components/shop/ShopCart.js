import React, { useState } from 'react'

// Resct toast liberay import component and css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ShopCart = ({ shopItems, addToCart }) => {

        // code for Add to Cart Alert

        const addToCartSuccessAlert = () => {
            toast.success('Added to Cart', {
                position: "top-left",
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



    return (
        <>


            {
                shopItems.map((shopItems) => {

                    return (
                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                    <span className='discount'>{shopItems.discount}% Off</span>
                                    <img src={shopItems.img} alt="" />
                                    <div className="product-like">
                                        <label >0</label> <br />
                                        <i className='fa-regular fa-heart' onClick={() => increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{shopItems.name}</h3>
                
                                    <div className="price">
                                        <h4>{shopItems.price} ₹</h4>
                                        <button onClick={() => addToCart(shopItems)}>
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

export default ShopCart
