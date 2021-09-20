import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    cartQuantity: 1,
    showCart: false,
    productImg: "",
    productName: "",
    productPrice: 0,
    cartList: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        showCart:(state) => {
            state.showCart = !state.showCart;
        },
        addProduct: (state) => {
            state.quantity++;
        },
        addProductToCart: (state,action) => {
            state.cartList = [ ...state.cartList,[action.payload.productImg,action.payload.productName,action.payload.productPrice]];
            state.cartQuantity++
            console.log(state.cartList);
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;