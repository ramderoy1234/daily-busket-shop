import React from 'react'

const Catg = () => {

    const data = [
        {
            cateImg: "./images/category/levis.png",
       
        },
        {
            cateImg: "./images/category/zara.png",
         
        },
        {
            cateImg: "./images/category/tommy.png",
          
        },
        {
            cateImg: "./images/category/peter.png",
       
        },
        {
            cateImg: "./images/category/allen.png",
 
        },
        {
            cateImg: "./images/category/lee.png",
       
        },
    ]

    return (
        <>
            <div className="categeory">
                <div className="chead d_flex">
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                <div className='main-box'>
                {
                    data.map((value, index) => {
                        return (
                        
                        <div className="box d_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                               
                            </div>
                     
                            
                        )
                    })
                }
                </div>
                <div className="box2">
                    <button>View All Barands</button>
                </div>
            </div>
        </>
    )
}

export default Catg
