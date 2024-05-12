import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home.jsx';
import SingleProduct from './pages/home/SingleProduct.jsx';
import SignupPage from './components/SignupPage.jsx';
import LoginPage from './components/LoginPage.jsx'; // Import LoginPage component
import CartPage from './pages/CartPage.jsx'; // Import CartPage component
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/signup" element={<SignupPage />} /> {/* Route to SignupPage component */}
          <Route path="/login" element={<LoginPage />} /> {/* Route to LoginPage component */}
          <Route path="/cart" element={<CartPage />} /> {/* Route to CartPage component */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
