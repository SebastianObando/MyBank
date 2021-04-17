const CustomerRepository = module.exports
const DB = require('../config/databse')

CustomerRepository.create = (customer) => {
  return DB('customers').insert(customer)
}

CustomerRepository.findById = (cedula) => {
  return DB('customers').where({id: cedula}).select('*')
}

CustomerRepository.edit = (cedula, customer) => {
  return DB('customers').where( { id: cedula } ).update(customer)
}

CustomerRepository.delete = (cedula) => {
  return DB('customers').where( { id: cedula} ).del()
}