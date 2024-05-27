import Navbar from "./components/Navbar";
import TopBaner from "./components/TopBaner";
import Main from "./components/Main";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("smartphones")
  
  return (
    <div className="app">
      <main>
        <Navbar setCategory={setCategory}/>
        <TopBaner category={category}/>
        <Main categoryParam={category} />
        <Subscription />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
