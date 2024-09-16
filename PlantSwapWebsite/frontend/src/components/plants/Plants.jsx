import React, {useRef,useState} from 'react'

import { Image, PriceCheck,  } from '@mui/icons-material'
import axios from "axios";
import "./Plants.css"


export default function Plants({ user, product }) {
   // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const desc = useRef();
    const price = useRef();
    const [file, setFile] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newProduct = {
        desc: desc.current.value,
        price:price.current.value,
   
      };
  
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newProduct.img = fileName;
        try {
          await axios.post("/upload", data);
        } catch (err) {
          console.log(err);
        }
      }
  
      try {
        await axios.post("/products", newProduct);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="plant">
        <div className="plantWrapper">
          <div className="plantTop">
       
            <input type="text" className="plantInput" placeholder="What is your Plants?" ref={desc} />
          </div>
          <hr className="plantHr" />
          <form className="plantButtons" onSubmit={handleSubmit}>
            <div className="plantOptions">
              <label className="plantOption" htmlFor="file">
                <Image className="plantIcon" htmlColor="blue" />
                <span className="plantOptionText">Plants Picture</span>
                <input
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
           
              <div className="plantOption">
                <PriceCheck className="shareIcon" htmlColor="green" />
                <span className="plantOptionText">Price</span>
                <input type="text" className="plantInput" placeholder="price $" ref={price} />
              </div>
           
            </div>
            <button className="plantButton" type="submit">Send</button>
            
          </form>
        </div>
      </div>
    );
  }
  