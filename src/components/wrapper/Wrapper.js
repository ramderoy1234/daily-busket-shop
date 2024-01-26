import React from 'react'
import "./Wrapper.css"

const Wrapper = () => {


    const data = [
        {
            cover: <i className='fa-solid fa-truck-fast'></i>,
            title: "All India Delivery",
            decs: "We offering many more discount on this sales",
        },
        {
            cover: <i className='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We offering many more discount on this sales ",
        },
        {
            cover: <i className='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We offering many more discount on this sales",
        },
        {
            cover: <i className='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "We offering many more discount on this sales",
        },
    ]


    return (
        <>
            <section className='wrapper background'>
                <div className="container grid2">
                    {
                        data.map((val, index) => {
                            return (
                                <>
                                    <div className="product wrapperDiv" key={index}>
                                        <div className="img icon-circle ">
                                            <i > {val.cover}</i>
                                        </div>
                                        <h3>{val.title}</h3>
                                        <p>{val.decs}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Wrapper
