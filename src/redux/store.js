import { configureStore } from "@reduxjs/toolkit";
import watchedSlice from "./slice/watchedSlice";
import cartSlice from "./slice/cartSlice"

const store = configureStore({
    reducer: {
        cart: cartSlice,
        watched: watchedSlice,
    }
})

export default store