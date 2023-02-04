const Order = require('../models/order.model');
const User = require('../models/user.model');

async function getOrders(req, res) {
  try {
    const orders = await Order.findAllForUser(res.locals.uid);
    res.render('customer/orders/all-orders', {
      orders: orders
    });
  } catch (error) {
    next(error);
  }
}

async function addOrderr(req, res, next) {
  const cart = res.locals.cart;

  let userDocument;
  try {
    userDocument = await User.findById(res.locals.uid);
  } catch (error) {
    return next(error);
  }

  const order = new Order(cart, userDocument);

  try {
    await order.save();
  } catch (error) {
    next(error);
    return;
  }

  req.session.cart = null;

  res.redirect('/orders');
}

function getSuccess(req, res) {
    res.render('customer/orders/success');
  }
  
  function getFailure(req, res) {
    res.render('customer/orders/failure');
  }

module.exports = {
  addOrderr: addOrderr,
  getOrders: getOrders,
  getSuccess: getSuccess,
  getFailure: getFailure
};