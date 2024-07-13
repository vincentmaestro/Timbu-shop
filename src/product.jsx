import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiKey = '10b65569a3ad47d39af619d1ac5ba22d20240713194837290303';
const appID = 'XIPQ1HG0E1Y6FTH';
const orgID = '26e222830a814f56b09ab4f854f8e86a';

function Product() {
    const { productID }= useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://timbu-get-single-product.reavdev.workers.dev/${productID}?organization_id=${orgID}&reverse_sort=false&page=1&size=10&Appid=${appID}&Apikey=${apiKey}`)
        .then(response => response.json())
        .then(product => setProduct(product))
        .catch(err => console.error(err.message));
    }, []);

    return (
        <div className="product-page">
            {
                product && 
                    <div className="card">
                        <div className="card-image">
                            <img src="./1.png" alt="SHEIN: Roupas Feminas gown" />
                        </div>
                        <h3 className="product-name">{product.name}</h3>
                        <ul className="sizes">
                            <li className="s">S</li>
                            <li className="m">M</li>
                            <li className="l">L</li>
                            <li className="xl">XL</li>
                        </ul>
                        <p className="price">NGN {product.current_price}</p>
                        <div className="amount-and-add">
                            <div className="amount">
                                <i className="ri-subtract-line decrement"></i>
                                {/* <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/> */}
                                <i className="ri-add-line increment"></i>
                            </div>
                            <p className="btn">Add to cart</p>
                        </div>
                    </div>
            }
            
        </div>
    );
}
 
export default Product;