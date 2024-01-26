import React from 'react'
import { Link } from 'react-router-dom'
import Catg from './Catg'
import ShopCart from './ShopCart'
import ShopWomenCart from './ShopWomenCart'
import ShopKidsCart from './ShopKidsCart'
import "./Shop.css"

const Shop = ({ shopItems, addToCart, }) => {
    return (
        <>
            <section className='shop background'>
                <div className="container ">
                    <Catg />

                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h3>Mens</h3>
                            </div>
                            <div className="heading-right row">
                                
                            <Link to="/men">View all</Link>

                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>

                        <div className="product-content">
                            <ShopCart  shopItems={shopItems} addToCart={addToCart}/>
                        </div>
                    </div>

                    {/* 2 */}

                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h3>Women</h3>
                            </div>
                            <div className="heading-right row">
                                
                            <Link to="/women">View all</Link>

                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>

                        <div className="product-content">
                        <ShopWomenCart shopItems={shopItems} addToCart={addToCart}/>

                        </div>
                    </div>

                    {/* 3 */}

                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h3>Kids</h3>
                            </div>
                            <div className="heading-right row">
                                
                            <Link to="/kids">View all</Link>

                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>

                        <div className="product-content">
                            <ShopKidsCart shopItems={shopItems} addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop
