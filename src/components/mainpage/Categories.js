import React from 'react'


const Categories = () => {
   const data = [
    {
        cateImg: "./images/category/cat1.png",
        cateName: "Fashion",
      },
      {
        cateImg: "./images/category/cat4.png",
        cateName: "Home",
      },
      {
        cateImg: "./images/category/cat6.png",
        cateName: "Music",
      },
      {
        cateImg: "./images/category/cat7.png",
        cateName: "Beauty",
      },
      
      {
        cateImg: "./images/category/cat10.png",
        cateName: "Groceries",
      },
      {
        cateImg: "./images/category/cat11.png",
        cateName: "Books",
      },
   ]

  return (
    <>
    <div className="category">
        {
            data.map((value, index) => {
                return(
                    <div className="childOfCategory f_flex" key={index}>
                       <img src={value.cateImg} alt="" />
                       <span>{value.cateName}</span>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Categories
