const express = require('express');
const app = express();

let orders = [];

app.post('/orders', (req, res) => {
    const { userId, productId } = req.query;

    if (!userId || !productId) {
        return res.status(400).json({
        message: 'userId and productId are required'
        });
    }

    const newOrder = {
        id: orders.length ? orders[orders.length - 1].id + 1 : 1,
        userId: Number(userId),
        productId: Number(productId)
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
    });

    app.get('/orders', (req, res) => {
    res.status(200).json(orders);
    });

    app.get('/orders/user/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const userOrders = orders.filter(o => o.userId === userId);

    if (userOrders.length === 0) {
        return res.status(404).json({
        message: 'No orders found for this user'
        });
    }

    res.status(200).json(userOrders);
    });

    app.delete('/orders/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = orders.findIndex(o => o.id === id);

    if (index === -1) {
        return res.status(404).json({
        message: 'Order not found'
        });
    }

    const deletedOrder = orders.splice(index, 1);
    res.status(200).json(deletedOrder[0]);
    });

    app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
