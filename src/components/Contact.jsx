import { Link } from "react-router-dom"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCcAmex, FaCreditCard, FaFacebook, FaInstagram, FaSnapchat, FaPinterest, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const about = ["About us", "We're hiring", "Support", "Find store", "Shipment", "Payment", "Gift card", "Return", "Help"]
    return (
      <div className="contact" id="contact">
        <div className="column">
          <h4>Contact</h4>
          <p>Questions? Go ahead.</p>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <input type="text" placeholder="Message"/>
          <button>Send</button>
        </div>
        <div className="column">
          <h4>About</h4>
          {about.map(item => (
            <a key={item} href="#">{item}</a>
          ))}
        </div>
        <div className="column column3">
          <h4>Store</h4>
          <p><FaMapMarkerAlt/> Company Name</p>
          <p><FaPhone style = {{transform: 'rotate(90deg)' }}/> 0044123123</p>
          <p><FaEnvelope/> ex@mail.com</p>
          <h4>We accept</h4>
          <p><FaCcAmex/> Amex</p>
          <p><FaCreditCard/> Credit Card</p>
          <br />
          <div className="icon">
            <FaFacebook/>
            <FaInstagram/>
            <FaSnapchat/>
            <FaPinterest/>
            <FaTwitter/>
            <FaLinkedin/>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact