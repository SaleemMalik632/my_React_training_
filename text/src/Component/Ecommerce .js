import React from 'react';
import  "./MyStyle.css";

const ProductCard = ({ product, onAddToCart, onBuyNow, onLike }) => {
  const { name, category, image, liked } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-category">{category}</p>
      <div className="buttons">
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
        <button className="buy-now" onClick={() => onBuyNow(product)}>
          Buy Now
        </button>
        <button
          className={`like ${liked ? 'liked' : ''}`}
          onClick={() => onLike(product)}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
