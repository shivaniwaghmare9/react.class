import  { useState } from 'react';

const Shopping=() =>{
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 9.99 },
    { id: 3, name: "Product 3", price: 12.99 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, action) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        if (action === "increase") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <h2>Products</h2>
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div style={{ width: "30%" }}>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
              <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopping;

