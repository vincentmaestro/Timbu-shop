import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    async function getCartItems() {
        try {
            const request = await fetch('https://timbu-cloud-three.vercel.app/api/cart');
            const response = await request.json();
            setCart(response);
        }
        catch(err) {
            document.querySelector('.cart-empty').textContent = err.message;
        }
    }

    useEffect(() => {
        getCartItems();
    }, [cart]);

    async function removeFromCart(e) {
        const item = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.childNodes).indexOf(e.target.parentElement.parentElement.parentElement);
        await fetch(`https://timbu-cloud-three.vercel.app/api/cart/${item}`, {
            method: 'DELETE'
        });
        getCartItems();
    }

    async function ClearCart() {
        await fetch('https://timbu-cloud-three.vercel.app/api/cart', {
            method: 'PUT'
        });
        getCartItems();
    }

    return (
        <>
            <div className="cart-heading">
                <h3 style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}><i className="ri-arrow-left-line"></i> Shopping Cart</h3>
                <span onClick={ClearCart}>Clear cart</span>
            </div>
            {cart.items && cart.items.length ?
                <div className="cart">
                    <div className="cart-items">
                        {
                            cart.items.map((item, position) => (
                                <div className="cart-item" key={position}>
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="description">
                                        <div className="top">
                                            <div className="left">
                                                <h3 className="product-name">{item.name}</h3>
                                                <span>{item.design}</span>
                                            </div>
                                            <span className="price">N {item.unitPrice}</span>
                                        </div>
                                        <div className="middle">
                                            <span className="size-tag">Size: </span>
                                            <ul className="sizes">
                                                <li className="s">S</li>
                                                <li className="m">M</li>
                                                <li className="l">L</li>
                                                <li className="xl">XL</li>
                                            </ul>
                                        </div>
                                        <div className="bottom">
                                            <div className="qty">
                                                <p>Quantity: </p>
                                                <div className="amount">
                                                    <input type="number" value={item.quantity} disabled={true} />
                                                </div>
                                            </div>
                                            <button className="remove" onClick={removeFromCart}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary">
                            <div className="st">
                                <h4>Subtotal</h4>
                                <span>NGN { cart.subTotal.toFixed(2) }</span>
                            </div>
                            <div className="sf">
                                <h4>Shipping fee</h4>
                                <span>NGN 30</span>
                            </div>
                            <div className="ta">
                                <h4>Total amount</h4>
                                <span>NGN { (cart.subTotal + 30).toFixed(2) }</span>
                            </div>
                        </div>
                        <Link to="/checkout" className="ptc">Proceed to checkout</Link>
                        <div className="coupon-code">
                            <h3 className="cc">Coupon code</h3>
                            <input type="text" placeholder="Enter coupon code" />
                            <span className="ac">Apply coupon</span>
                        </div>
                    </div>
                </div>
                : <h1 className="cart-empty">Nothing here for now</h1>
            }
        </>
    );
}
 
export default Cart;