import React from 'react';
import ProductCard from './Ecommerce '; // Make sure to adjust the import path according to your project structure

const EcommercePage = () => {
  // Sample product data, replace it with your actual product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      image: 'product1.jpg',
      liked: false,
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://fakestoreapi.com/icons/intro.svg',
      liked: true,
    },
    // Add more products here
  ];

  const handleAddToCart = (product) => {
    // Implement your logic to add the product to the cart
    console.log('Adding to cart:', product);
  };

  const handleBuyNow = (product) => {
    // Implement your logic for the "Buy Now" button
    console.log('Buy Now:', product);
  };

  const handleLike = (product) => {
    // Implement your logic to toggle the "liked" status for the product
    console.log('Toggle Like:', product);
  };

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onLike={handleLike}
        />
      ))}
    </div>
  );
};

export default EcommercePage;
