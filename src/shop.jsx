import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiKey = '10b65569a3ad47d39af619d1ac5ba22d20240713194837290303';
const appID = 'XIPQ1HG0E1Y6FTH';
const orgID = '26e222830a814f56b09ab4f854f8e86a';

function Shop() {
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        fetch(`https://timbu-get-all-products.reavdev.workers.dev?organization_id=${orgID}&reverse_sort=false&page=1&size=10&Appid=${appID}&Apikey=${apiKey}`)
            .then(response => response.json())
            .then(products => setProducts(products.items))
            .catch(err => console.error(err.message));
    }, []);

    return (
        <>
            <h1 className="shop-heading">Shop with us here</h1>
            <ul className="shop-sections">
                <li className="shop-links"><Link>All Brands</Link></li>
                <li className="shop-links"><Link>New Arrivals</Link></li>
                <li className="shop-links"><Link>Offer Deals</Link></li>
            </ul>
            <div className="shop">
                {
                    products && 
                        products.map((product, position) => (
                            <Link to={`/product/${product.id}`} className="card" key={position}>
                                <div className="card-image">
                                    <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} />
                                </div>
                                <h3 className="product-name">{product.name}</h3>
                                <ul className="sizes">
                                    <li className="s">S</li>
                                    <li className="m">M</li>
                                    <li className="l">L</li>
                                    <li className="xl">XL</li>
                                </ul>
                                <p className="price">NGN {product.current_price[0].NGN[0]}</p>
                                <div className="amount-and-add">
                                    <div className="amount">
                                        <i className="ri-subtract-line decrement"></i>
                                        <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                                        <i className="ri-add-line increment"></i>
                                    </div>
                                    <p className="btn">Add to cart</p>
                                </div>
                            </Link>
                        ))
                }
                {/* <div className="card">
                    <div className="card-image">
                        <img src="./1.png" alt="SHEIN: Roupas Feminas gown" />
                    </div>
                    <h3 className="product-name">SHEIN: Roupas Feminas gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$39.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./2.png" alt="SAFEIRODO: Long sleeve gown" />
                    </div>
                    <h3 className="product-name">SAFEIRODO: Long sleeve gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./3.png" alt="FISDY: Stylish long sleeve dress with flounced Hem" />
                    </div>
                    <h3 className="product-name">FISDY: Stylish long sleeve dress with flounced Hem</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$70.00</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./4.png" alt="Sweet Elegance Solid Fold Square Collar A line grown" />
                    </div>
                    <h3 className="product-name">Sweet Elegance Solid Fold Square Collar A line grown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$99.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./5.png" alt="Surplice Neck Tie Waist Long Sleeve Dress" />
                    </div>
                    <h3 className="product-name">Surplice Neck Tie Waist Long Sleeve Dress</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$85.00</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./6.png" alt="Rushed V Neck Bodycon Mini Dress" />
                    </div>
                    <h3 className="product-name">Rushed V Neck Bodycon Mini Dress</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$99.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./7.png" alt="SHEIN: Ruffled Floral Bodycon gown" />
                    </div>
                    <h3 className="product-name">SHEIN: Ruffled Floral Bodycon gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./8.png" alt="FISDY: Classic V Neck Wrapped gown" />
                    </div>
                    <h3 className="product-name">FISDY: Classic V Neck Wrapped gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div><div className="card">
                    <div className="card-image">
                        <img src="./9.png" alt="SAFEIRODO: Long sleeve Loose gown" />
                    </div>
                    <h3 className="product-name">SAFEIRODO: Long sleeve Loose gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div> */}
            </div>
            <ul className="more-items">
                <li className="previous-page"><Link>Previous</Link></li>
                <li className="page-1"><Link>1</Link></li>
                <li className="page-2"><Link>2</Link></li>
                <li className="page-3"><Link>3</Link></li>
                <li className="page-4"><Link>4</Link></li>
                <li className="next-page"><Link>Next</Link></li>
            </ul>
        </>
    );
}
 
export default Shop;