import { MoreVert } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Social.css'
import axios from "axios"

import {format} from "timeago.js"

export default function Social({post }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(post?.likes?.length || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(()=>{
        if (!post.userId) {
            console.error("post.userId is missing");
            return;
          }
      const fetchUser = async ()=> {
        try {
      const response = await axios.get(`/users/${post.userId}`);
      console.log(response);
      setUser(response.data);
    } catch (err) {
        console.error("Error fetching user data:", err);
      }
    
    };
    fetchUser();
}, [post.userId]);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
  return (
    <div className="social">
        <div className="socialWrapper">
            <div className="socialTop">
                <div className="socialTopLeft">
                <img src={user.profilePicture ? PUBLIC_FOLDER+user.profilePicture :PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="socialProfileImg"/>
                <span className="socialUsername"> {user.username}</span>
                <span className="socialDate">{format(post.createdAt)}</span>
                </div>
            <div className="socialTopRight">
                <MoreVert />
            </div>
            </div>
            <div className="socialCenter">
                <span className="socialText">{post.desc}</span>
                <img src={PUBLIC_FOLDER + post.img} alt="" className="socialImg" />
            </div>
            <div className="socialBottom">
                <div className="BottomLeft">
                    <img src="./assets/heart.png" alt="" className="likeIcon" onClick={()=>handleLike()}/>
                    <span className="socialLikeCounter">
                        {like}
                    </span>
                </div>
           
            </div>
        </div>
    </div>
  )
}
