const express = require('express');
const mongoose = require('mongoose');
const tareaRoutes = require('./routes/tareaRoutes'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para leer el cuerpo de las solicitudes JSON
app.use('/tareas', tareaRoutes); // Usa las rutas de tarea

mongoose.connect('mongodb://localhost:27017/listaTareas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(err => console.error(err));
