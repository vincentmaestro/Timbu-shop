import { Link } from "react-router-dom";

function Cart() {
    return (
        <>
            <div className="cart-heading">
                <h2><i className="ri-arrow-left-line"></i> Shopping Cart</h2>
                <span>Clear cart</span>
            </div>
            <div className="cart">
                <div className="cart-items">
                    <div className="cart-item">
                        <div className="cart-item-image">
                            <img src="./1.png" alt="SHEIN: Roupas Feminas gown" />
                        </div>
                        <div className="description">
                            <div className="top">
                                <div className="left">
                                    <h3 className="product-name">SHEIN: Roupas Feminas gown</h3>
                                    <span>Blue gown</span>
                                </div>
                                <span className="price">$39.99</span>
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
                                        <i className="ri-subtract-line decrement"></i>
                                        <input type="number" value="1"/>
                                        <i className="ri-add-line increment"></i>
                                    </div>
                                </div>
                                <p className="remove">Remove</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-image">
                            <img src="./9.png" alt="SHEIN: Roupas Feminas gown" />
                        </div>
                        <div className="description">
                            <div className="top">
                                <div className="left">
                                    <h3 className="product-name">SHEIN: Roupas Feminas gown</h3>
                                    <span>Blue gown</span>
                                </div>
                                <span className="price">$39.99</span>
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
                                        <i className="ri-subtract-line decrement"></i>
                                        <input type="number" value="1"/>
                                        <i className="ri-add-line increment"></i>
                                    </div>
                                </div>
                                <p className="remove">Remove</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-image">
                            <img src="./2.png" alt="SHEIN: Roupas Feminas gown" />
                        </div>
                        <div className="description">
                            <div className="top">
                                <div className="left">
                                    <h3 className="product-name">SHEIN: Roupas Feminas gown</h3>
                                    <span>Blue gown</span>
                                </div>
                                <span className="price">$39.99</span>
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
                                        <i className="ri-subtract-line decrement"></i>
                                        <input type="number" value="1"/>
                                        <i className="ri-add-line increment"></i>
                                    </div>
                                </div>
                                <p className="remove">Remove</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary">
                        <div className="st">
                            <h4>Subtotal</h4>
                            <span>$140.45</span>
                        </div>
                        <div className="sf">
                            <h4>Shipping fee</h4>
                            <span>$30</span>
                        </div>
                        <div className="ta">
                            <h4>Total amount</h4>
                            <span>$170.45</span>
                        </div>
                    </div>
                    <Link to="checkout" className="ptc">Proceed to checkout</Link>
                    <div className="coupon-code">
                        <h3 className="cc">Coupon code</h3>
                        <input type="text" placeholder="Enter coupon code" />
                        <span className="ac">Apply coupon</span>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Cart;