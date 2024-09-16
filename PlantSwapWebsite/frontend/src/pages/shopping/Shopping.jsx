import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Products from "../../components/products/Products"
import './Shopping.css'
import Plants from '../../components/plants/Plants'


export default function Shopping() {

  return (
    <>
      <Navbar />
      <div className="shoppingContainer">
      <Sidebar />
      <div className="shoppingCenter">
      <Plants />
      <Products />
      </div>
      </div>
      <Footer />
    </>
  )
}