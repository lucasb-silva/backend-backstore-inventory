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

async function create(req, res) {
  // Acessamos o corpo da requisição
  const novoItem = req.body

  // Checando se o `nome` está presente na requisição
  if (!novoItem || !novoItem.nome) {
    return res.send(400).send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  // Adicionamos o item no DB através do Service
  await service.create(novoItem)

  // Exibimos uma mensagem de sucesso
  res.status(201).send(novoItem)
}

async function updateByID(req, res) {
  // Acessamos o parâmetro de rota ID
  const id = req.params.id

  // Acessamos o Body da requisição
  const novoItem = req.body

  // Checando se o `nome` está presente na requisição
  if (!novoItem || !novoItem.nome) {
    return res.send(400).send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  // Atualizamos o item no DB através do Service
  await service.updateByID(id, novoItem)

  // Enviamos uma mensagem de sucesso
  res.send(novoItem)
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