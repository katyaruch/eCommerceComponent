import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

export default function ProductList(props) {
    const {products, cartItems, onAdd} = props;
    return (
        <section className="panel">
            <h1 className="panel__title">To Go Menu</h1>
            <ul className="product-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} cartItems={cartItems}></Product>
                ))}
            </ul>
        </section>
    );
}