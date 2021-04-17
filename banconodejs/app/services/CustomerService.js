const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')

CustomerService.create = async (customer) => {
  //buscamos el cliente por id para verificar si existe
  const customerFound = await CustomerRepository.findById(customer.id)

  //si la lista de resultados su tamaño es mayor que cero
  //es porque existe un cliente con esa cédula
  if (customerFound.length > 0) {
    throw new Error('Customer already exist')
  }

  //se crea el cliente
  await CustomerRepository.create(customer)
}

CustomerService.edit = async (id, customer) => {
  //buscamos el cliente por id para verificar si existe
  const customerFound = await CustomerRepository.findById(id)

  //si la lista  de resultados su tamaño es cero
  //es porque no existe un cliente con esa cédula
  if (customerFound.length === 0) {
    throw new Error('Customer does not exist')
  }

  //se actualiza el cliente
  await CustomerRepository.edit(id, customer)

}

CustomerService.delete = async (idCustomer) => {
  //se consulta las cuentas del cliente, se usa await porque debemos
  //esperar el resultado para seguir
  const customerAccounts = await AccountRepository.listAccountsByCustomer(idCustomer)

  //si el tamaño de la lista es mayor a cero es porque tiene cuentas
  //y se lanza la excepcion
  if (customerAccounts.length > 0) {
    throw new Error('customer with accounts, can not be deleted')
  }

  //se elimina el cliente...
  await CustomerRepository.delete(idCustomer)
}

CustomerService.findCustomer = async (idCustomer) => {
  const customers = await CustomerRepository.findById(idCustomer)

  if (customers.length === 0) return undefined;
  
  return customers[0];
}
