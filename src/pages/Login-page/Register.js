import React, { useState } from 'react';
import { NavLink,} from 'react-router-dom';
import './Mix.css';

function Register() {
  const [passshow, setPassshow] = useState(false);
  const [cpassshow, setCpassshow] = useState(false);

  // Validation
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  console.log(inpval);

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  

  const addUser = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = inpval;

    if (name === "") {
      alert("Please enter your name.");
    } else if (email === "") {
      alert("Please enter your email.");
    } else if (!email.includes("@")) {
      alert("Email is invalid.");
    } else if (password === "") {
      alert("Please enter a password.");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters.");
    } else if (password !== cpassword) {
      alert("Password and confirm password do not match.");
    } else {
      const data = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });

      const response = await data.json();

      console.log(response);

      if(response.status=== 201){
         alert("registration done");
         setInpval({...inpval,name:"",email:"",password:"",cpassword:""});

        
      }



    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Register here</h1>
            <p style={{ textAlign: "center" }}>
              Make Your day with Green-Giene
            </p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="name">Name</label>
              <input
                type="text" // Changed 'type' to 'text' for name input
                name="name"
                id="name"
                placeholder="Enter Your name"
                onChange={setVal}
                value={inpval.name}
              />
            </div>

            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your email address"
                onChange={setVal}
                value={inpval.email}
              />
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>

              <div className="two">
                <input
                  type={!passshow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={setVal}
                  value={inpval.password}
                />
                <div className="showpass" onClick={() => setPassshow(!passshow)}>
                  {!passshow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className="form_input">
              <label htmlFor="cpassword">Confirm Password</label>

              <div className="two">
                <input
                  type={!cpassshow ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password"
                  onChange={setVal}
                  value={inpval.cpassword}
                />
                <div className="showpass" onClick={() => setCpassshow(!cpassshow)}>
                  {!cpassshow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUser}>
              Sign Up
            </button>
          
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
