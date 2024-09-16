import React from 'react'
import { useContext } from "react"; 
import { AuthContext } from './state/AuthContext';



export default function LogoutButton() {
    const { resetAuthState } = useContext(AuthContext); 
 
    const handleLogout = () => { 
      resetAuthState();
    }; 
    const buttonStyle = {
        border: 'none',
    };
  
  return <button onClick={handleLogout}  style={buttonStyle}>Logout</button>; 

}
