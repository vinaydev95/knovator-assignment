import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <CartProvider>
                <Router>
                    <div className="min-h-screen bg-gray-50">
                        <Header />
                        <main className="container mx-auto px-4 py-8">
                            <Routes>
                                <Route path="/" element={<ProductList />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </CartProvider>
        </ErrorBoundary>
    );
}

export default App;

