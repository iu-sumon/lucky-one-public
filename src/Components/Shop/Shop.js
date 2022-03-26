import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';
import AOS from 'aos';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handler = (selectedProduct) => {
        if (cart.length < 4) {
            setCart([...cart, selectedProduct])
        }
        else {
            alert('All ready added')
        }

    }
    const removeOrderInfo = () => {
        setCart([])
    }
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='parent'>

            <div>
                <h2 className='productTitle'>Latest Collection</h2>
                <div className='product-container'>

                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            handler={handler}
                        ></Product>)
                    }
                </div>
            </div>

            <div className='order-summary'>

                <Order
                    cart={cart}
                    removeOrderInfo={removeOrderInfo}
                ></Order>

            </div>

        </div>
    );
};

export default Shop;