import { Link, NavLink } from "react-router-dom";
function Navbar () {

    function goHome(e) {
        e.target.parentElement.parentElement.childNodes.forEach(node => {
            node.firstChild.classList.remove('active-link');
        });
    }

    function styleNavLink(e) {
        e.target.parentElement.parentElement.childNodes.forEach(node => {
            node.firstChild.classList.remove('active-link');
        });
        e.target.classList.add('active-link');
    }

    return (
        <nav>
            <i className="ri-menu-line menu"></i>

            <ul className="left">
                <li><Link to="/" onClick={e => goHome(e)}>Home</Link></li>
                <li><Link to="/" onClick={e => styleNavLink(e)}>About us</Link></li>
                <li><Link to="/shop" onClick={e => styleNavLink(e)}>Shop</Link></li>
            </ul>

            <h1 className="logo">Timbushop</h1>
            
            <div className="right">
                <i className="ri-search-line"></i>
                <i className="ri-shopping-cart-2-line"></i>
                <Link to="/" className="signup">Sign up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;