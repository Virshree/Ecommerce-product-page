import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <div>
        <Navbar cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}  />
        <Product setCartQuantity={setCartQuantity} />
      </div>
    </>
  );
}

export default App;
