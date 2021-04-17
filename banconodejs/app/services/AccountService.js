const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')

AccountService.listAccountsByCustomer = async (customerId) => {
  //buscamos el cliente por id para verificar si existe
  const customerFound = await CustomerRepository.findById(customerId)

  //si la lista de resultados su tamño es ccero
  // es porque no existe un cliente con esa cedula
  if (customerFound.length === 0) {
    throw new Error('Customer does not exist')
  }

  //cuando se retorna directamente el resultado de una función que
  //haya que espera el resultado, no es necesario usar await
  return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async (account) => {
  //buscamos el cliente por el id para verificar si existe
  const customerFound = await CustomerRepository.findById(account.customerid)

  //si la lista de resultados su tamaño es cero
  //es porque no existe un cliente con esa cédula
  if (customerFound.length === 0) {
    throw new Error('Customer does not exist')
  }

  //consultando las cuentas del cliente..., el id del cliente viene en el objeto
  const accountsBycustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

  //verificando que solo tenga hasta 3
  if (accountsBycustomer.length >= 3) {
    throw new Error('No more than 3 accounts....')
  }

  account.openedat = new Date();//colocando la fecha de apertura
  account.amount = 0; //colocando el saldo inicial

  await AccountRepository.create(account)
}

AccountService.cancel = async (accountId) => {
  //verificamos que la account exista
  const accountFound = await AccountRepository.findById(accountId)

  if (accountFound.length === 0) {
    throw new Error('Account does not exist')
  }

  if (accountFound[0].amount != 0) {
    throw new Error('Account should be empty to cancel')
  }
  console.log(accountId+"Estoy acá")
  await AccountRepository.delete(accountId)

}

AccountService.withdraw = async (accountId, quantity) => {
  //verificamos la existencia del account
  const accountFound = await AccountRepository.findById(accountId)
  console.log(quantity.quantity)
  if (accountFound.length === 0) {
    throw new Error('Account does not exist')
  }

  if (accountFound[0].amount < quantity.quantity) {
    throw new Error('You do not have enough money')
  }

  let newAmount = accountFound[0].amount - quantity.quantity

  const newAccount = {
    ...accountFound[0],
    amount: newAmount
  }

  await AccountRepository.edit(accountId, newAccount)

}

AccountService.deposit = async (accountId, quantity) => {
  const accountFound = await AccountRepository.findById(accountId)
  if (accountFound.length === 0) {
    throw new Error('Account does not exist')
  }

  let newAmount = accountFound[0].amount + quantity.quantity

  const newAccount = {
    ...accountFound[0],
    amount: newAmount
  }

  await AccountRepository.edit(accountId, newAccount)

}


AccountService.transfer = async (idOrigin, idDestiny, quantity) => {
  
  const accountOrigin = await AccountRepository.findById(idOrigin)
  
  if (accountOrigin.length === 0) {
    throw new Error('account origin does not exist')
  }

  const accountDestiny = await AccountRepository.findById(idDestiny)
  
  if (accountDestiny.length === 0) {
    throw new Error('account destiny does not exist')
  }

  if (accountOrigin[0].amount < quantity.quantity) {
    throw new Error('account does not have enough money')
  }

  let newAmountOrigin = accountOrigin[0].amount - quantity.quantity

  let newAmountDestiny = accountDestiny[0].amount + quantity.quantity

  const newAccountOrigin = {
    ...accountOrigin[0],
    amount: newAmountOrigin
  }

  await AccountRepository.edit(idOrigin, newAccountOrigin)

  const newAccountDestiny = {
    ...accountDestiny[0],
    amount: newAmountDestiny
  }

  await AccountRepository.edit(idDestiny, newAccountDestiny)

}
