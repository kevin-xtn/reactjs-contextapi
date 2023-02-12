import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './pages/Cart';
import Home from './pages/Home';
import "./App.css";
import { CartProvider } from './context/CartContext';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;