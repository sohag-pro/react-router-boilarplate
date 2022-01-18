import './../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchProducts();
    }, []);

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const json = await response.json();
        setProducts(json.data.items);
    };
 
    return (
        <div>
            <h1>Shop</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h3><Link to={`/shop/${product.id}`}>{product.name}</Link></h3>
                </div>
            ))}
        </div>
    );
}

export default Shop;
