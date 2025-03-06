import React from 'react';
import ProductPage from '../../components/ProductPage/ProductPage';

const clothingProducts = [
  {
    id: 1,
    name: "Waterproof Jacket",
    brand: "North Face",
    price: 249.99,
    color: "Black",
    discount: 20,
    image: "/images/products/clothing/jacket.jpg"
  },
  {
    id: 2,
    name: "Hiking Pants",
    brand: "Columbia",
    price: 79.99,
    color: "Grey",
    discount: 0,
    image: "/images/products/clothing/pants.jpg"
  },
  {
    id: 3,
    name: "Base Layer Top",
    brand: "Patagonia",
    price: 69.99,
    color: "Blue",
    discount: 15,
    image: "/images/products/clothing/base-layer.jpg"
  }
];

const Clothing = ({ onAddToCart }) => {
  return <ProductPage title="Outdoor Clothing" products={clothingProducts} onAddToCart={onAddToCart} />;
};

export default Clothing;
