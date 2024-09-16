import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./Home.css"

export default function Home() {
  return (
    <div className="homeContainer">
     <Navbar />
     <main className="mainContent">
                <h2 className="text">The Perfect Place to Swap Plants NZ</h2>
           
               
            </main>
     <Footer />
    </div>
  )
}
