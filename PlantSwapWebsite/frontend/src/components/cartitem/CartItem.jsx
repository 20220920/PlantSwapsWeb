import React from 'react';

import { useDispatch } from 'react-redux';
import './CartItem.css'
import { decrease, increase, removeItem } from '../../features/cart/CartSlice';
import { AddCircleOutline, RemoveCircle } from '@mui/icons-material';

export default function CartItem({ _id,img, desc, price,amount}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const dispatch = useDispatch();

    return (
        <div className="cart-item">
       

            <img src={PUBLIC_FOLDER+img} alt="" className="cart-item-img" />
            <div className="middle">

            <h4>{desc}</h4>
            </div>
            <div className="info">
            <h2>Price:${price}</h2>
            <h4>Amount:{amount}</h4>
            <button className="remove-btn" onClick={()=>dispatch(removeItem(_id))}>remove</button>
             </div>
             <div>
                <button className="amount-btn" onClick={()=>dispatch(increase(_id))}>
                    <AddCircleOutline />
                </button>
                <button className="amount-btn" onClick={()=>{
                    if(amount ===1) {
                        dispatch(removeItem(_id));
                        return;
                    }
                    dispatch(decrease(_id));
                }}
                >
                    <RemoveCircle />
                </button>
             </div>
        </div>
    );
}
