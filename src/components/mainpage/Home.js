import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import "./Home.css"


const Home = () => {
    return (
        <div>
            <section className='home'>
                <div className="container d_flex ">
                    <Categories />
                    <Slider />
                </div>
            </section>
        </div>
    )
}

export default Home
