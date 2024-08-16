// src/components/ProductCard.js
import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
    return (
        
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{product.productName}</h3>
                <p className="product-price">₹ {product.productPrice}</p>
                <p className="product-description">{product.productDescription}</p>
                
            </div>
        </div>
    );
}

export default ProductCard;
