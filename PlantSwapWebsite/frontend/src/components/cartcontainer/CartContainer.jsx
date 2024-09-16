import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartContainer.css';
import CartItem from '../cartitem/CartItem';
import { clearCart } from '../../features/cart/CartSlice';
import { Link } from 'react-router-dom';


export default function CartContainer() {
    const dispatch = useDispatch();
    const {cartItems,total} = useSelector((state) => state.cart);


  

    return (
        <section className="cart">
            <header>
                <h2>Shopping Cart</h2>
            </header>
            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem
                            key={item._id}
                            _id={item._id}
                            img={item.img}
                            desc={item.desc}
                            price={item.price}
                            amount={item.amount}
                     
                        />
                    ))
                ) : (
                    <h4 className="empty-cart">Your cart is empty</h4>
                )}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h1>
                        Total<span>${total}</span>
                    </h1>
                </div>
         
                <button
                    className="btn clear-btn"
                    onClick={() => dispatch(clearCart())}
                >
                    remove
                </button>
                <Link to="/Shopping">
                <button>Go back</button>
                </Link>
            </footer>
        </section>
    );
}
