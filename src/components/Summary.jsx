import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
const Summary = ({ setSummaryOpen, setTotalDuplicates, products, cart, setCart }) => {
  const [counts, setCounts] = useState({});
  const [duplicates, setDuplicates] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [end, setEnd] = useState(false);
  // const navigate = useNavigate()
  
  useEffect(() => {
    // setTotalValueArr([])
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
  const finishTransaction = () => {
    setEnd(true)
    setDuplicates([])
    setCart([])
  }
  return (
    <div className="summary">
      <div className={end ? "summary-end" : "summary-body"}>
        <div className="content">
          <ImCross onClick={() => setSummaryOpen(false)} />
          <h2>Summary</h2>
          {end == false && <div className="summary-list">
            {duplicates.map((item, index) => (
              <div className="summary-single-item" key={index}>
                <img
                  src={products[item.id - 1].thumbnail}
                  alt={products[item.id - 1].title}
                />
                <h4>{products[item.id - 1].title}</h4>
                <h4>Quantity: {item.count}</h4>

                <h4>${(item.count * products[item.id - 1].price)}</h4>
              </div>
            ))}
          </div>}
          {end == false && <div className="delivery-details">
            <div className="personal-data">
              <h3>Personal data</h3>
              <div className="name">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Last name"/>
              </div>
              <input className="address-input" type="text" placeholder="Address"/>
              <div className="address">
                <input type="number" placeholder="Zip code"/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Country"/>
              </div>
              <div className="contact-delivery">
                <input type="number" placeholder="Phone number"/>
                <input type="text" placeholder="E-mail"/>
              </div>
            </div>
            <div className="payment">
              <h3>Payment</h3>
              <div className="payment-method">
                <div onClick={() => setPaymentMethod("card")} className="option">
                  <h5 onClick={() => setPaymentMethod("card")}>Card<FaCcVisa/><FaCcMastercard/></h5>
                  <input checked={paymentMethod == "card"} onChange={() => setPaymentMethod("card")} type="radio" name="payment"/>
                </div>
                <div onClick={() => setPaymentMethod("cashOnDelivery")} className="option">
                  <h5 onClick={() => setPaymentMethod("cashOnDelivery")}>Cash on delivery <BsCashCoin/></h5>
                  <input checked={paymentMethod == "cashOnDelivery"} onChange={() => setPaymentMethod("cashOnDelivery")} type="radio" name="payment"/>
                </div>
              </div>
              {paymentMethod == "card" && <div className="card-details">
                <input type="number" placeholder="Card number"/>
                <div className="security">
                  <input type="text" placeholder="MM / YY"/>
                  <input type="number" placeholder="CVC"/>
                </div>
              </div>}
            </div>
          </div>}
          {end == false && <button onClick={finishTransaction}>Pay now</button>}
          {end && <h1>🎉🎆Thank you for shopping🎆🎉</h1>}
        </div>
      </div>
    </div>
  );
};

export default Summary;
