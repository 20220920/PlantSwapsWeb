import React from 'react'
import "./Card.css"
//import {format} from "timeago.js"
import { addItem } from '../../features/cart/CartSlice';
import { useDispatch } from 'react-redux';

export default function Card({product, onDelete}) {
    const dispatch = useDispatch();
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    if (!product) {
        console.error("Product is undefined");
        return null;
      }

    const handleDelete = () => {
    onDelete(product._id);
  };
    console.log(product);


    const handleAddToCart = () => {
      dispatch(addItem(product));
  };

  return (
    <div className="card">
      <h1>{product.desc}</h1>
      <img src={PUBLIC_FOLDER+product.img} alt={product.desc} className="plantImage"  />
      <p>Price:${product.price || 'N/A'}</p>
      <span>Created at: {new Date(product.createdAt).toLocaleDateString()}</span>
      <button onClick={handleDelete} className="deleteButton">Delete</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}
