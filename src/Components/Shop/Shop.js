import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';
import AOS from 'aos';
const Shop = () => {

    //................State for main data..............//

    const [products, setProducts] = useState([])

    //..................State for single cart.............//

    const [cart, setCart] = useState([])

    //...............useEffect for main data loading

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //..................Handler function for add to cart button......................//

    const handler = (selectedProduct) => {

        if (cart.length < 4) {
            const getCarts = ([...cart, selectedProduct])
            setCart(getCarts)

        }
        else {
            alert('Can not add more then for items!')
        }

    }

    //.................Handler function for removing selected cart.......................//

    const removeOrderInfo = () => {
        setCart([])
    }

     //.................Handler function for choose only one cart.........................//
     
    const chooseOneRandomly = () => {
        let newCart = [...cart]
        if (newCart.length) {
            let getCart = newCart[Math.floor(Math.random() * newCart.length)]
            newCart = [getCart]
            setCart(newCart)
        }
    }
    //...............................AOS Animation function................................//
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