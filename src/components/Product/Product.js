import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CSS from './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - Order Soon</p>
                <button 
                    className = "user-button"
                    onClick = {() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;