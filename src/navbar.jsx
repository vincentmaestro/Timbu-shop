import { Link, NavLink } from "react-router-dom";
function Navbar () {
    function styleNav({ isActive }) {
        return {
            color: isActive ? '#9E6236' : 'normal',
            fontSize: isActive ? '20px' : 'normal',
            fontWeight: isActive ? 700 : 'normal',
        }
    }

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

    function closeNav() {
        document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
    }

    return (
        <nav>
            <i className="ri-menu-line menu" onClick={() => toggleMenu()}></i>

            <ul className="left menu-closed">
                <li><NavLink to="/" style={styleNav} onClick={closeNav}>Home</NavLink></li>
                <li><Link onClick={closeNav}>About us</Link></li>
                <li><NavLink to="shop" style={styleNav} onClick={closeNav}>Shop</NavLink></li>
                <li><Link className="signup-m" onClick={closeNav}>Sign up</Link></li>
            </ul>

            <h1 className="logo">Timbushop</h1>
            
            <div className="right">
                <i className="ri-search-line"></i>
                <Link to="cart"><i className="ri-shopping-cart-2-line"></i></Link>
                <Link className="signup">Sign up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;