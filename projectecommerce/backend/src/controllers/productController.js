const products = require('../data/products');

exports.getProducts = (req, res) => {
    try {
        res.json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch products',
            error: error.message
        });
    }
};


