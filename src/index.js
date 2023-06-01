// Importamos el módulo express para poder utilizarlo
const express = require('express');

// Importamos el módulo mongoose para poder utilizarlo
const mongoose = require('mongoose');

// Importamos el módulo dotenv para cargar variables de entorno
require('dotenv').config();

// Creamos una instancia de la aplicación express
const app = express();

// Definimos el puerto en el que queremos que escuche el servidor.
const port = process.env.PORT || 9000;

// Creamos un middleware para registrar cada solicitud en la consola
app.use("/", function (req, res, next) {
  console.log("Solicitud recibida: " + req.url);
  next();
});

// Definimos la ruta para la página principal del servidor
app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  </head>
  <body>
      <h1>Hello word!</h1>
  </body>
  </html>`) 
});

// Conectamos a la base de datos MongoDB utilizando la variable de entorno MONGODB_URI
mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log("CONECTADO A MONGO"))
  .catch((error)=>console.error(error));


app.listen(port);