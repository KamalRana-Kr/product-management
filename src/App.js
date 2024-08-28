import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegistration from './components/User/UserRegistration';
import UserLogin from './components/User/UserLogin';
import UserProfile from './components/User/UserProfile';
import AdminLogin from './components/Admin/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/Cart/Cart';
import OrderList from './components/Order/OrderList';
import './App.css';  

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
