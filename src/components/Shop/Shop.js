import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-bootstrap';
import './Shop.css'
import Course from '../Course/Course';
import Cart from '../cart/Cart';
import fakeData from '../../fakeData/productInfo';

const Shop = () => {
    const first9 = fakeData.slice(0,12);
    const [products] = useState(first9);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
         setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="course-container">
                {
                   products.map(pd => <Course
                     handleAddProduct ={handleAddProduct}
                     product ={pd}
                     ></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;