const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')

const router = express.Router();

//Customers
router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/accounts', AccountController.listAccountsBycustomer);
router.post('/customers', CustomerController.create);


//Accounts
router.post('/accounts', AccountController.createAccount);
router.delete('/accounts/:id', AccountController.deleteAccount);
router.patch('/accounts/:id/withdraw', AccountController.withdrawAccount);
router.patch('/accounts/:id/deposit', AccountController.depositAccount);
router.patch('/accounts/:idOrigin/transfer/:idDestiny', AccountController.transferToAnotherAccount);

module.exports = router;