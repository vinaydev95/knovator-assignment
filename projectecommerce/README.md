# 🛒 E-Commerce Website

A modern, full-stack e-commerce application built with React.js frontend and Node.js/Express backend. This project demonstrates a complete e-commerce solution with product browsing, shopping cart functionality, and order placement.

![E-Commerce Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

### 🛍️ Frontend Features

- **Product Catalog** - Browse 8 realistic tech products in a responsive grid
- **Shopping Cart** - Add/remove items with real-time quantity updates
- **Order Management** - Complete order form with validation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Error Handling** - User-friendly error messages and loading states
- **Modern UI/UX** - Clean, professional interface with smooth animations

### 🔧 Backend Features

- **RESTful API** - Clean API endpoints for products and orders
- **Data Validation** - Server-side validation for order placement
- **CORS Support** - Cross-origin resource sharing enabled
- **Error Handling** - Comprehensive error responses
- **Health Monitoring** - API health check endpoint

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd projectecommerce
   ```

2. **Install dependencies**

   ```bash
   # Install all dependencies (frontend + backend)
   npm run install-all

   # Or install separately
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Start the application**

   ```bash
   # Start both servers simultaneously
   npm run dev

   # Or start individually
   npm run start:backend    # Backend on port 5001
   npm run start:frontend   # Frontend on port 3000
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001/api

## 📁 Project Structure

```
projectecommerce/
├── 📁 frontend/                 # React.js application
│   ├── 📁 public/              # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   │   ├── Alert.js        # Error/success message component
│   │   │   ├── ErrorBoundary.js # Error boundary for React
│   │   │   ├── Header.js       # Navigation header
│   │   │   ├── LoadingSpinner.js # Loading indicator
│   │   │   └── ProductCard.js  # Product display card
│   │   ├── 📁 context/         # React Context for state management
│   │   │   └── CartContext.js  # Global cart state
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   │   └── useApi.js       # API call hook
│   │   ├── 📁 pages/           # Main application pages
│   │   │   ├── Cart.js         # Shopping cart page
│   │   │   └── ProductList.js  # Product listing page
│   │   ├── 📁 services/        # API service layer
│   │   │   └── api.js          # API client
│   │   ├── App.js              # Main application component
│   │   ├── index.js            # Application entry point
│   │   └── index.css           # Global styles with Tailwind
│   ├── package.json            # Frontend dependencies
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── postcss.config.js       # PostCSS configuration
├── 📁 backend/                 # Node.js/Express API
│   ├── server.js               # Express server setup
│   └── package.json            # Backend dependencies
├── package.json                # Root package management
├── start-dev.sh               # Development startup script
└── README.md                  # This file
```

## 🛠️ Technology Stack

### Frontend

- **React.js 18** - Modern React with hooks and context
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - Global state management
- **Custom Hooks** - Reusable logic
- **Error Boundaries** - Graceful error handling

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **JSON** - Data interchange format

## 📡 API Endpoints

### Backend API (http://localhost:5001/api)

| Method | Endpoint    | Description      | Request Body | Response                                                |
| ------ | ----------- | ---------------- | ------------ | ------------------------------------------------------- |
| `GET`  | `/health`   | Health check     | -            | `{success: true, message: "Server is running"}`         |
| `GET`  | `/products` | Get all products | -            | `{success: true, data: [...]}`                          |
| `POST` | `/orders`   | Place an order   | Order data   | `{success: true, message: "Order placed successfully"}` |

### Example API Usage

**Get Products:**

```bash
curl http://localhost:5001/api/products
```

**Place Order:**

```bash
curl -X POST http://localhost:5001/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "address": "123 Main St, City, State",
    "items": [{"id": 1, "name": "Product", "price": 99.99, "quantity": 1}],
    "total": 99.99
  }'
```

## 🎯 Key Features Explained

### Product Management

- **8 Realistic Products** - Tech products with descriptions and prices
- **Visual Placeholders** - Colored divs with emoji icons as requested
- **Responsive Grid** - 1-4 columns based on screen size
- **Add to Cart** - One-click product addition

### Shopping Cart

- **Real-time Updates** - Cart counter in header updates instantly
- **Quantity Management** - Increase/decrease item quantities
- **Item Removal** - Remove items from cart
- **Total Calculation** - Automatic price calculation

### Order Processing

- **Form Validation** - Client and server-side validation
- **Required Fields** - First name, last name, and address
- **Success Feedback** - Order confirmation with success message
- **Error Handling** - User-friendly error messages

## 🔧 Advanced React Concepts Used

1. **Context API** - Global cart state management
2. **Custom Hooks** - `useApi` for API calls
3. **Error Boundaries** - Graceful error handling
4. **useReducer** - Complex state management
5. **Component Composition** - Reusable UI components
6. **React Router** - Client-side navigation
7. **Controlled Components** - Form handling
8. **Hooks Pattern** - Modern React development

## 🎨 Styling & Design

- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Custom Color Palette** - Primary blue theme
- **Hover Effects** - Smooth transitions and animations
- **Loading States** - Visual feedback during operations
- **Form Validation** - Visual error states

## 🚦 Development Scripts

```bash
# Install all dependencies
npm run install-all

# Start both servers (recommended)
npm run dev

# Start servers individually
npm run start:backend    # Backend only
npm run start:frontend   # Frontend only

# Development with auto-reload
npm run dev:backend      # Backend with nodemon
npm run dev:frontend     # Frontend with hot reload

# Build for production
npm run build

# Run tests
npm test
```

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use:**

```bash
# Kill processes using ports 3000 or 5001
lsof -ti:3000 | xargs kill -9
lsof -ti:5001 | xargs kill -9
```

**Dependencies Not Installed:**

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Compilation Errors:**

- Check that all imports are correct
- Ensure all dependencies are installed
- Verify file paths are accurate

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ for educational purposes.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Express.js for the robust backend framework
- The open-source community for inspiration

---

**Happy Shopping! 🛒✨**
