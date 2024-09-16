import { ShoppingCart } from '@mui/icons-material'
import React from 'react'
import './Topbar.css'
import { useSelector } from 'react-redux'



export default function Topbar() {

    const {amount}=useSelector((state)=> state.cart)
  return (
   <nav>
    <div className="nav-center">
        <h3>Shopping Cart</h3>
        <div className="nav-container">
            <ShoppingCart />
        <div className="amount-container">
            <p className="total-amount">{amount}</p>
        </div>
        </div>
    </div>
   </nav>
  )
}
