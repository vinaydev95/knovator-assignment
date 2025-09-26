exports.placeOrder = (req, res) => {
    try {
        const { firstName, lastName, address, items, total } = req.body;

        if (!firstName || !lastName || !address) {
            return res.status(400).json({
                success: false,
                message: 'First name, last name, and address are required'
            });
        }

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Cart is empty'
            });
        }

        const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
        const order = {
            id: orderId,
            customer: { firstName, lastName, address },
            items,
            total,
            status: 'confirmed',
            createdAt: new Date().toISOString()
        };

        console.log('=== NEW ORDER PLACED ===');
        console.log('Order ID:', orderId);
        console.log('Customer:', `${firstName} ${lastName}`);
        console.log('Address:', address);
        console.log('Items:', items);
        console.log('Total:', `$${Number(total || 0).toFixed(2)}`);
        console.log('========================');

        res.json({
            success: true,
            message: 'Order placed successfully',
            data: { orderId, total }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to place order',
            error: error.message
        });
    }
};


