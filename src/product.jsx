import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "./addToCart";
import Prompt from "./prompt";

function Product() {
    const { productID } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://timbu-cloud-three.vercel.app/api/wears/${productID}`)
            .then(response => response.json())
            .then(product => setProduct(product))
            .catch(err => console.error(err.message));
    }, []);

    return (
        <div className="product-page">
            {
                product ?
                    <div className="product-card">
                        <div className="card-image">
                            <img src={`https://timbu-cloud-three.vercel.app/${product.image}`} alt={product.name} />
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
                : <Prompt message='Loading...' />
            }
            
        </div>
    );
}
 
export default Product;