import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems : [],
    totalAmount:0
};

export const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addToCart :(state,action)=>{
            const items = state.cartItems.find( i => i.id === action.payload.id);
            if(items){
                items.quantity +=1;
            }
            else{
                state.cartItems.push({...action.payload , quantity:1});
            }
            CartSlice.caseReducers.calculateTotal(state);
        },

        removeFromCart:(state,action) => {
            state.cartItems = state.cartItems.filter(i  => i.id !== action.payload);
            CartSlice.caseReducers.calculateTotal(state);
        },

        increaseQuantity : (state,action)=>{
            const item = state.cartItems.find(i => i.id ===action.payload);
            if(item) item.quantity +=1;
            CartSlice.caseReducers.calculateTotal(state);
        },

        // decreaseQuantity : (state,action)=>{
        //     const item = state.cartItems.find(i=>i.id===action.payload);
        //     if(item && item.quantity>0)item.quantity-=1;
        //     CartSlice.caseReducers.calculateTotal(state);
        // },

        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                item.quantity -= 1;
                } else {
                // If quantity is 1 and user decreases, remove it completely
                state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
                }
            }
            CartSlice.caseReducers.calculateTotal(state);
        },

        clearCart :(state)=>{
            state.cartItems =[];
            state.totalAmount =0;
        },

        calculateTotal: (state) =>{
            state.totalAmount = state.cartItems.reduce( 
                (total,item) =>total+item.price * item.quantity, 0
            );
        },
    },
});


export const { 
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart } = CartSlice.actions;

  export default CartSlice.reducer;