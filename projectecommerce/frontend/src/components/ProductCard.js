import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    const getImageColor = (imageName) => {
        const colors = {
            headphones: 'bg-blue-200',
            smartwatch: 'bg-green-200',
            speaker: 'bg-purple-200',
            keyboard: 'bg-gray-200',
            mouse: 'bg-orange-200',
            monitor: 'bg-indigo-200',
            usbhub: 'bg-yellow-200',
            charger: 'bg-pink-200'
        };
        return colors[imageName] || 'bg-gray-200';
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className={`h-48 ${getImageColor(product.image)} flex items-center justify-center`}>
                <div className="text-6xl text-gray-400">
                    {product.image === 'headphones' && '🎧'}
                    {product.image === 'smartwatch' && '⌚'}
                    {product.image === 'speaker' && '🔊'}
                    {product.image === 'keyboard' && '⌨️'}
                    {product.image === 'mouse' && '🖱️'}
                    {product.image === 'monitor' && '🖥️'}
                    {product.image === 'usbhub' && '🔌'}
                    {product.image === 'charger' && '🔋'}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

