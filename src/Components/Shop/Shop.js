import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [order,setOrder]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handler=(selectedProduct)=>{
        setOrder(selectedProduct)
    }
    return (

        <div className='container'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handler={handler}
                    ></Product>)
                }
            </div>

            <div className='order-summary'>
               <Order 
                order={order}
             
               ></Order>
            </div>

        </div>
    );
};

export default Shop;