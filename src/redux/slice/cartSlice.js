import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.amount = state.amount + 1;
            const cartItem = state.cart.find(
                (cartItem) => cartItem.id === action.payload.id
            )
            cartItem
            ? (cartItem.amount = cartItem.amount + 1)
            : state.cart.push({...action.payload, amount: 1})
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id)
        },
        increase: (state, action) => {
            state.amount = state.amount + 1;
            const itemIndex = state.cart.findIndex(
                (cartItem) => (cartItem.id === action.payload.id)
            );
            state.cart[itemIndex].amount += 1;
            // let total = 0
            // total = state.cart[itemIndex].amount * state.cart.price
        },
        decrease: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (cartItem) => (cartItem.id === action.payload.id)
            );
            state.cart[itemIndex].amount > 0 && state.cart[itemIndex].amount-- && state.amount++   
        },

        clearCart: (state) => {
            state.cart = [];
            state.amount = 0;
            state.total = 0;
        }
    }
})

export default cartSlice.reducer
export const {addToCart, removeFromCart, increase, decrease, clearCart} = cartSlice.actions