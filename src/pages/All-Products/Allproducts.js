import React, { useState } from 'react'
import Allfilter from './allfilter'

// Resct toast liberay import component and css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Productsdata = ({ allproduct, addToCart }) => {


    // code for Add to Cart Alert

    const addToCartSuccessAlert = () =>{
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


    //  This code for shorting product data array in random form

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

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
    var allProductRandomArray = [...allproduct];
    shuffle(allProductRandomArray);






    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }



    return (

        <div className='main-container'>
            <Allfilter />


            <div className='productContainer'>


                {
                    allProductRandomArray.map((allproduct) => {

                        return (



                            <div className="box grid3 ">
                                <div className="product mtop">
                                    <div className="img">
                                        <img src={allproduct.img} alt="" />
                                        <div className="product-like">
                                            <i className='fa-regular fa-heart' onClick={() => increment}></i>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h3>{allproduct.name}</h3>
                                        <div className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        
                                        </div>
                                        <div className="price">
                                            <h4>{allproduct.price} ₹</h4>
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


            </div>
            <ToastContainer />
        </div>

    )
}

export default Productsdata