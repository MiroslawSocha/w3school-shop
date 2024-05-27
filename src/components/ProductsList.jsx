import { Link } from "react-router-dom";

const ProductsList = ({ products, setId }) => {

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
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductsList;
