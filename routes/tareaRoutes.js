const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTareas);
router.put('/:id', tareaController.actualizarTarea);
router.delete('/:id', tareaController.eliminarTarea);

router.put('/:id/completar', tareaController.marcarTareaComoCompletada);

module.exports = router;

