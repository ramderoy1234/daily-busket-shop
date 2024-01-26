import React from 'react'
import { Link } from 'react-router-dom'


const allfilter = () => {

    const menfilterData = [
        {
            filterImg: "./images/filter/allfilter/man.png",
            filterName: "Man",
            link: "/men"
        },
        {
            filterImg: "./images/filter/allfilter/woman.png",
            filterName: "Woman",
            link: "/women"

        },
        {
            filterImg: "./images/filter/allfilter/little-kid.png",
            filterName: "Kids",
            link: "/kids"

        },
    ];

    return (

        <>

            <div >
                <div className='filter'>
                    <div className="filterHeading">
                        <h4>Filter</h4>
                        
                    </div>
                    <div className='filterItem'>

                        {
                            menfilterData.map((value, index) => {
                                return (

                                     <Link to={value.link}>
                                    <div className="items"  key={index}>
                                        <img src={value.filterImg} alt="" />
                                        <p>{value.filterName}</p>
                                    </div>
                                    </Link>
                                )

                            })
                        }

                    </div>
                </div>
            </div>


        </>


    )




}

export default allfilter
