###  Frontend Features

- **Product Catalog** - Browse 8 realistic tech products in a responsive grid
- **Shopping Cart** - Add/remove items with real-time quantity updates
- **Order Management** - Complete order form with validation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Error Handling** - User-friendly error messages and loading states
- **Modern UI/UX** - Clean, professional interface with smooth animations

###  Backend Features

- **RESTful API** - Clean API endpoints for products and orders
- **Data Validation** - Server-side validation for order placement
- **CORS Support** - Cross-origin resource sharing enabled
- **Error Handling** - Comprehensive error responses
- **Health Monitoring** - API health check endpoint

##  Quick Start

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

##  Project Structure

```
projectecommerce/
├──  frontend/                 # React.js application
│   ├──  public/              # Static assets
│   ├──  src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Alert.js        # Error/success message component
│   │   │   ├── ErrorBoundary.js # Error boundary for React
│   │   │   ├── Header.js       # Navigation header
│   │   │   ├── LoadingSpinner.js # Loading indicator
│   │   │   └── ProductCard.js  # Product display card
│   │   ├──  context/         # React Context for state management
│   │   │   └── CartContext.js  # Global cart state
│   │   ├──  hooks/           # Custom React hooks
│   │   │   └── useApi.js       # API call hook
│   │   ├──  pages/           # Main application pages
│   │   │   ├── Cart.js         # Shopping cart page
│   │   │   └── ProductList.js  # Product listing page
│   │   ├──  services/        # API service layer
│   │   │   └── api.js          # API client
│   │   ├── App.js              # Main application component
│   │   ├── index.js            # Application entry point
│   │   └── index.css           # Global styles with Tailwind
│   ├── package.json            # Frontend dependencies
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── postcss.config.js       # PostCSS configuration
├──  backend/                 # Node.js/Express API
│   ├── server.js               # Express server setup
│   └── package.json            # Backend dependencies
├── package.json                # Root package management
├── start-dev.sh               # Development startup script
└── README.md                  # This file
```

##  Technology Stack

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

##  API Endpoints

### Backend API (http://localhost:5001/api)

| Method | Endpoint    | Description      | Request Body | Response                                                |
| ------ | ----------- | ---------------- | ------------ | ------------------------------------------------------- |
| `GET`  | `/health`   | Health check     | -            | `{success: true, message: "Server is running"}`         |
| `GET`  | `/products` | Get all products | -            | `{success: true, data: [...]}`                          |
| `POST` | `/orders`   | Place an order   | Order data   | `{success: true, message: "Order placed successfully"}` |

### Example API Usage

**Get Products:**

## Key Features Explained

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





