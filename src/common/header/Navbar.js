import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Navbar = () => {

   // code for Add to Cart Alert

   const tryFilterNotifier = () => {
    toast.info('Use Filter to Find', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   }

  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header className='header'>
        <div className="container">
         
          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitialize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/"  > Home</Link>
              </li>
              <li>
                <Link to="/" > <img src="" alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/fashion" onClick={tryFilterNotifier}> fashion </Link>
              </li>
              <li>
                <Link to="/fashion" onClick={tryFilterNotifier}> <img src="" alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/organic_productes" onClick={tryFilterNotifier} >Organic Products </Link>
              </li>
              <li>
                <Link to="/organic_productes" onClick={tryFilterNotifier}> <img src="" alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/all-products">All Products</Link>
              </li>

              <li>
                <Link to="/all-products"> <img src=" " alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/contact"> Contact Us</Link>
              </li>
              <li>
                <Link to="/contact"> <img src="" alt="homelogo" /></Link>
              </li>

              <li>
                <Link to="/register" onClick={tryFilterNotifier}>Register</Link>
              </li>

            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu ? < i className='fas fa-times close home-bth'></i> : <i className="fa-solid fa-bars open"></i>
              }
            </button>
          </div>
        </div>

      </header>
      <ToastContainer />

    </>
  )
}

export default Navbar

