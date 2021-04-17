const AccountRepository = module.exports
const DB = require('../config/databse')

AccountRepository.create = (account) => {
  return DB('accounts').insert(account)
}

AccountRepository.findById = (code) => {
  return DB('accounts').where({id: code}).select('*')
}

AccountRepository.edit = (code, account) => {
  return DB('accounts').where( { id: code } ).update(account)
}

AccountRepository.delete = (code) => {
  console.log(code+"Repo");
  return DB('accounts').where( { id: code} ).del()
}

AccountRepository.listAccountsByCustomer = (customerId) => {
  return DB('accounts').where({customerid: customerId}).select('*')
}