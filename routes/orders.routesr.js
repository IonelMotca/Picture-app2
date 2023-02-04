const express = require('express');

const ordersController = require('../controllers/orders.controllerr');

const router = express.Router();

router.post('/', ordersController.addOrderr); // /orders

router.get('/', ordersController.getOrders); // /orders

router.get('/success', ordersController.getSuccess);

router.get('/failure', ordersController.getFailure);

module.exports = router;