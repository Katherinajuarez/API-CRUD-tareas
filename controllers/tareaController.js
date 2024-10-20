const Tarea = require('../models/tarea');

//Crear nueva tarea
const crearTarea = async (req, res) => {
  const { titulo, descripcion, fechaLimite, prioridad, etiquetas } = req.body;

  const nuevaTarea = new Tarea({
    titulo,
    descripcion,
    fechaLimite,
    prioridad,
    etiquetas
  });

  try {
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Obtener tareas
const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Actualizar
const actualizarTarea = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, fechaLimite, prioridad, etiquetas } = req.body;

  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(
      id,
      { titulo, descripcion, fechaLimite, prioridad, etiquetas },
      { new: true }
    );

    if (!tareaActualizada) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json(tareaActualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Eliminar
const eliminarTarea = async (req, res) => {
  const { id } = req.params;

  try {
    const tareaEliminada = await Tarea.findByIdAndDelete(id);
    if (!tareaEliminada) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Marcar como completada
const marcarTareaComoCompletada = async (req, res) => {
  const { id } = req.params;

  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(
      id,
      { completada: true },
      { new: true }
    );

    if (!tareaActualizada) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json(tareaActualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  crearTarea,
  obtenerTareas,
  actualizarTarea,
  eliminarTarea,
  marcarTareaComoCompletada
};
