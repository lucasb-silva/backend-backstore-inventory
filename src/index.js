require('dotenv').config()
// Módulos
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db/database-connection');
//const { MongoClient, ObjectId } = require('mongodb');



// Declaramos a função main()
async function main() {
  // FIX: utilizar o connectToDatabase e receber o DB
  await connectToDatabase()


  // const collection = db.collection('produto')


  // Criando o objeto express
  const app = express();

  // Sinalizando para o Express que estamos usando JSON no Body
  app.use(express.json())

  // Habilitando cors para que a API seja consumida por diferentes dominios
  app.use(cors())


  // Requisição GET
  app.get('/', (req, res) => {
    res.send('Aplicativo Node está executando')
    res.end()
  })

  /* FIX: mover isso para a pasta `produto`
  // Endpoint Read All (GET) /inventario
  app.get('/inventario', async function (req, res) {
    // Acessamos a lista de itens na collection do MongoDB
    const itens = await collection.find().toArray()

    // Enviamos a lista de itens como resultado
    res.send(itens)
  })

  // Endpoint Read by ID [GET:id] /inventario/:id
  app.get('/inventario/:id', async function (req, res) {
    // Acessamos o parametro de rota ID
    const id = req.params.id

    // Acessa o item na collection usando o ID
    const item = await collection.findOne({ _id: new ObjectId(id) })

    // Checamos se o item existe
    if (!item) {
      return res.status(404).send('Item não encontrado')
    }

    // Enviamos o item como resposta
    res.send(item)
  })

  // Endpoint Create [POST] /inventario
  app.post('/inventario', async function (req, res) {
    // Acessamos o corpo da requisição
    const novoItem = req.body    

    // Checando se o `nome` está presente na requisição
    if (!novoItem || !novoItem.nome) {
      return res.send(400).send('Corpo da requisição deve conter a propriedade `nome`.')
    }

    // Adicionamos o item na collection
    await collection.insertOne(novoItem)

    // Exibimos uma mensagem de sucesso
    res.status(201).send(novoItem)
  })

  // Endpoint Update [PUT] /inventario
  app.put('/inventario/:id', async function (req, res) {
    // Acessamos o parâmetro de rota ID
    const id = req.params.id

    // Acessamos o Body da requisição
    const novoItem = req.body

    // Checando se o `nome` está presente na requisição
    if (!novoItem || !novoItem.nome) {
      return res.send(400).send('Corpo da requisição deve conter a propriedade `nome`.')
    }

    // Atualizamos na collection o novoItem pelo ID
    await collection.updateOne(
      { _id: new ObjectId(id)},
      { $set: novoItem}
    )

    // Enviamos uma mensagem de sucesso
    res.send(novoItem)
  })

  // Endpoint Delete [DELETE] /inventario/:id
  app.delete('/inventario/:id', async function (req, res) {
    // Acessamos o parâmtro de rota
    const id = req.params.id

    // // Checamos se o item com ID - 1 está na lista
    // if (!invetario[id - 1]) {
    //   return res.status(404).send('Item não encontrado.')
    // }

    // Removemos o item na collection usando o ID
    await collection.deleteOne({ _id: new ObjectId(id) })

    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso: ' + id)
  })
  */

  // Numero da porta
  const PORT = process.env.PORT || 5000;

  // Configuração do Servidor
  app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`));

}

// Executamos a função main()
main()