import React, {  useRef, useState } from 'react';
import "./Edit.css";
import { Image } from '@mui/icons-material';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Edit({ user }) {
  console.log("User object:", user);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  
 
  
  const [file, setFile] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
        console.error("User data is not available");
        return; 
      }

    
    const updatedUserData = {
      
      userId:user._id,
    
      desc: desc.current.value,};

  
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUserData.profilePicture = fileName;

      try {
      
        await axios.post("/upload", data);
      } catch (err) {
        console.error("File upload error:", err);
      }
    }

    try {
       
        await axios.put(`/users/${user._id}`, updatedUserData);
        navigate(`/profile/${updatedUserData.username||user.username}`);
        window.location.reload();
      } catch (err) {
        console.error("User update error:", err);
      }
    };

  return (
    <div className="edit">
      <div className="editWrapper">
        <div className="editTop">
          <img
            src={user && user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"}
            className="icon"
            alt="Profile"
          />
          <input
            type="text"
            className="editInput"
            placeholder="Introductin yourself"
            ref={desc}
          />
 
        </div>
        <hr className="editHr" />
        <form className="editButtons" onSubmit={handleSubmit}>
          <div className="editOptions">
            <label className="editOption" htmlFor="profilePicture">
              <Image className="editIcon" htmlColor="blue" />
              <span className="editOptionText">Edit Picture</span>
              <input
                type="file"
                id="profilePicture"
                accept=".png, .jpeg, .jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <div>
     
     
   
    </div>
          <button className="editButton" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
