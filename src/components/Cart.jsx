import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
const Cart = ({ setCartOpen, cart, setCart, products, totalDuplicates, setTotalDuplicates }) => {
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
        .filter(([value, count]) => count > 0)
        .map(([value, count]) => ({
          value: parseInt(value),
          count,
        }));
      setDuplicates(duplicatesArray);
    };

    countDuplicates(cart);
  }, [cart]);

  const handleIncrement = (value) => {
    const newCounts = { ...counts };
    newCounts[value] = (newCounts[value] || 0) + 1;
    setCounts(newCounts);
    setTotalDuplicates(totalDuplicates + 1);
    const newDuplicates = duplicates.map((item) => ({
      value: item.value,
      count: item.value === value ? newCounts[value] : item.count,
    }));
    setDuplicates(newDuplicates);
  };

  const handleDecrement = (value) => {
    if (counts[value] > 1) {
      const newCounts = { ...counts };
      newCounts[value]--;
      setCounts(newCounts);
      setTotalDuplicates(totalDuplicates - 1);
      const newDuplicates = duplicates.map((item) => ({
        value: item.value,
        count: item.value === value ? newCounts[value] : item.count,
      }));
      setDuplicates(newDuplicates);
    } else if (counts[value] === 1) {
      const newList = cart.filter((item) => item !== value);
      setCart(newList);
      setTotalDuplicates(totalDuplicates - 1);
    }
  };

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
                    src={products[item.value - 1].thumbnail}
                    alt={products[item.value - 1].title}
                  />
                  <h2>{products[item.value - 1].title}</h2>
                  <div className="change-count">
                    <h4>Quantity: {item.count}</h4>
                    <div className="buttons">
                      <button onClick={() => handleDecrement(item.value)}>
                        -
                      </button>
                      <button onClick={() => handleIncrement(item.value)}>
                        +
                      </button>
                    </div>
                  </div>

                  <h4>${item.count * products[item.value - 1].price}</h4>
                  {/* Wartość: {item.id}, Ilość powtórzeń: {item.count} */}
                </div>
              ))}
            </ul>
          </div>
          {duplicates.length != 0 ? <button onClick={() => setCartOpen(false)}>Pay now</button> : null}
          
        </div>
      </div>
      {console.log(duplicates)}
    </div>
  );
};

export default Cart;
