import React, { useState, useEffect } from 'react';
import './HeaderTable.css';

const HeaderTable = () => {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddProduct = () => {
    if (medicineName && description && price && quantity) {
      const newProduct = {
        medicineName,
        description,
        price,
        quantity,
      };
      setProducts([...products, newProduct]);
      setMedicineName('');
      setDescription('');
      setPrice('');
      setQuantity('');
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products, cart]);

  return (
    <div className="container">
      <h1>Add Medicine</h1>
      <div className="row">
        <div className="col-md-6">
          <section>
            <h2>Medicine Name</h2>
            <input
              type="text"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </section>
          <section>
            <h2>Description</h2>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
          <section>
            <h2>Price</h2>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </section>
          <section>
            <h2>Quantity</h2>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </section>
          <section>
            <button className="btn btn-primary" onClick={handleAddProduct}>
              Add Product
            </button>
          </section>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Add To Cart</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.medicineName}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Cart</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.medicineName}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
