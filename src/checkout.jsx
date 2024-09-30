import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import JSConfetti from 'js-confetti';

function Checkout() {
    const navigate = useNavigate();
    const [subTotal, setSubTotal] = useState(0);
    const [dialog, setDialog] = useState(false);
    const confetti = new JSConfetti();

    useEffect(() => {
        fetch('https://timbu-cloud-three.vercel.app/api/cart')
            .then(request => request.json())
            .then(response => setSubTotal(response.subTotal))
            .catch(() => document.querySelector('st').querySelector('span').textContent = 0);
    }, []);

    function shootConfetti() {
        let t = 0;
        const n = setInterval(() => {
            confetti.addConfetti({ confettiNumber: 2500 });
            t++;
            if(t === 3) {
                clearInterval(n);
            }
        }, 250);
    }

    function closeCheckOut() {
        fetch('https://timbu-cloud-three.vercel.app/api/cart', {
            method: 'PUT'
        })
        setDialog(false);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    return (
        <>
            <span className="checkout-heading" onClick={() => navigate(-1)}><i className="ri-arrow-left-line"></i> Checkout</span>
            <div className="checkout">
                <div className="left">
                    <h2 className="bi">BILLING INFORMATION</h2>
                    <div className="name">
                        <div className="first-name">
                            <h3>First name*</h3>
                            <input disabled={true} type="text" placeholder="Chisom" />
                        </div>
                        <div className="last-name">
                            <h3>Last name*</h3>
                            <input disabled={true} type="text" placeholder="Lewise" />
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
                        <input type="text" />
                    </div>
                    <div className="tcp">
                        <div className="tc">
                            <h3>Town/city*</h3>
                            <input disabled={true} type="text" />
                        </div>
                        <div className="p">
                            <h3>Phone*</h3>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="pc">
                        <h3>Postal Code*</h3>
                        <input type="text" />
                    </div>
                    <div className="em">
                        <h3>Email Address*</h3>
                        <input disabled={true} type="text" placeholder="chisomlewise@gmail.com" />
                    </div>
                    <div className="on">
                        <h3>Order note</h3>
                        <textarea cols="60" rows="6" placeholder="Note about your order" />
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary">
                        <div className="st">
                            <h4>Subtotal</h4>
                            <span>NGN {subTotal.toFixed(2)}</span>
                        </div>
                        <div className="sf">
                            <h4>Shipping fee</h4>
                            <span>NGN 30</span>
                        </div>
                        <div className="ta">
                            <h4>Total amount</h4>
                            <span>NGN { (30 + subTotal).toFixed(2) }</span>
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
                        <span onClick={() => {setDialog(true); shootConfetti()}}>Place order</span>
                    </div>
                </div>
                {dialog &&
                    <div className="order-completed">
                        <h2>Thank you!</h2>
                        <p className='mid'>Order being processed... <i className="ri-time-line" style={{fontSize: '1.5rem' }} /></p>
                        <p>Will be sent out shortly</p>
                        <button onClick={closeCheckOut}>Close</button>
                    </div>
                }
            </div>
        </>
    );
}
 
export default Checkout;