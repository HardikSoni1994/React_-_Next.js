import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function ProductCard() {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', borderRadius: '8px', marginTop: '20px', color: 'white' }}>
      <h2>Gaming Laptop</h2>
      <p>Price: ₹85,000</p>
      <button style={{ backgroundColor: 'cyan', border: 'none', padding: '8px', color: 'black', fontWeight: 'bold' }}>
        Add to Cart
      </button>
    </div>
  );
}

function ProductCard2() {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', borderRadius: '8px', marginTop: '20px', color: 'white' }}>
      <h2>Programming Laptop</h2>
      <p>Price: ₹65,000</p>
      <button style={{ backgroundColor: 'cyan', border: 'none', padding: '8px', color: 'black', fontWeight: 'bold' }}>
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <ProductCard />
      <ProductCard2 />
    </>
  );
}

export default App;
