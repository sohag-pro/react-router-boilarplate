import './../App.css';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function ProductDetails() {
    let { id } = useParams();
    const [product, setProduct] = useState({
        images: {}
    });
    
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
            const json = await response.json();
            setProduct(json.data);
            console.log(json.data);
        }
        fetchProduct();
    }, [id]); // [] means run only once when the component is loaded



    return (
        <div>
            <h1>ProductDetails</h1>
            <h3>{product.name}</h3>
            <img src={product.images.icon} alt={product.name} />
        </div>
    );
}

export default ProductDetails;
