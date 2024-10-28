// Módulo para utilizar o serviço MongoDB
const { MongoClient } = require("mongodb")

// Preparamos as informações de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'backStoreInventory'

// Cliente para realizar conexão com o DB
const client = new MongoClient(dbUrl)

async function connectToDatabase() {
  // Realizamos a conexão com o banco de dados
  console.log('Conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')  
}

// Retorna o banco de dados
function getDatabase() {
  return client.db(dbName)
}

module.exports = {
  connectToDatabase,
  getDatabase
}