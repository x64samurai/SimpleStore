import { createSlice } from "@reduxjs/toolkit";


const nextId = (items) => {
    return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            return [
                ...state,
                {
                    id: nextId(state),
                    ...action.payload,
                    price: parseInt(action.payload.price),
                    quantity: parseInt(action.payload.quantity),
                },
            ];
        },

        addQuantity: (state, action) => {
            return state.map((product) => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: product.quantity + action.payload.quantity,
                    };
                } else {
                    return product;
                }
            });
        },

        removeQuantity: (state, action) => {
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                } else {
                    return product;
                }
            });
        }

    }
})

export const { addProduct, addQuantity, removeQuantity } = productsSlice.actions;

export default productsSlice.reducer;