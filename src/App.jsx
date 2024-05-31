import Navbar from "./components/Navbar";
import TopBaner from "./components/TopBaner";
import Main from "./components/Main";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Summary from "./components/Summary";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("smartphones")
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [totalDuplicates, setTotalDuplicates] = useState(0);
  const [summaryOpen, setSummaryOpen] = useState(false);
  
  
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
      {cartOpen == true ? <Cart cart={cart} setCartOpen={setCartOpen} products={products} setTotalDuplicates={setTotalDuplicates} setSummaryOpen={setSummaryOpen}/> : null}
      {summaryOpen == true ? <Summary setSummaryOpen={setSummaryOpen} products={products} cart={cart} setTotalDuplicates={setTotalDuplicates} setCart={setCart}/> : null}
      
    </div>
  );
}

export default App;
