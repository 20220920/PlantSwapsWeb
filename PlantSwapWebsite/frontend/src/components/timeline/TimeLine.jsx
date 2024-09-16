import React, { useEffect, useState } from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Social from '../social/Social'
import axios from "axios"
//import { Posts} from '../../dummyData'


export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=> {
    const response = await axios.get("/posts/posts");
    console.log(response);
    setPosts(response.data);
  };
  fetchPosts();
  },[]);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        {/*<Share />*/}
        {posts.map((post)=>(
            <Social post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}
