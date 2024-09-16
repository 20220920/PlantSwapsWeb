import React, { useContext, useRef} from 'react'
import "./Login.css"
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const{user, isFetching, error, dispatch}= useContext(AuthContext);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    loginCall(
      {
        email:email.current.value, 
        password:password.current.value,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Plant Swaps Website</h3>
            <span className="loginDesc">The Perfect Place to Swap Plants NZ</span>
        </div>
        <div className="loginRight">
         <form className="loginBox" onSubmit={(e) => handleSubmit(e)} >
            <p className="loginMsg">Click here to Login</p>
            {error && <p className="errorMessage">{error}</p>}
            <input type="email" className="loginInput" placeholder="Email" required ref={email} />
            <input type="password" className="loginInput" placeholder="Password" required minLength="6" ref={password}/>
            <button className="loginButton">Login</button>
            <Link to="/Register" className="loginRegister">
            <button className="loginRegisterButton">Registration</button>
            </Link>
         </form>
        </div>
    </div>
</div>
  )
}
