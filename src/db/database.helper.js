// Representação do tipo ObjectId
const { ObjectId } = require('mongodb');

// Validando se o ObjectId da requisição é valido
function validateObjectId(req, res, next) {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send({ error: 'ObjectID inválido ' });
  }

  next();
}

module.exports = {
  validateObjectId
}