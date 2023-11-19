import React from 'react';
import './Product.css';

export default function Product(props) {
    const {product, cartItems, onAdd} = props;
    const exist = cartItems.find(x => x.id === product.id);

    return (
        <li className="product">
            <div className="product__img">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="product__info">
                <p className="product__name">{product.name}</p>
                <p className="product__price">${product.price}</p>
                <button 
                    onClick={() => {
                        onAdd(product);
                    }} 
                    className={`button ${exist ? "button--in-cart" : "button--add-cart"}`}
                    >
                        {exist && <img src="images/check.svg" alt=''></img>}
                        {exist ? 'In Cart' : 'Add to Cart'}
                </button>
            </div>
        </li>
    )
}
