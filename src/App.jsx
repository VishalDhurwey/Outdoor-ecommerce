import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Camping from './pages/Camping/Camping';
import Hiking from './pages/Hiking/Hiking';
import Climbing from './pages/Climbing/Climbing';
import Clothing from './pages/Clothing/Clothing';
import Login from './pages/Login/Login';
import SignUp from './pages/Auth/SignUp';
import Cart from './pages/Cart/Cart';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B6777',
    },
    secondary: {
      main: '#ff6b6b',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
      },
    },
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (productId, quantity) => {
    if (quantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header 
            isLoggedIn={isLoggedIn} 
            onLogout={handleLogout} 
            cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} 
          />
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
              <Route path="/camping" element={<Camping onAddToCart={handleAddToCart} />} />
              <Route path="/hiking" element={<Hiking onAddToCart={handleAddToCart} />} />
              <Route path="/climbing" element={<Climbing onAddToCart={handleAddToCart} />} />
              <Route path="/clothing" element={<Clothing onAddToCart={handleAddToCart} />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route 
                path="/cart" 
                element={
                  <Cart 
                    cart={cart}
                    onUpdateQuantity={handleUpdateCartQuantity}
                  />
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
