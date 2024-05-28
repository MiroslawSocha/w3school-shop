import { useNavigate } from "react-router";
import { IoIosReturnLeft } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = ({ products, id, cart, setCart, setTotalDuplicates, totalDuplicates  }) => {
  const navigate = useNavigate();
  const index = id - 1;
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
          <button onClick={() => (setCart([...cart, products[index].id]), setTotalDuplicates(totalDuplicates + 1))}>
            Buy now
            <FaShoppingCart/>
          </button>
        </div>

    </div>
  );
};

export default ProductDetails;
