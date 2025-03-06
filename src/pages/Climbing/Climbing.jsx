import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Slider, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { FilterList as FilterIcon, ViewModule as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
import './Climbing.css';

const Climbing = ({ onAddToCart }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'Black Diamond Momentum Harness',
      price: 59.95,
      brand: 'Black Diamond',
      rating: 4.7,
      image: '/images/products/harness1.jpg',
      description: 'Versatile climbing harness for all-around use',
      category: 'Harnesses'
    },
    {
      id: 2,
      name: 'La Sportiva Solution',
      price: 180.00,
      brand: 'La Sportiva',
      rating: 4.8,
      image: '/images/products/shoes1.jpg',
      description: 'High-performance climbing shoes for bouldering and sport climbing',
      category: 'Shoes'
    },
    {
      id: 3,
      name: 'Petzl Grigri+',
      price: 159.95,
      brand: 'Petzl',
      rating: 4.9,
      image: '/images/products/belay1.jpg',
      description: 'Assisted braking belay device with anti-panic handle',
      category: 'Belay Devices'
    },
    {
      id: 4,
      name: 'DMM Alpha Sport Quickdraws',
      price: 21.95,
      brand: 'DMM',
      rating: 4.6,
      image: '/images/products/quickdraw1.jpg',
      description: 'Lightweight quickdraws for sport climbing',
      category: 'Hardware'
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
    <Box className="climbing-page">
      <Box className="category-banner">
        <Container>
          <Typography variant="h1" className="category-title">
            Climbing Equipment
          </Typography>
          <Typography className="category-description">
            Essential gear for sport climbing, bouldering, and traditional climbing
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
                <Button className="filter-btn">Harnesses</Button>
                <Button className="filter-btn">Shoes</Button>
                <Button className="filter-btn">Ropes</Button>
                <Button className="filter-btn">Hardware</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Brands</Typography>
                <Button className="filter-btn">Black Diamond</Button>
                <Button className="filter-btn">La Sportiva</Button>
                <Button className="filter-btn">Petzl</Button>
                <Button className="filter-btn">DMM</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Climbing Type</Typography>
                <Button className="filter-btn">Sport Climbing</Button>
                <Button className="filter-btn">Bouldering</Button>
                <Button className="filter-btn">Traditional</Button>
                <Button className="filter-btn">Indoor</Button>
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

export default Climbing;
