import React from 'react'
import './Header.css';

const Head = () => {
  return (
    <>
      <section className='head' id='headId'>

        <div className="container f_flex">
          <div className="left row">

            <a href="##" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-whatsapp"></i>
              <label>+91 9182502112</label>
            </a>
          
           <a href = "mailto: Ramderoy@gmail.com" target="_blank" rel="noreferrer" >
           <i className='fa fa-envelope'></i>
              <label>Ramderoy@gmail.com</label>
           </a>

           

          </div>
          <div className="right row RText">

        
          <a href="##" target="_blank" rel="noreferrer" >
          <label> Instagram  </label>
          <i className="fa-brands fa-instagram"></i>
          </a>

              <label> Theme  </label>
              <i className="fa-solid fa-circle-half-stroke"></i>
            
            <span>₹</span>
            <label >RS</label>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
