import React from 'react'
import "./Post.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import TimeLine from '../../components/timeline/TimeLine'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Post() {
  return (
    <>
      <Navbar />
      <div className="postContainer">
      <Sidebar />
      <TimeLine />
      <Rightbar />
      </div>
      <Footer />
    </>
  )
}
