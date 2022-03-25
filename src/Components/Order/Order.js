import React from 'react';
import './Order.css'
const Order = (props) => {
   
    const { img, name, price } = props.order;
    
    return (
        <div>
            <p className='purchaseTitle'>PurChase Summary</p>

            <div className='purchase-container'>
                <div className='orderCart'>
                    <img className='orderCartImg' src={img} alt="" />
                    <p>{name}</p>
                    <p>{price}</p>
                    <button className='orderCartBtn'><i className="fa-regular fa-trash-can"></i></button>
                </div>

                <div>
                    <button className='btn-choose'>Choose One For Me</button>

                    <button className='btn-remove'>Choose Again</button>
                </div>

            </div>

        </div>
    );
};

export default Order;