import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProductsList = ({ products, setId, cart, setCart, setTotalDuplicates, totalDuplicates }) => {
  return (
    <div className="product-list">
      <div id="list" className="count-product">
        <p>{products.length} items</p>
      </div>
      <div className="list">
        {products.map((product) => (
          <div className="single-product" key={product.id}>
            <Link to={`/${product.id}`} onClick={() => setId(product.id)}>
              <img src={product.thumbnail} alt={product.title} />
              <p>
                {product.title} <br />
                <b>${product.price}</b>
              </p>
            </Link>
            <div className="buy-now">
              <button
                onClick={() => (setCart([...cart, product.id]), setTotalDuplicates(totalDuplicates + 1))}
              >
                Buy now <FaShoppingCart />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
