import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";

const Main = ({ categoryParam, cart, setCart, setProducts, products, setTotalDuplicates, totalDuplicates }) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/965ff16c-4992-47a2-b3f6-91b86286829c")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        // console.log(data.products);
      });
    // console.log(categoryParam);
  }, [categoryParam]);

  const filterProducts = products.filter((item) =>
    item.category.includes(categoryParam)
  );
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<ProductsList products={filterProducts} setId={setId} cart={cart} setCart={setCart} setTotalDuplicates={setTotalDuplicates} totalDuplicates={totalDuplicates}/>} />
          <Route path="/:id" element={<ProductDetails products={products} id={id} cart={cart} setCart={setCart} setTotalDuplicates={setTotalDuplicates} totalDuplicates={totalDuplicates}/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
