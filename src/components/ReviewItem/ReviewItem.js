import React from 'react';
import "./ReviewItem.css";

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>{price}</p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className="product-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;