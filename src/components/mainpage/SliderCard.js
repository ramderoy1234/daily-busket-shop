import React from 'react'
import Sdata from './Sdate'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const SliderCard = () => {
    return (
        <>
            <Slider >
            
                {Sdata.map((value, index) => {

                    return (
                        <div>
                         <div className="box sliderCard" key={index}>
                             <div className="left">
                                 <h1>{value.title}</h1>
                                 <p>{value.desc}</p>
                                 <button className='btn-primary'><Link to="/all-products">Check out</Link>
                                 </button>
                             </div>
                             <div className="right">
                                 <img src={value.cover} alt="" />
                             </div>
                         </div>

                        </div>
                    )
                })}

            </Slider>
        </>
    )
}

export default SliderCard
