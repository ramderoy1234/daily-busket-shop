import React from 'react'
import { Link } from 'react-router-dom'
import Dcard from './Dcard'

const Discount = () => {
    return (
        <>
            <section className='Discount background newarrivals'>
                <div className="container">
                <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='' />
                            <h2>Big Discount</h2>
                        </div>
                        <div className="heading-right row">
                            <Link to="/all-products">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                            </Link>
                          
                        </div>
                    </div>
                    <Dcard />
                </div>
            </section>
        </>
    )
}

export default Discount
