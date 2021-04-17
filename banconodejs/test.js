 //importar el repositorio
const ClientRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountsRepository')
const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')
console.log('probando....')

/*
ClientRepository.create({
  name: 'juan',
  lastname: 'ferrer',
  id: '4321',
  email: 'juan@juan.com'
}).then(console.log) //para que el programa espere a que la operación termine

async function probandoElBuscar() {
  const cliente = await ClientRepository.findById('4321')
  console.log(cliente)
}

probandoElBuscar()
.then(console.log('OK')) */

/* //async, siempre que hay un await dentro de una función, la función de llevar async
async function probandoElEditar() {
  //await es para que nodejs espere que termine la ejecución antes
  // de pasar a la siguiente instrucción
  await ClientRepository.edit('4321', {
    name: 'jose',
    lastname: 'perez',
  })
}

probandoElEditar()
.then(console.log("OK")) */

/* async function probandoEliminar() {
  await ClientRepository.delete('4321')
}

probandoEliminar()
.then(console.log('OK')) */


/* async function probandoElingresarAccount() {
  await AccountRepository.create({
    id: '341',
    amount: '500000',
    customerid: '3333',
    openedat: '2021-08-02 00:00:00'
  })
}

probandoElingresarAccount()
.then(console.log('OK'))  */
/* 
/* async function probarlistarCuentas() {
  const list = await AccountRepository.listAccountsByCustomer('3333')
  console.log(list)
}

probarlistarCuentas()
.then(console.log('OK')) */

/* async function probarCrearCliente() {
  await CustomerService.create({
    id: '2345',
    lastname: 'baca',
    name: 'fabian',
    email: 'fabian@gmail.com'
  })
}

probarCrearCliente().then(console.log('OK')) */

/* async function probarEditar() {
  await CustomerService.edit('10372',{
    lastname: 'quitian',
    name: 'obdulio',
  })
}

probarEditar().then(console.log('OK')) */

/* async function probarEliminar() {
  await CustomerService.delete('3333')
}

probarEliminar().then(console.log('OK')) */

/* async function probarBuscar() {
  const customer = await CustomerService.findCustomer('3333')
  console.log(customer)
}

probarBuscar().then(console.log('OK')) */

/* async function probar() {
  const result = await AccountService.listAccountsByCustomer('25157')
  console.log(result)
}

probar().then(console.log('OK')) */

/* async function probar() {
  const result = await AccountService.create({
    id: '1111',
    customerid: '3333',
  })
  console.log(result)
}

probar().then(console.log('OK')) */

/* async function probarEliminarCuenta() {
  await AccountRepository.delete('3410')
}

probarEliminarCuenta().then(console.log('OK')) */

async function probarRetiro() {
  await AccountService.withdraw('341', {'quantity': 100000})
}

probarRetiro().then(console.log('OK'))