import React from 'react';
import './Cart.css';

export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.0975;
    const totalPrice = itemsPrice + taxPrice;
    return (
	<section className="panel cart">
        <h2 className="panel__title">Your Cart</h2>

        {cartItems.length === 0 && <p className="cart-empty">Your cart is empty.</p> }

        <ul className="cart-list">
            {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                    <div className="cart-item__left">
                        <div className="cart-item__img">
                            <img src={item.image} alt={item.name}></img>
                        </div>
                        <span className="cart-item__quantity">{item.qty}</span>
                    </div>
                    <div className="cart-item__right">
                        <p className="cart-item__name">{item.name}</p>
                        <p className="cart-item__price">${item.price}</p>
                        <div className="quantity">
                            <button onClick={() => onRemove(item)} className="quantity__btn quantity__btn-decrease">
                                <img src="images/chevron.svg" alt="Remove"></img>
                            </button>
                            <span className="quantity__val">{item.qty}</span>
                            <button onClick={() => onAdd(item)} className="quantity__btn quantity__btn-increase">
                                <img src="images/chevron.svg" alt="Add"></img>
                            </button>
                        </div>
                        <div className="cart-item__subtotal">${(item.qty*item.price).toFixed(2)}</div>
                    </div>
                </li>
            ))}
        </ul>

        {cartItems.length !== 0 && (

            <div className="cart-totals">
                <p className="cart-totals-item">
                    <span className="cart-totals-item__label">Subtotal:</span>
                    <span className="cart-totals-item__price price--subtotal">${itemsPrice.toFixed(2)}</span>
                </p>
                <p className="cart-totals-item">
                    <span className="cart-totals-item__label">Tax:</span>
                    <span className="cart-totals-item__price price--tax">${taxPrice.toFixed(2)}</span>
                </p>
                <p className="cart-totals-item">
                    <span className="cart-totals-item__label">Total:</span>
                    <span className="cart-totals-item__price price--total">${totalPrice.toFixed(2)}</span>
                </p>
            </div>

        )}
    </section>
    );
}