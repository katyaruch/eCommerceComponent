import './App.css';
import data from './data.js';

import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import {useState} from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }

  };
  return (
    <div className="App">
      <ProductList onAdd={onAdd} products={products} cartItems={cartItems}></ProductList>
      <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
    </div>
  );
}

export default App;
