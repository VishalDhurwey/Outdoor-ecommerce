import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, FormControl, InputLabel, Select, MenuItem, Slider } from '@mui/material';
import './ProductPage.css';

const ProductPage = ({ title, products, onAddToCart }) => {
  const [filters, setFilters] = useState({
    brand: 'all',
    color: 'all',
    price: [0, 1000],
    discount: 'all'
  });

  const brands = [...new Set(products.map(product => product.brand))];
  const colors = [...new Set(products.map(product => product.color))];

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.brand === 'all' || product.brand === filters.brand) &&
      (filters.color === 'all' || product.color === filters.color) &&
      (product.price >= filters.price[0] && product.price <= filters.price[1]) &&
      (filters.discount === 'all' || 
        (filters.discount === 'yes' && product.discount > 0) ||
        (filters.discount === 'no' && !product.discount)
      )
    );
  });

  return (
    <Box className="product-page">
      <Container>
        <Typography className="page-title">
          {title}
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Paper className="filters-section">
              <Typography className="filter-title">
                Filters
              </Typography>

              <div className="filter-group">
                <FormControl fullWidth>
                  <InputLabel>Brand</InputLabel>
                  <Select
                    value={filters.brand}
                    label="Brand"
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                    className="filter-select"
                  >
                    <MenuItem value="all">All Brands</MenuItem>
                    {brands.map(brand => (
                      <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="filter-group">
                <FormControl fullWidth>
                  <InputLabel>Color</InputLabel>
                  <Select
                    value={filters.color}
                    label="Color"
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                    className="filter-select"
                  >
                    <MenuItem value="all">All Colors</MenuItem>
                    {colors.map(color => (
                      <MenuItem key={color} value={color}>{color}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="filter-group">
                <Typography className="filter-label">
                  Price Range
                </Typography>
                <Box className="price-range">
                  <Slider
                    value={filters.price}
                    onChange={(e, newValue) => handleFilterChange('price', newValue)}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>${filters.price[0]}</Typography>
                    <Typography>${filters.price[1]}</Typography>
                  </Box>
                </Box>
              </div>

              <div className="filter-group">
                <FormControl fullWidth>
                  <InputLabel>Discount</InputLabel>
                  <Select
                    value={filters.discount}
                    label="Discount"
                    onChange={(e) => handleFilterChange('discount', e.target.value)}
                    className="filter-select"
                  >
                    <MenuItem value="all">All Items</MenuItem>
                    <MenuItem value="yes">On Sale</MenuItem>
                    <MenuItem value="no">Regular Price</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} md={9}>
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    {product.discount > 0 && (
                      <div className="product-discount">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>
                  <div className="product-content">
                    <Typography className="product-brand">
                      {product.brand}
                    </Typography>
                    <Typography className="product-name">
                      {product.name}
                    </Typography>
                    <div className="product-price-container">
                      <div>
                        <Typography className="product-price">
                          ${product.price}
                        </Typography>
                        {product.discount > 0 && (
                          <Typography className="product-original-price">
                            ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                          </Typography>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => onAddToCart(product)}
                      className="add-to-cart-button"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
