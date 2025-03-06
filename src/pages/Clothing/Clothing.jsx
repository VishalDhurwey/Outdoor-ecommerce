import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Slider, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { FilterList as FilterIcon, ViewModule as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
import './Clothing.css';

const Clothing = ({ onAddToCart }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'Arc\'teryx Beta AR Jacket',
      price: 599.00,
      brand: 'Arc\'teryx',
      rating: 4.8,
      image: '/images/products/jacket1.jpg',
      description: 'Versatile GORE-TEX Pro shell for all-round mountain use',
      category: 'Jackets'
    },
    {
      id: 2,
      name: 'Patagonia Nano Puff Hoody',
      price: 279.00,
      brand: 'Patagonia',
      rating: 4.7,
      image: '/images/products/hoody1.jpg',
      description: 'Lightweight, water-resistant insulated jacket',
      category: 'Insulation'
    },
    {
      id: 3,
      name: 'The North Face Paramount Trail Pants',
      price: 79.95,
      brand: 'The North Face',
      rating: 4.6,
      image: '/images/products/pants1.jpg',
      description: 'Durable, convertible hiking pants with UPF 50',
      category: 'Pants'
    },
    {
      id: 4,
      name: 'Icebreaker Merino Base Layer',
      price: 120.00,
      brand: 'Icebreaker',
      rating: 4.9,
      image: '/images/products/base1.jpg',
      description: 'Premium merino wool base layer for temperature regulation',
      category: 'Base Layers'
    }
  ];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <Box className="clothing-page">
      <Box className="category-banner">
        <Container>
          <Typography variant="h1" className="category-title">
            Outdoor Clothing
          </Typography>
          <Typography className="category-description">
            High-performance apparel for every outdoor adventure
          </Typography>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box className="filters-section">
              <Box className="filters-header">
                <Typography variant="h6" className="filters-title">
                  <FilterIcon /> Filters
                </Typography>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Price Range</Typography>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={500}
                  className="price-slider"
                />
                <Box className="price-range-display">
                  ${priceRange[0]} - ${priceRange[1]}
                </Box>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Categories</Typography>
                <Button className="filter-btn active">All</Button>
                <Button className="filter-btn">Jackets</Button>
                <Button className="filter-btn">Insulation</Button>
                <Button className="filter-btn">Pants</Button>
                <Button className="filter-btn">Base Layers</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Brands</Typography>
                <Button className="filter-btn">Arc'teryx</Button>
                <Button className="filter-btn">Patagonia</Button>
                <Button className="filter-btn">The North Face</Button>
                <Button className="filter-btn">Icebreaker</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Activity</Typography>
                <Button className="filter-btn">Hiking</Button>
                <Button className="filter-btn">Climbing</Button>
                <Button className="filter-btn">Skiing</Button>
                <Button className="filter-btn">Camping</Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box className="products-section">
              <Box className="products-header">
                <Box className="view-options">
                  <IconButton 
                    onClick={() => handleViewModeChange('grid')}
                    className={viewMode === 'grid' ? 'active' : ''}
                  >
                    <GridIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleViewModeChange('list')}
                    className={viewMode === 'list' ? 'active' : ''}
                  >
                    <ListIcon />
                  </IconButton>
                </Box>

                <FormControl className="sort-select">
                  <InputLabel>Sort By</InputLabel>
                  <Select value={sortBy} onChange={handleSortChange}>
                    <MenuItem value="featured">Featured</MenuItem>
                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                    <MenuItem value="rating">Customer Rating</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} sm={viewMode === 'grid' ? 6 : 12} md={viewMode === 'grid' ? 4 : 12} key={product.id}>
                    <Box className={`product-card ${viewMode}`}>
                      <Box className="product-image-container">
                        <Box className="product-image-placeholder" />
                        <Typography className="product-category">
                          {product.category}
                        </Typography>
                      </Box>
                      <Box className="product-content">
                        <Typography className="product-brand">
                          {product.brand}
                        </Typography>
                        <Typography className="product-name">
                          {product.name}
                        </Typography>
                        <Typography className="product-description">
                          {product.description}
                        </Typography>
                        <Typography className="product-price">
                          ${product.price}
                        </Typography>
                        <Button
                          onClick={() => onAddToCart(product)}
                          className="add-to-cart-btn"
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Clothing;
