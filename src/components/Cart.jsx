import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
const Cart = ({ setCartOpen, cart, products, setTotalDuplicates, setSummaryOpen }) => {
  const [counts, setCounts] = useState({});
  const [duplicates, setDuplicates] = useState([]);

  useEffect(() => {
    const countDuplicates = (arr) => {
      const counts = {};
      let total = 0;

      arr.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
        total++;
      });
      setCounts(counts);
      setTotalDuplicates(total);

      const duplicatesArray = Object.entries(counts)
        .filter(([id, count]) => count > 0)
        .map(([id, count]) => ({
          id: parseInt(id),
          count,
        }));
      setDuplicates(duplicatesArray);
    };

    countDuplicates(cart);
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart-body">
        <div className="content">
          <ImCross onClick={() => setCartOpen(false)} />
          <h2>Cart</h2>
          <div className="cart-items">
            <ul>
              {duplicates.length == 0 ? <h2>Cart is empty</h2> : null}
              {duplicates.map((item, index) => (
                <div className="cart-single-item" key={index}>
                  <img
                    src={products[item.id - 1].thumbnail}
                    alt={products[item.id - 1].title}
                  />
                  <h2>{products[item.id - 1].title}</h2>
                  <h4>Quantity: {item.count}</h4>


                  <h4>${item.count * products[item.id - 1].price}</h4>
                  {/* Wartość: {item.id}, Ilość powtórzeń: {item.count} */}
                </div>
              ))}
            </ul>
          </div>
          {duplicates.length != 0 ? <button onClick={() => (setSummaryOpen(true),setCartOpen(false))}>Pay now</button> : null}
          
        </div>
      </div>
      {console.log(duplicates)}
    </div>
  );
};

export default Cart;
