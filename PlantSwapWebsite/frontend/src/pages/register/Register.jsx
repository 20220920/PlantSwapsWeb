import React, { useRef } from 'react'
import './Register.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //confirmation password
    if(password.current.value !== passwordConfirmation.current.value){
      passwordConfirmation.current.setCustomValidity("Different Password")
    }else{
      try {
        //registerApi 
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
         //registerApi 
         await axios.post("/auth/register", user);
         navigate("/login");
         }catch (err) {
          console.log(err);
         }
    }
  };

  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Plant Swaps Website</h3>
            <span className="loginDesc">The Perfect Place to Swap Plants NZ</span>
        </div>
        <div className="loginRight">
         <form className="loginBox" onSubmit={(e)=> handleSubmit(e)}>
            <p className="loginMsg">Click here for registrants</p>
            <input type="text" className="loginInput" placeholder="User Name" required ref={username} />
            <input type="email" className="loginInput" placeholder="Email" required ref={email} />
            <input type="password" className="loginInput" placeholder="Password" required minLength="6" ref={password} />
            <input type="password" className="loginInput" placeholder="Confirm Password" required minLength="6" ref={passwordConfirmation} />
            <button className="loginButton" type="submit">Sing up</button>
            <Link to="/login">
            <button className="loginRegisterButton">Login</button>
            </Link>
         </form>
        </div>
    </div>
</div>
  )
}
