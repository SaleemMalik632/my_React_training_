import React from 'react';
import ProductCard from './Ecommerce '; // Make sure to adjust the import path according to your project structure

const EcommercePage = () => {
  // Sample product data, replace it with your actual product data
  // 'https://fakestoreapi.com/icons/intro.svg'
  const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      image: 'https://i.imgur.com/6o5Vuyu.jpg',
      liked: false,
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      image: 'https://i.imgur.com/6o5Vuyu.jpg',
      liked: true,
    } 
    ,
    {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        liked: true,
      } 
      ,
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        liked: true,
      } 
      ,
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        liked: true,
      } 
      ,
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        liked: true,
      } 
      ,
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        liked: true,
      } 
      ,
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        liked: true,
      } 
      ,
      


      
      
  ]; 

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
     alert('Add To card is Done ');
  };

  const handleBuyNow = () => {
    // Implement your logic for the "Buy Now" button
    alert('BUY  To card is Done ');
  };

  const handleLike = () => {
    // Implement your logic to toggle the "liked" status for the product
     alert('this is Log Like ')
  };
  
   const Shear = (product) => {
    alert('The Name of the product is ' + product.name);
  }
  


  return (
    <div  style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Four equally sized columns
        gap: '20px', // Gap between grid items (optional)
        justifyContent: 'center', // Center the grid items horizontally
        alignItems: 'center', // Center the grid items vertically
        maxWidth: '1200px', // Optionally limit the container width
        margin: '0 auto', // Center the container on the page
      }} >   
      {products.map((product) => (   <ProductCard  product= {product}  onAddToCart= {handleAddToCart} onBuyNow= {handleBuyNow} onLike= {handleLike}  Shear = {Shear}  /> ))}
    </div>
  );
};

export default EcommercePage;
