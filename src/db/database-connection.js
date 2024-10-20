const { MongoClient } = require("mongodb")

// Preparamos as informações de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'backStoreInventory'

async function connectToDatabase() {
  // Realizamos a conexão com o client MongoDB
  const client = new MongoClient(dbUrl)
  console.log('Conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')

  // Realizamos a conexão com o banco de dados
  const db = client.db(dbName)

  // FIX: usar o db de alguma forma
}

module.exports = {
  connectToDatabase
}