import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price } = props.product;
    return (

        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <p className='product-price'>Price: ${price}</p>

            </div>
            <div>
                <button className='btn-cart'>Add To Cart <i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>

    );
};

export default Product;