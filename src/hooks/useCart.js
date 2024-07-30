import {AppContext} from "../context";
import React from "react";

export const useCart = () => {
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const tax = totalPrice * (5 / 100);

    return {setCartItems, totalPrice, tax};
};