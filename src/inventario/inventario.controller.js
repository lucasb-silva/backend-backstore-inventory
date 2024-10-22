const service = require('./inventario.service')

async function readAll(req, res) {
  // Acessamos a lista de produtos no Service
  const items = await service.readAll()

  // Enviamos a lista de produtos como resultado
  res.send(items)
}

async function readById(req, res) {
  // Acessamos o parametro de rota ID
  const id = req.params.id

  // Acessamos o produto no service através do ID
  const item = await service.readById(id)

  // Checamos se o item existe
  if (!item) {
    return res.status(404).send('Item não encontrado')
  }

  res.send(item)
}

function create(req, res) {
  res.send('Create')
}

function updateByID(req, res) {
  res.send('Update By ID')
}

function deleteByID(req, res) {
  res.send('Delete By ID')
}

module.exports = {
  readAll,
  readById,
  create,
  updateByID,
  deleteByID
}