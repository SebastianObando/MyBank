const AccountController = module.exports
//importando el módulo de la lógica..
const AccountService = require('../services/AccountService');

AccountController.listAccountsBycustomer = async (req, res, next) => {
  const params = req.params;

  try {
    const response = await AccountService.listAccountsByCustomer(params.id)

    //enviando respuesta al cliente que retorna lógica
    res.send(response)
    //---------------------
  } catch (error) {
    console.log({error});
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}

AccountController.createAccount = async (req, res, next) => {
  const body = req.body;

  try {
    await AccountService.create(body)
    res.send({message: 'account created'})
    //-------------------
  } catch (error) {
    console.log({error});
    res.status(500).send({error: error.message}).end();
    next(error);
  }

}

AccountController.deleteAccount = async (req, res, next) => {
  const params = req.params;

  try {
    await AccountService.cancel(params.id)
    res.send({message: 'account canceled'})
    //-----------------------------
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}

AccountController.withdrawAccount = async (req, res, next) => {
  const params = req.params;
  const body = req.body;

  try {
    await AccountService.withdraw(params.id, body)
    res.send({message: 'withdraw completed succesfully'})
    //-------------------------------
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}

AccountController.depositAccount = async (req, res, next) => {
  const params = req.params;
  const body = req.body;

  try {
    await AccountService.deposit(params.id, body)
    res.send({message: 'deposit completed succesfully'})
    //-------------------------------
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}

AccountController.transferToAnotherAccount = async (req, res, next) => {
  const params = req.params;
  const body = req.body;

  try {
    await AccountService.transfer(params.idOrigin, params.idDestiny, body)
    res.send({message: 'transfer completed succesfully'})
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}