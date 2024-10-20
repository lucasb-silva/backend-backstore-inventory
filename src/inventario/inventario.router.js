const express = require('express');
const { readAll, readById, create, updateByID, deleteByID } = require('./inventario.controller');

const router = express.Router()

router.get('/', readAll)
router.get('/:id', readById)
router.post('/', create)
router.put('/:id', updateByID)
router.delete('/:id', deleteByID)

module.exports = router