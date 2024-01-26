import React from 'react'


const menFilter = ({ filterCart }) => {



    const menfilterData = [
        
    ];

    return (

        <>

            <div >
                <div>
                   
                    <div className='filterItem'>


                        {
                            menfilterData.map((value, index) => {
                                return (


                                    <div className="items"  key={index} onClick={() => filterCart(value.filterCate)}>
                                        <img src={value.filterImg} alt="" />
                                        <p>{value.filterName}</p>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>


        </>


    )




}

export default menFilter
