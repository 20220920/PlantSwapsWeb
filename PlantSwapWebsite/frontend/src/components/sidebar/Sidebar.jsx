import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { Home, Person, ProductionQuantityLimits, Twitter } from '@mui/icons-material'
import { useContext } from "react";
import { AuthContext } from '../../state/AuthContext';


export default function Sidebar() {

  const { user } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" className="sidebarListItemText" style={{textDecoration: "none", color:"black"}}>Home</Link>
          </li>
          <li className="sidebarListItem">
            <ProductionQuantityLimits className="sidebarIcon" />
            <Link to="/shopping" className="sidebarListItemText"style={{textDecoration: "none", color:"black"}} >Products</Link>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            {user ? (<Link to={`/profile/${user.username}`} className="sidebarListItemText" style={{textDecoration: "none",color:"black"}}>Profile</Link>
            ) : (<Link to="/login">Login</Link>)}</li>
            <Twitter className="sidebarIcon" />
          <li className="sidebarListItem">
            <Link to="/post" className="sidebarListItemText" style={{textDecoration: "none",color:"black"}}>SNS Timeline</Link>
          </li>
        </ul>
        <hr className="sidebarHr" />
        
      </div>
    </div>
  )
}
