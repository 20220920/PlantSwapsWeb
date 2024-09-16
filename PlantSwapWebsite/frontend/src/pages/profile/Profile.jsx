import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Sidebar from "../../components/sidebar/Sidebar"
import Share from "../../components/share/Share"
import axios from "axios";
import { useParams } from "react-router-dom";


import "./Profile.css"
import { useEffect, useState } from "react";
import Edit from "../../components/edit/Edit";


export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser]=useState({});
  const username = useParams().username;
  
  useEffect(()=> {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  },[]);


  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={PUBLIC_FOLDER +"/post/3.jpeg"} alt="" className="profileCoverImg" />
            </div>
          </div>
          <div className="profileRightBottom">
            <img src={user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"
            } alt="" className="profileUserImg" />
            <div className="profileInfo">
              <h4 className="profileInfoName">User:{user.username}</h4>
              <span className="profileInfoDesc">Introduction</span>
              <span>
                {user.desc}
              </span>
              <h1>Profile</h1>
              <hr />
              <div>
              <h4>E-mail:{user.email}</h4>
              </div>
              <div>
               <Share user={user}/>
               <Edit user={user} />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Footer />
    </> 
  );
}
