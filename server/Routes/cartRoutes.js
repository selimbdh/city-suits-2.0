var cartRouter = require('express').Router();
var cartController = require('../controllers/cartController');


cartRouter.route('/cart')
.get(cartController.retrieve)
.post(cartController.createOne)



cartRouter.route('/:id')
.get(cartController.retrieveOne)
.delete(cartController.deleteOne)

module.exports = cartRouter;