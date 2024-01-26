import React, { useState } from 'react'
import "./cart.css"
import Paypal from '../Payment/Payment'

const Cart = ({ cartItem, addToCart, decreaseQty }) => {

  const [checkout,setcheck] = useState(false);

  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className=' cart-items'>
        <div className="cart-details">
          {cartItem.length === 0 && <h1 className='no-items product'>No Items are added in Cart</h1>}

          {cartItem.map((item) => {
            const productQty = item.price * item.qty
            return (
              <div className="cart-list">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <div className="quantaty-manager">

                    <div className='quantaty'>
                      <p>{item.price}.00 * {item.qty}</p>
                      <p>₹{productQty}.00</p>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='inCart' onClick={() => addToCart(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="removeCart">
                    <button >
                      <i className='fa-solid fa-xmark'></i>
                    </button>
                  </div>
                  
              </div>
              
            )
          })}

        </div>
        <div className="cart-total">
          <h2>Cart Summary</h2>
          <div className="total-price">
            <h4>Total Price : </h4>
            <h3>₹ {totalPrice}.00</h3>
          </div>


         checkout?(<Paypal/>)(<div><button style=
         {{height:"50px",width:"200px",fontSize:"10px"}}
         onClick={()=>{setcheck(true)}}>Pay</button></div>)

         
        </div>
      </section>
    </>
  )
}

export default Cart
