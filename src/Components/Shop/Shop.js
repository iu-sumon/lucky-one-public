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
            const getCarts = ([...cart, selectedProduct])
            setCart(getCarts)

        }
        else {
            alert('Can not add more then for items!')
        }

    }
    const removeOrderInfo = () => {
        setCart([])
    }
    const chooseOneRandomly = () => {
        let newCart = [...cart]
        if (newCart.length) {
            let getCart = newCart[Math.floor(Math.random() * newCart.length)]
            newCart = [getCart]
            setCart(newCart)
        }
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
                    chooseOneRandomly={chooseOneRandomly}
                ></Order>

            </div>

        </div>
    );
};

export default Shop;