const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());


const productRoutes = require('./src/routes/productRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Server is running' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
