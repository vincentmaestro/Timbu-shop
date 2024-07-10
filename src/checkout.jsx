import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <>
            <h2 className="checkout-heading"><i className="ri-arrow-left-line"></i> Checkout</h2>
            <div className="checkout">
                <div className="left">
                    <h2 className="bi">BILLING INFORMATION</h2>
                    <div className="name">
                        <div className="first-name">
                            <h3>First name*</h3>
                            <input disabled="true" type="text" placeholder="Chisom" />
                        </div>
                        <div className="last-name">
                            <h3>Last name*</h3>
                            <input disabled="true" type="text" placeholder="Lewise" />
                        </div>
                    </div>
                    <div className="cor">
                        <h3>Country of residence*</h3>
                        <select>
                            <option value="nigeria">Nigeria</option>
                        </select>
                    </div>
                    <div className="sa">
                        <h3>Street Address</h3>
                        <input disabled="true" type="text" />
                    </div>
                    <div className="tcp">
                        <div className="tc">
                            <h3>Town/city*</h3>
                            <input disabled="true" type="text" />
                        </div>
                        <div className="p">
                            <h3>Phone*</h3>
                            <input disabled="true" type="text" />
                        </div>
                    </div>
                    <div className="pc">
                        <h3>Postal Code*</h3>
                        <input disabled="true" type="text" />
                    </div>
                    <div className="em">
                        <h3>Email Address*</h3>
                        <input disabled="true" type="text" placeholder="chisomlewise@gmail.com" />
                    </div>
                    <div className="on">
                        <h3>Order note</h3>
                        <textarea disabled="true" cols="60" rows="6" placeholder="Note about your order" />
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
                    <div className="payment-method">
                        <h3>Payment method</h3>
                        <ul>
                            <li className='dbt'>Direct Bank Transfer</li>
                        </ul>
                        <small>Make your payment directly into our bank account. Please use your order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</small>
                        <p className='cpmt'>Cheque payment</p>
                        <p className='ppl'>Paypal</p>
                    </div>
                    <div className="tcs">
                        <small>I have read and accept the terms and conditions</small>
                        <span>Place order</span>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Checkout;