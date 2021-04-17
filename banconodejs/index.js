const express = require('express'); //importa librería
const routes = require('./app/controllers/routes')

const app = express(); //creando servidor
app.use(express.json()) //configurando el servidor para envío y recepción de json

const PORT = 3000;

app.use('/banco', routes) //path inicial de end points

//corriendo el servidor
app.listen(PORT, () => {
  console.log('Escucahndo puerto:', PORT);
});