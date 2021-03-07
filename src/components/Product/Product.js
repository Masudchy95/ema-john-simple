import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CSS from './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "product-name">
                <h4> <Link to={"/product/"+key}>{name}</Link> </h4>
                <br/>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - Order Soon</p>
                {props.showAddToCart && <button 
                    className = "user-button"
                    onClick = {() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>}
            </div>
            
        </div>
    );
};

export default Product;