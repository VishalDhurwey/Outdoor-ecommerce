import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Slider, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { FilterList as FilterIcon, ViewModule as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
import './Hiking.css';

const Hiking = ({ onAddToCart }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'Osprey Atmos AG 65',
      price: 269.99,
      brand: 'Osprey',
      rating: 4.8,
      image: '/images/products/backpack1.jpg',
      description: 'Award-winning backpack with Anti-Gravity suspension',
      category: 'Backpacks'
    },
    {
      id: 2,
      name: 'Salomon Quest 4D GTX',
      price: 229.99,
      brand: 'Salomon',
      rating: 4.7,
      image: '/images/products/boots1.jpg',
      description: 'Waterproof hiking boots with excellent ankle support',
      category: 'Footwear'
    },
    {
      id: 3,
      name: 'Black Diamond Trail Poles',
      price: 79.95,
      brand: 'Black Diamond',
      rating: 4.6,
      image: '/images/products/poles1.jpg',
      description: 'Adjustable trekking poles with ergonomic grips',
      category: 'Trekking Poles'
    },
    {
      id: 4,
      name: 'Garmin GPSMAP 64sx',
      price: 349.99,
      brand: 'Garmin',
      rating: 4.5,
      image: '/images/products/gps1.jpg',
      description: 'Rugged GPS device with multi-GNSS support',
      category: 'Navigation'
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
    <Box className="hiking-page">
      <Box className="category-banner">
        <Container>
          <Typography variant="h1" className="category-title">
            Hiking & Trekking Gear
          </Typography>
          <Typography className="category-description">
            Quality gear for your trail adventures, from day hikes to thru-hikes
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
                <Button className="filter-btn">Backpacks</Button>
                <Button className="filter-btn">Footwear</Button>
                <Button className="filter-btn">Trekking Poles</Button>
                <Button className="filter-btn">Navigation</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Brands</Typography>
                <Button className="filter-btn">Osprey</Button>
                <Button className="filter-btn">Salomon</Button>
                <Button className="filter-btn">Black Diamond</Button>
                <Button className="filter-btn">Garmin</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Trail Type</Typography>
                <Button className="filter-btn">Day Hiking</Button>
                <Button className="filter-btn">Backpacking</Button>
                <Button className="filter-btn">Alpine</Button>
                <Button className="filter-btn">Desert</Button>
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

export default Hiking;
