require('dotenv').config()
// Módulos
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db/database-connection');
const inventarioRouter = require('./inventario/inventario.router')
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
    res.send('Aplicativo está executando')
    res.end()
  })

  app.use('/inventario', inventarioRouter)

  /* FIX: mover isso para a pasta `produto`
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