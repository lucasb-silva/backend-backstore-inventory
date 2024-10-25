const service = require('./produto.service')
const produto = require('./produto.entity')

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
  // Acessamos e validamos corpo da requisição
  const {error, value: novoItem} = produto.validate(req.body)

  // Checando se temos algum erro na validação
  if (error) {
    return res.status(400).send({ error: error.details[0].message })
  }

  // Adicionamos o item no DB através do Service
  await service.create(novoItem)

  // Exibimos uma mensagem de sucesso
  res.status(201).send(novoItem)
}

async function updateByID(req, res) {
  // Acessamos o parâmtro de rota
  const id = req.params.id
  
  // Acessamos e validamos corpo da requisição
  const {error, value: novoItem} = produto.validate(req.body)

  // Checando se temos algum erro na validação
  if (error) {
    return res.status(400).send({ error: error.details[0].message })
  }

  // Atualizamos o item no DB através do Service
  await service.updateByID(id, novoItem)

  // Enviamos uma mensagem de sucesso
  res.send(novoItem)
}

async function deleteByID(req, res) {
  // Acessamos o parâmtro de rota
  const id = req.params.id

  // Removemos o item do DB através do Service
  const result = await service.deleteByID(id)

  // Verifica se o item existe na base de dados
  if(result.deletedCount){
    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso: ' + id)
  } else {
    // Enviamos uma mensagem de erro
    res.status(404).send('Item não existe na base de dados.')
  }
  
  
}

module.exports = {
  readAll,
  readById,
  create,
  updateByID,
  deleteByID
}