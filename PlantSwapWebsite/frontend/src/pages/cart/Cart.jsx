import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Cart.css'
import Topbar from '../../components/topbar/Topbar'
import CartContainer from '../../components/cartcontainer/CartContainer'
import { useSelector ,useDispatch} from 'react-redux'
import { calculateTotals } from '../../features/cart/CartSlice'



export default function Cart() {
  const dispatch = useDispatch();
  const{cartItems} = useSelector((state)=> state.cart);
  useEffect(()=> {
     dispatch(calculateTotals());
  },[cartItems]);

    return (
      <div className="cartContainer">
        <Navbar />
        <main className="cartContent">
          <div className="topbar">
            <Topbar />
          </div>
           <CartContainer />
        </main>
        <Footer />
      </div>
    )
  }
  