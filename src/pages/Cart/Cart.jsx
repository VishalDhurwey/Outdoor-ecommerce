import React from 'react';
import { Box, Container, Typography, Button, Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, onUpdateCart, onRemoveFromCart }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) return;
    onUpdateCart(productId, newQuantity);
  };

  return (
    <Container maxWidth="lg" className="cart-container">
      <Typography className="cart-title">
        Shopping Cart
      </Typography>
      
      {cart.length === 0 ? (
        <Paper className="empty-cart">
          <Typography variant="h6" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {cart.map((item) => (
              <Paper
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                />
                <Box className="item-details">
                  <Typography className="item-name">{item.name}</Typography>
                  <Typography className="item-price">
                    ${item.price}
                  </Typography>
                </Box>
                <Box className="quantity-controls">
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                    className="quantity-button"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                    className="quantity-button"
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className="delete-button"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="order-summary">
              <Typography className="summary-title">
                Order Summary
              </Typography>
              <Box>
                <div className="summary-row">
                  <Typography>Subtotal</Typography>
                  <Typography>${calculateTotal().toFixed(2)}</Typography>
                </div>
                <div className="summary-row">
                  <Typography>Shipping</Typography>
                  <Typography>Free</Typography>
                </div>
                <div className="summary-row summary-total">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6" color="primary">
                    ${calculateTotal().toFixed(2)}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  fullWidth
                  className="checkout-button"
                  onClick={() => alert('Checkout functionality coming soon!')}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
