import React from 'react'
import { Link } from 'react-router-dom'
import TopCart from './TopCart'
import "./top.css"

const TopCate = () => {
    return (
        <>
            <section className='topCat background'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i className='fa fa-border-all'></i>
                            <h2>Top Categories </h2>
                        </div>
                        <div className="heading-right row">
                        <Link to="/all-products">
                        <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </Link>
                        </div>
                    </div>

                    <TopCart />
                </div>
            </section>
        </>
    )
}

export default TopCate
