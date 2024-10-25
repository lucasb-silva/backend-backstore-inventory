const Joi = require('joi');

const produto = Joi.object({
  nome: Joi.string().min(3).max(30).required(),
  imagem: Joi.string().uri().optional(),
  quantidade: Joi.number().min(0).required(),
  descricao: Joi.string().min(3).max(600).required()
});

module.exports = produto