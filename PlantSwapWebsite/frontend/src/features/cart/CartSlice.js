import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    cartItems:[ ],
    amount: 0, 
    total: 0, 
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart: (state)=> {
            //state.cartItems =[];
            return { cartItems:[],amount: 0, total: 0};
        },
        addItem: (state, action) => {
            const item = action.payload;
            state.cartItems.push(item);
            },
    
    
        removeItem: (state, action) => {
            const itemId=action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !==itemId);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item._id ===action.payload);
            cartItem.amount = cartItem.amount + 1;    
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item._id ===action.payload);
            cartItem.amount = cartItem.amount - 1;    
        },
        calculateTotals:(state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=> {
                amount +=item.amount;
                total+=item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    }
    },
);

console.log(cartSlice);

export const { clearCart, removeItem,increase,decrease,calculateTotals,addItem} = cartSlice.actions;
export default cartSlice.reducer;