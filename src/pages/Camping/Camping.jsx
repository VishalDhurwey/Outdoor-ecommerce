import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Slider, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { FilterList as FilterIcon, ViewModule as GridIcon, ViewList as ListIcon } from '@mui/icons-material';
import './Camping.css';

const Camping = ({ onAddToCart }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'North Face Stormbreak 2 Tent',
      price: 199.99,
      brand: 'The North Face',
      rating: 4.5,
      image: '/images/products/tent1.jpg',
      description: '2-person backpacking tent with easy setup and weatherproof design',
      category: 'Tents'
    },
    {
      id: 2,
      name: 'Coleman Sleeping Bag',
      price: 89.99,
      brand: 'Coleman',
      rating: 4.2,
      image: '/images/products/sleeping-bag1.jpg',
      description: 'Warm and comfortable sleeping bag rated for 20°F',
      category: 'Sleeping Bags'
    },
    {
      id: 3,
      name: 'MSR PocketRocket Stove',
      price: 44.95,
      brand: 'MSR',
      rating: 4.8,
      image: '/images/products/stove1.jpg',
      description: 'Ultralight and compact camping stove',
      category: 'Camp Kitchen'
    },
    {
      id: 4,
      name: 'Black Diamond Spot Headlamp',
      price: 39.95,
      brand: 'Black Diamond',
      rating: 4.6,
      image: '/images/products/headlamp1.jpg',
      description: 'Waterproof LED headlamp with multiple beam settings',
      category: 'Lighting'
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
    <Box className="camping-page">
      <Box className="category-banner">
        <Container>
          <Typography variant="h1" className="category-title">
            Camping Gear & Equipment
          </Typography>
          <Typography className="category-description">
            Everything you need for your next outdoor adventure
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
                  max={1000}
                  className="price-slider"
                />
                <Box className="price-range-display">
                  ${priceRange[0]} - ${priceRange[1]}
                </Box>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Categories</Typography>
                <Button className="filter-btn active">All</Button>
                <Button className="filter-btn">Tents</Button>
                <Button className="filter-btn">Sleeping Bags</Button>
                <Button className="filter-btn">Camp Kitchen</Button>
                <Button className="filter-btn">Lighting</Button>
              </Box>

              <Box className="filter-group">
                <Typography className="filter-label">Brands</Typography>
                <Button className="filter-btn">The North Face</Button>
                <Button className="filter-btn">Coleman</Button>
                <Button className="filter-btn">MSR</Button>
                <Button className="filter-btn">Black Diamond</Button>
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

export default Camping;
