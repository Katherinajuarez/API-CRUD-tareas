const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  fechaLimite: { type: Date },
  completada: { type: Boolean, default: false },
  prioridad: { type: String, enum: ['alta', 'media', 'baja'], default: 'media' },
  etiquetas: [{ type: String }]
});

module.exports = mongoose.model('Tarea', tareaSchema);

