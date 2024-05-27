import { useNavigate } from "react-router"
import { IoIosReturnLeft } from "react-icons/io";

const ProductDetails = ({products, id}) => {
  const navigate = useNavigate()
    return (
      <div>
        {products[id-1].title}

        <button onClick={() => navigate("/")}><IoIosReturnLeft/>Return</button>
      </div>
    )
  }
  
  export default ProductDetails