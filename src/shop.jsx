import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from './addToCart'

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://timbu-cloud-murex.vercel.app/api/wears')
            .then(response => response.json())
            .then(products => setProducts(products))
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
            { !products.length && <p style={{ textAlign: 'center', margin: '45% 0', fontSize: '1.5rem' }}>Loading...</p> }
            <div className="shop">
                {   
                    products && 
                        products.map((product, position) => (
                            <div className="card" key={position}>
                                <div className="card-image">
                                    <Link to={`/product/${product.id}`}><img src={`https://timbu-cloud-murex.vercel.app/${product.image}`} alt={product.name} /></Link>
                                </div>
                                <h3 className="product-name">{product.name}</h3>
                                <small className="product-design">{ product.design }</small>
                                <ul className="sizes">
                                    <li className="s">S</li>
                                    <li className="m">M</li>
                                    <li className="l">L</li>
                                    <li className="xl">XL</li>
                                </ul>
                                <p className="price">NGN {product.price}</p>
                                <form className="amount-and-add" onSubmit={AddToCart}>
                                    <div className="amount">
                                        <i className="ri-subtract-line decrement" onClick={e => e.target.nextElementSibling.value--}/>
                                        <input type="number" defaultValue="1" />
                                        <i className="ri-add-line increment" onClick={e => e.target.previousElementSibling.value++}/>
                                    </div>
                                    <input type="submit" value="Add to cart" className="btn" />
                                </form>
                            </div>
                        ))
                }
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