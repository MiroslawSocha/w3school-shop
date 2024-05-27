import { FaShoppingCart, FaSearch } from "react-icons/fa";

const TopBaner = ({category}) => {
  const categoryName = (category) =>{
    if (category === "home-decoration") {
      return "home decoration"
    }else{
      return category
    }

  }
    return (
      <div className="top-baner">
        <div className="header">
          <p className="title">{categoryName(category)}</p>
          <p className="icons">
            <FaShoppingCart/>
            <FaSearch/>
          </p>
        </div>
        <div className="baner-image">
          <img src="https://www.w3schools.com/w3images/jeans.jpg" alt="baner" />
          <div className="baner-description">
            <h1 className="baner-title">New arrivals</h1>
            <h1 className="baner-desc">collection 2016</h1>
            <button><a href="#list">shop now</a></button>
          </div>
        </div>
      </div>
    )
  }
  
  export default TopBaner