import React from 'react';

const CartItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4>Product Name : {name}</h4>
            <p>Product Quantity: {quantity}</p>
            <p><small>${price}</small> </p>
            <br/>
            <button 
            className="user-button"
            onClick={() => props.removeProducts(key)}
            >Remove</button>
        </div>
    );
};

export default CartItem;