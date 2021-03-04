import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import  { addToDatabaseCart } from '../../utilities/databaseManager';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(first10)
    // console.log(first10);

    // order Summery
    const [cart, setCart] = useState([]);

    const handleAddProduct = (pd) => {
        // console.log("added", pd);
        const newCart = [...cart, pd];
        setCart(newCart);
        const sameProduct = newCart.filter(product => product.key === pd.key);
        const count = sameProduct.length;
        addToDatabaseCart(pd.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product showAddToCart={true} 
                        handleAddProduct = {handleAddProduct}
                        product={product} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Shop;