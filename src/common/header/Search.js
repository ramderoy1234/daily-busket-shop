import React from 'react'
import logo from "../../components/assets/images/logo.png"
import { Link } from 'react-router-dom'

const Search = ({ cartItem }) => {

  return (
    <>
      <section id='SearchNav' className='search'>

        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Looking for Organic' />
            <span>Search</span>
          </div>

          <div className="icon f_flex width">
            <div className="cart Search-icon">
              <Link to="/">
                <i className="fa-solid fa-magnifying-glass icon-circle" id='search-logo' ></i>
              </Link>
            </div>
            <div className="cart">
              <Link to="/">
                <i className="fa-solid fa-user icon-circle"></i>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
              </Link>
            </div>

          </div>
        </div>


        <div id='last-div'></div>
      </section>
    </>
  )
}

export default Search
