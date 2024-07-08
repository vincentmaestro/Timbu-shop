import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="left">
                <h1 className="logo">Timbushop</h1>
                <p>Be part of Timbushop community and stay connected with the latest fashion trends and exclusive offers. Follow us on social media and sign up for our newsletter to receive updates on new arrivals and special promotions.</p>
                <div className="social-media-icons">
                    <Link to="https://wa.me/+2349023695126" target="blank"><i className="ri-whatsapp-line"></i></Link>
                    <Link to="https://www.instagram.com/soundtrickz?igsh=cnZlOG9mMjJ1Mjk=" target="blank"><i className="ri-instagram-line"></i></Link>
                    <Link><i className="ri-facebook-circle-fill"></i></Link>
                </div>
            </div>

            <ul className="shop-with-us">
                <h3>Shop with us</h3>
                <li><Link>Casual gowns</Link></li>
                <li><Link>Mini gowns</Link></li>
                <li><Link>Copporate gowns</Link></li>
            </ul>

            <ul className="privacy-policy">
                <h3>Privacy policy</h3>
                <li><Link>Return policy</Link></li>
                <li><Link>Terms and conditions</Link></li>
                <li><Link>Warranty policies</Link></li>
            </ul>

                <ul className="contact-us">
                <h3>Contact us</h3>
                <li>+234 902 484 0960</li>
                <li>timbushop@gmail.com</li>
                <li>Lagos Island, Nigeria</li>
            </ul>
      </footer>
    );
}
 
export default Footer;