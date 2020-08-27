import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i]; 
        total = total + product.price;
    }
    return (
        <div className="cart-body">
            <h3>Order Summary</h3>
            <h4>Item Ordered: {cart.length}</h4>
            <h5 className="total-price">Total Price: ${total}</h5>
        </div>
    );
};

export default Cart;