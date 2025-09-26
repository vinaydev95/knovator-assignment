import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Alert from '../components/Alert';
import apiService from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await apiService.getProducts();
            setProducts(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        fetchProducts();
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-96">
                <LoadingSpinner size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-2xl mx-auto">
                <Alert
                    type="error"
                    message={`Failed to load products: ${error}`}
                />
                <div className="mt-4 text-center">
                    <button
                        onClick={handleRetry}
                        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
                <p className="text-gray-600">
                    Discover our amazing collection of tech products
                </p>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-6xl text-gray-300 mb-4">📦</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Available</h3>
                    <p className="text-gray-600">Check back later for new products!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;

