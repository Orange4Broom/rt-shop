import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Favourites from './pages/favourites/Favourites';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import Register from './pages/register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
