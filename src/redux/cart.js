import { createSlice } from "@reduxjs/toolkit";

const findProductInCart = (state, action) => {
    return state.find((p) => p.productId === action.payload.id);
};

const nextId = (state) => {
    return state.reduce((id, state) => Math.max(id, state.id), -1) + 1;
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = findProductInCart(state, action);
            if (product) {
                return state.map((p) => {
                    if (p.productId === product.productId) {
                        return {
                            ...p,
                            quantity: p.quantity + 1,
                        };
                    } else {
                        return p;
                    }
                });
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        id: nextId(state),
                        quantity: 1,
                        productId: action.payload.id,
                    },
                ];
            }
        },

        removeFromCart: (state, action) => {
            return state.filter((p) => p.id !== action.payload);
        },

        increaseQuantity: (state, action) => {
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                } else {
                    return product;
                }
            });
        },

        decreaseQuantity: (state, action) => {
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

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;