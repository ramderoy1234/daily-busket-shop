import React from 'react'
import "./scrool.css"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const scroolTop = () => {

  // code for You are in top

  const youInTopAlert = () => {
    toast.info('You are in top', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   }


  return (
    <div className="scroll-top">
    <a href='#headId' onClick={youInTopAlert}> <i className="fa-solid fa-angle-up" ></i> </a>

    <ToastContainer />

  </div>
  )
}

export default scroolTop
