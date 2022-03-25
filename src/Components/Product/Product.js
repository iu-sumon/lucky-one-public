import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price } = props.product;
    return (

        <div className='product-cart'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p><b>Price:{price}</b></p>
            <div>
                <button onClick={() => props.handler(props.product)} className='btn-cart'>Add To Cart <i className="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>

    );
};

export default Product;