import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  const addToCart = (product) => {
    setProducts([...products, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]));
  };

  const removeFromCart = (product) => {
    setProducts(products.filter(p => p.id !== product.id));
    localStorage.setItem('products', JSON.stringify(products.filter(p => p.id !== product.id)));
  };

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;