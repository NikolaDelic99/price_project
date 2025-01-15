import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Original Price</th>
                        <th>Discounted Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} style={{ backgroundColor: product.discountedPrice ? '#f9c2ff' : 'white' }}>
                            <td>{product.name}</td>
                            <td>£{product.price.toFixed(2)}</td>
                            <td>{product.discountedPrice ? `£${product.discountedPrice.toFixed(2)}` : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
