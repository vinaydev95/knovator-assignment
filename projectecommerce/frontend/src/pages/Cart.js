import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import useApi from '../hooks/useApi';
import LoadingSpinner from '../components/LoadingSpinner';
import Alert from '../components/Alert';

const Cart = () => {
    const { items, getTotalPrice, clearCart, removeFromCart, updateQuantity } = useCart();
    const { loading, error, makeRequest, clearError } = useApi();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (items.length === 0) {
            setFormErrors({ general: 'Your cart is empty' });
            return;
        }

        try {
            clearError();
            const orderData = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                address: formData.address.trim(),
                items: items.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: getTotalPrice()
            };

            await makeRequest('/api/orders', {
                method: 'POST',
                body: JSON.stringify(orderData)
            });

            setOrderSuccess(true);
            clearCart();
            setFormData({ firstName: '', lastName: '', address: '' });
        } catch (err) {
            console.error('Order placement failed:', err);
        }
    };

    const handleQuantityChange = (productId, newQuantity) => {
        const quantity = parseInt(newQuantity) || 0;
        updateQuantity(productId, quantity);
    };

    if (orderSuccess) {
        return (
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-6xl text-green-500 mb-4">✅</div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
                    <p className="text-gray-600 mb-6">
                        Thank you for your purchase. Your order has been confirmed and will be processed shortly.
                    </p>
                    <button
                        onClick={() => setOrderSuccess(false)}
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">🛒</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Cart is Empty</h1>
                <p className="text-gray-600 mb-6">
                    Add some products to your cart to get started!
                </p>
                <a
                    href="/"
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block"
                >
                    Continue Shopping
                </a>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            {error && (
                <div className="mb-6">
                    <Alert
                        type="error"
                        message={error}
                        onClose={clearError}
                    />
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {items.map((item) => (
                                <div key={item.id} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                            <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-2">
                                                <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-600">
                                                    Qty:
                                                </label>
                                                <input
                                                    id={`quantity-${item.id}`}
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                                                />
                                            </div>
                                            <div className="text-lg font-semibold text-gray-900">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                                title="Remove item"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Order Summary & Form */}
                <div className="space-y-6">
                    {/* Order Summary */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal:</span>
                                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping:</span>
                                <span className="font-medium">Free</span>
                            </div>
                            <div className="border-t border-gray-200 pt-2">
                                <div className="flex justify-between">
                                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                                    <span className="text-lg font-semibold text-primary-600">
                                        ${getTotalPrice().toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Form */}
                    <form onSubmit={handlePlaceOrder} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h2>

                        {formErrors.general && (
                            <Alert type="error" message={formErrors.general} className="mb-4" />
                        )}

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${formErrors.firstName ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your first name"
                                />
                                {formErrors.firstName && (
                                    <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${formErrors.lastName ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your last name"
                                />
                                {formErrors.lastName && (
                                    <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                    Address *
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${formErrors.address ? 'border-red-300' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your full address"
                                />
                                {formErrors.address && (
                                    <p className="mt-1 text-sm text-red-600">{formErrors.address}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <LoadingSpinner size="small" />
                                        <span>Placing Order...</span>
                                    </>
                                ) : (
                                    <span>Place Order</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;

