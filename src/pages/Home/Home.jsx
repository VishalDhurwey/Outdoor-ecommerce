import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const categories = [
    { id: 1, name: 'CAMPING', count: 156, image: '/images/categories/camping.jpg', description: 'Tents, Sleeping Bags & Camp Kitchen' },
    { id: 2, name: 'HIKING', count: 142, image: '/images/categories/hiking.jpg', description: 'Boots, Poles & Navigation' },
    { id: 3, name: 'CLIMBING', count: 89, image: '/images/categories/climbing.jpg', description: 'Ropes, Harnesses & Protection' },
    { id: 4, name: 'CLOTHING', count: 235, image: '/images/categories/clothing.jpg', description: 'Jackets, Pants & Base Layers' }
  ];

  const featuredProducts = [
    { id: 1, name: 'North Face Tent', price: 299.99, image: '/images/products/tent.jpg', category: 'Camping' },
    { id: 2, name: 'Osprey Backpack', price: 179.99, image: '/images/products/backpack.jpg', category: 'Hiking' },
    { id: 3, name: 'Black Diamond Harness', price: 89.99, image: '/images/products/harness.jpg', category: 'Climbing' },
    { id: 4, name: 'Patagonia Jacket', price: 199.99, image: '/images/products/jacket.jpg', category: 'Clothing' }
  ];

  return (
    <Box className="home-container">
      <Box className="hero-banner">
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography className="trending-label">
                New Season Gear
              </Typography>
              <Typography variant="h1" className="banner-title">
                ADVENTURE
                <br />
                STARTS HERE
              </Typography>
              <Typography className="banner-description">
                Discover premium outdoor gear for your next adventure. From camping to climbing, we've got you covered.
              </Typography>
              <Button
                component={Link}
                to="/camping"
                className="shop-now-btn"
              >
                SHOP NOW
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="banner-image-container">
                <img 
                  src="/images/banner/FOR EMMA, FOREVER AGO.jpeg" 
                  alt="Camping Scene"
                  className="banner-image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        <Box className="categories-section">
          <Typography variant="h2" className="section-title">
            Shop By Category
          </Typography>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={3} key={category.id}>
                <Link to={`/${category.name.toLowerCase()}`} className="category-card">
                  <Box className="category-image-container">
                    <Box className="category-image-placeholder" />
                  </Box>
                  <Box className="category-content">
                    <Box>
                      <Typography className="category-name">
                        {category.name}
                      </Typography>
                      <Typography className="category-description">
                        {category.description}
                      </Typography>
                    </Box>
                    <Typography className="category-count">
                      {category.count} Products
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="featured-section">
          <Typography variant="h2" className="section-title">
            Featured Products
          </Typography>
          <Grid container spacing={3}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Box className="product-card">
                  <Box className="product-image-container">
                    <Box className="product-image-placeholder" />
                    <Typography className="product-category">
                      {product.category}
                    </Typography>
                  </Box>
                  <Box className="product-content">
                    <Typography className="product-name">
                      {product.name}
                    </Typography>
                    <Typography className="product-price">
                      ${product.price}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/product/${product.id}`}
                      className="view-product-btn"
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="cta-section">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className="cta-card">
                <Typography className="cta-title">
                  New to Hiking?
                </Typography>
                <Typography className="cta-description">
                  Check out our beginner's guide to essential hiking gear
                </Typography>
                <Button
                  component={Link}
                  to="/guides/hiking-essentials"
                  className="cta-btn"
                >
                  Read Guide
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="cta-card">
                <Typography className="cta-title">
                  Spring Sale!
                </Typography>
                <Typography className="cta-description">
                  Up to 40% off on selected camping gear
                </Typography>
                <Button
                  component={Link}
                  to="/deals"
                  className="cta-btn"
                >
                  Shop Deals
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
