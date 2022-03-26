import React from 'react';
import './Order.css'
const Order = (props) => {

    return (
        <div>
            <p className='purchaseTitle'>PurChase Summary</p>

            <div className='purchase-container'>
                {
                    props.cart.map(product => {
                        return (
                            <div key={product.id} className='orderCart'>
                                <img className='orderCartImg' src={product.img} alt=""/>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <button className='orderCartBtn'><i className="fa-regular fa-trash-can"></i></button>
                            </div>
                        )
                    })
                    
                  }

                <div>
                    <button onClick={props.chooseOneRandomly} className='btn-choose'>Choose One For Me</button>

                    <button onClick={props.removeOrderInfo} className='btn-remove'>Choose Again</button>
                </div>

            </div>

        </div>
    );
};

export default Order;