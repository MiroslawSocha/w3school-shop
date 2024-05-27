import Navbar from "./components/Navbar";
import TopBaner from "./components/TopBaner";
import Main from "./components/Main";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("smartphones")
  const [modal, setModal] = useState(false)
  
  return (
    <div className="app">
      <main>
        <Navbar setCategory={setCategory} setModal={setModal}/>
        <TopBaner category={category}/>
        <Main categoryParam={category} />
        <Subscription />
        <Contact />
        <Footer />
      </main>
      {modal == true ? <Modal setModal={setModal}/> : null}
    </div>
  );
}

export default App;
