import React, { useState } from "react";

const App = (props) => {
  const [medicine, setMedicine] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddProduct = () => {
    // Create a product object with the entered details
    const product = {
      medicine,
      description,
      price,
      quantityAvailable,
    };

    // Add the product to the cart
    setCart([...cart, product]);

    // Clear the input fields
    setMedicine("");
    setDescription("");
    setPrice("");
    setQuantityAvailable("");
  };

  return (
    <div>
      <header>
        <section>
          <h2>Medicine</h2>
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
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
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </section>
        <section>
          <h2>Quantity Available</h2>
          <input
            type="text"
            value={quantityAvailable}
            onChange={(e) => setQuantityAvailable(e.target.value)}
          />
        </section>
        <section>
          <h2>Cart</h2>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.medicine} - Quantity: {product.quantityAvailable}
              </li>
            ))}
          </ul>
        </section>
      </header>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default App;
