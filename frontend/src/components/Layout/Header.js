import React, { useState } from 'react';
import './Header.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import HeaderTable from './HeaderTable';

function Header() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <header className="header bg-primary text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-left">
            <h1 className="display-4">React-Medicine</h1>
          </div>
          <div className="header-right">
            <div className="cart-button d-flex align-items-center">
              <i className="bi bi-cart fs-4 me-2"></i> {/* Assuming you have Bootstrap icons */}
              <button className="btn btn-light" onClick={() => console.log(cart)}>
                Cart
              </button>
            </div>
          </div>
        </div>
      </header>
      <HeaderTable addToCart={addToCart} />
    </>
  );
}

export default Header;
