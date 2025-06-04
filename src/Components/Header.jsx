import { Link } from "react-router-dom";

const Header = ()=>{

return(
    <div className="nav-container">
        <div className="img">

        <img src="/1.png" alt="foodLogo" className="food-logo"/>
        </div>
        <div className="nav-items">
            <ul>
            <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    </div>
)

}
export default Header;