import productReducer from "./products";
import cartReducer from "./cart";
import pageReducer from "./page";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        carts: cartReducer,
        pages: pageReducer,
        products: productReducer,
    }
})