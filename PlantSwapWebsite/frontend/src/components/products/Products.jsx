
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css'
import Card from '../card/Card';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { addItem, decrease} from '../../features/cart/CartSlice'; 

export default function Products() {
  const [products, setProducts] = useState([]);
  const {amount} = useSelector(state => state.cart);


  useEffect(() => {
    const fetchProducts = async () => {
        const response = await axios.get('/products/');
        console.log(response.data);
        setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/products/${productId}`); 
      setProducts(products.filter(product => product._id !== productId)); 
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

    const dispatch = useDispatch();
  
    const handleAddToCart = async(product) => {
      dispatch(addItem(product));
   
  
    };
    


  return (
    <div className="product">
      <div className="cart-icon">
      <Link to="/Cart">
              <ShoppingCart style={{textDecoration: "none", color:"black",fontSize:"40px"}}/>
              <span className="cart-count">{amount}</span>
              <h2 className="textCart">To Payment</h2>
      </Link>
      </div>
      <div className="product-list">
    {products.length > 0 ? (
      products.map((product) => (
        <Card 
        key={product.productId} 
        product={product} 
        onClick={() => handleAddToCart(product)} 
        onDelete={handleDelete} 
      />
      ))
    ) : (
      <p>No products found</p>
    )}
    </div>
  </div>
  );
  
}

