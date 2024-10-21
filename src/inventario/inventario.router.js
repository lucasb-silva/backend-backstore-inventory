const express = require('express');
const controller = require('./inventario.controller');

const router = express.Router()

router.get('/', controller.readAll)
router.get('/:id', controller.readById)
router.post('/', controller.create)
router.put('/:id', controller.updateByID)
router.delete('/:id', controller.deleteByID)

module.exports = router