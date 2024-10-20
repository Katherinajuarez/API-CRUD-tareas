const express = require('express');
const mongoose = require('mongoose');
const tareaRoutes = require('./routes/tareaRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/tareas', tareaRoutes);

mongoose.connect('mongodb://localhost:27017/listaTareas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(err => console.error(err));
