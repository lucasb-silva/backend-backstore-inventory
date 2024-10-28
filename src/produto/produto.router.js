// Módulo para criar aplicação express
const express = require('express');
// Interage com as requisiçõs do usuário
const controller = require('./produto.controller');
// Faz validação do ObjectId enviado nas requisições
const { validateObjectId } = require('../db/database.helper');

const router = express.Router()

router.get('/', controller.readAll)
router.get('/:id', validateObjectId, controller.readById)
router.post('/', controller.create)
router.put('/:id', validateObjectId, controller.updateByID)
router.delete('/:id', validateObjectId, controller.deleteByID)

module.exports = router