import { Link, NavLink } from "react-router-dom";
function Navbar () {

    function toggleMenu() {
        if(document.querySelector('nav').querySelector('.left').classList.contains('menu-closed')) {
            document.querySelector('nav').querySelector('.left').classList.remove('menu-closed');
            document.querySelector('nav').querySelector('.left').classList.add('menu-open');
        }
        
        else if(document.querySelector('nav').querySelector('.left').classList.contains('menu-open')) {
            document.querySelector('nav').querySelector('.left').classList.remove('menu-open');
            document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
        }
    }

    function goHome(e) {
        e.target.parentElement.parentElement.childNodes.forEach(node => {
            node.firstChild.classList.remove('active-link');
        });
        document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
    }

    function styleNavLink(e) {
        e.target.parentElement.parentElement.childNodes.forEach(node => {
            node.firstChild.classList.remove('active-link');
        });
        e.target.classList.add('active-link');
        document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
    }

    return (
        <nav>
            <i className="ri-menu-line menu" onClick={() => toggleMenu()}></i>

            <ul className="left menu-closed">
                <li><Link to="/" onClick={e => goHome(e)}>Home</Link></li>
                <li><Link to="/" onClick={e => styleNavLink(e)}>About us</Link></li>
                <li><Link to="/shop" onClick={e => styleNavLink(e)}>Shop</Link></li>
                <li><Link className="signup-m">Sign up</Link></li>
            </ul>

            <h1 className="logo">Timbushop</h1>
            
            <div className="right">
                <i className="ri-search-line"></i>
                <Link to="cart"><i className="ri-shopping-cart-2-line"></i></Link>
                <Link to="/" className="signup">Sign up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;