const CustomerController = module.exports
//importando el modulo de la lógica..
const CustomerService = require('../services/CustomerService');

/*
Los parametros req, res y next siempre son requeridos
para el el correcto funcionamiento del controlador,
aca no va definido el path, se hace en otra parte.
*/

CustomerController.delete = async (req, res, next) => {
  //extrayendo los PathParams de la petición
  const params = req.params;

  try {
    //se supone que el id lle así /customers/:id (aca no es con {} si no con :)
    //await (ya que el metodo es async) para esperar que termine.
    await CustomerService.delete(params.id)

    //enviando respuesta al cliente (postman por ejemplo)
    res.send({message: 'customer deleted'})
    //----------------------------
  } catch (error) { //manejando las excepciones
    console.log({error});
    //retornando al cliente (postman por ejemplo) el error
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}

//PUT /customer/:id Body: datos a editar..
CustomerController.edit = async (req, res, next) => {
  const params = req.params;
  //extrayendo el body de la petición
  const body = req.body;

  try {
    await CustomerService.edit(params.id, body)

    res.send({message: 'customer updated'})
    //-------------------------------
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message}).end();
    next(error);
  }

}

//POST /customers Body datos para crear
CustomerController.create = async (req, res, next) => {
  const body = req.body;

  try {
    await CustomerService.create(body)

    res.send({message: 'customer created'})
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message}).end();
    next(error);
  }
}