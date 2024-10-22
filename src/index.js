require('dotenv').config()
// Módulos
const express = require('express');
const cors = require('cors');

// Database
const { connectToDatabase } = require('./db/database-connection');

// Routers
const inventarioRouter = require('./inventario/inventario.router')

// Declaramos a função main()
async function main() {
  // Conectamos no DB  
  await connectToDatabase()

  // Criando o objeto express
  const app = express();

  // Sinalizando para o Express que estamos usando JSON no Body
  app.use(express.json())

  // Habilitando cors para que a API seja consumida por diferentes dominios
  app.use(cors())

  // Endpoint de status da aplicação
  app.get('/', (req, res) => {
    res.send('Aplicativo está executando')
    res.end()
  })

  // Router de Inventário
  app.use('/inventario', inventarioRouter)

  // Numero da porta
  const PORT = process.env.PORT || 5000;

  // Configuração do Servidor
  app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`));

}

// Executamos a função main()
main()