import React from 'react';
import ProductPage from '../../components/ProductPage/ProductPage';

const climbingProducts = [
  {
    id: 1,
    name: "Climbing Harness",
    brand: "North Face",
    price: 89.99,
    color: "Red",
    discount: 0,
    image: "/images/products/climbing/harness.jpg"
  },
  {
    id: 2,
    name: "Climbing Rope",
    brand: "Mountain Hardwear",
    price: 199.99,
    color: "Blue",
    discount: 15,
    image: "/images/products/climbing/rope.jpg"
  },
  {
    id: 3,
    name: "Climbing Shoes",
    brand: "Patagonia",
    price: 129.99,
    color: "Grey",
    discount: 20,
    image: "/images/products/climbing/shoes.jpg"
  }
];

const Climbing = ({ onAddToCart }) => {
  return <ProductPage title="Climbing Gear" products={climbingProducts} onAddToCart={onAddToCart} />;
};

export default Climbing;
