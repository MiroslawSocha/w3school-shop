import Navbar from "./components/Navbar";
import TopBaner from "./components/TopBaner";
import Main from "./components/Main";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("smartphones")
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [totalDuplicates, setTotalDuplicates] = useState(0);
  
  
  return (
    <div className="app">
      <main>
        <Navbar setCategory={setCategory} setModal={setModal}/>
        <TopBaner category={category} totalDuplicates={totalDuplicates} setCartOpen={setCartOpen}/>
        <Main categoryParam={category} cart={cart} setCart={setCart} products={products} setProducts={setProducts} setTotalDuplicates={setTotalDuplicates} totalDuplicates={totalDuplicates}/>
        <Subscription />
        <Contact />
        <Footer />
      </main>
      {modal == true ? <Modal setModal={setModal}/> : null}
      {cartOpen == true ? <Cart cart={cart} setCart={setCart} setCartOpen={setCartOpen} products={products} totalDuplicates={totalDuplicates} setTotalDuplicates={setTotalDuplicates}/> : null}
      
    </div>
  );
}

export default App;
