import { useNavigate } from "react-router";
import { IoIosReturnLeft } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const ProductDetails = ({ products, Id, cart, setCart, setTotalDuplicates, totalDuplicates  }) => {
  const navigate = useNavigate();
  const [quantityValue, setQuantityValue] = useState(1);
  const index = Id - 1;

  const setTotal = () => {
    for (let i = 0; i < quantityValue; i++) {
      cart.push(products[index].id) 
    }
    setTotalDuplicates(totalDuplicates + parseInt(quantityValue))
  }
  
  return (
    <div className="product-details">
      <img src={products[index].thumbnail} alt={products[index].title} />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"><h4>Name</h4></th>
            <th scope="col"><h4>Value</h4></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><b>Brand</b></th>
            <td>{products[index].brand}</td>
          </tr>
          <tr>
            <th scope="row"><b>Title</b></th>
            <td>{products[index].title}</td>
          </tr>
          <tr>
            <th scope="row"><b>Description</b></th>
            <td>{products[index].description}</td>
          </tr>
          <tr>
            <th scope="row"><b>Rate</b></th>
            <td>{products[index].rating}</td>
          </tr>
          <tr>
            <th scope="row"><b>Price</b></th>
            <td>${products[index].price}</td>
          </tr>
        </tbody>
      </table>
        <div className="controls">
          <button onClick={() => navigate("/")}>
            <IoIosReturnLeft />
            Return
          </button>
          <div className="buy">
            <input type="number" defaultValue={1} onChange={(e) => setQuantityValue(e.target.value)}/>
            <button onClick={setTotal}>
              Buy now
              <FaShoppingCart/>
            </button>
          </div>
        </div>

    </div>
  );
};

export default ProductDetails;
