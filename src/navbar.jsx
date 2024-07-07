import { Link, NavLink } from "react-router-dom";
function Navbar () {
    return (
        <nav>
            <i className="ri-menu-line menu"></i>

            <ul className="left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>

            <h1 className="logo"><Link to="/">Timbushop</Link></h1>
            
            <div className="right">
                <i className="ri-search-line"></i>
                <i className="ri-shopping-cart-2-line"></i>
                <Link to="/" className="signup">Sign up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;