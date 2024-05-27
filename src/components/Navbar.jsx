const Navbar = ({setCategory}) => {
  const chooseLink = (e) => {
    e.preventDefault(),
    setCategory(e.target.id)
  }

  return (
    <div className="navbar">
      <div className="logo-container">
        <h3><b>LOGO</b></h3>
      </div>
      <ul className="navigation">
        <li id="smartphones" onClick={chooseLink}>Smartphones</li>
        <li id="laptops" onClick={chooseLink}>Laptops</li>
        <li id="fragrances" onClick={chooseLink}>Fragrances</li>
        <li id="skincare" onClick={chooseLink}>Skincare</li>
        <li id="groceries" onClick={chooseLink}>Groceries</li>
        <li id="home-decoration" onClick={chooseLink}>Home decoration</li>
      </ul>
      <ul className="mini-navigation">
        <li>Contact</li>
        <li>Newsletter</li>
        <li>Subscribe</li>
      </ul>
    </div>
  )
}

export default Navbar
