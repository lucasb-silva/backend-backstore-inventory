// Carrega conteudo do .env para o process.env
require('dotenv').config()
// Módulo para criar aplicação express
const express = require('express');
// Módulo para permitir acesso a aplicaçao de diferentes dominios
const cors = require('cors');
// Módulo para lidar com erros async
require('express-async-errors')

// Banco de dados
const { connectToDatabase } = require('./db/database-connection');

// Routers
const produtoRouter = require('./produto/produto.router')

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
  app.use('/produto', produtoRouter)

  // Error Handling
  app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send({ error: 'Algo deu errado! '});
  })

  // Endpoint catch-all para rotas não encontradas (precisa ser o ultimo a ser declarado)
  app.use('*', (req, res) => {
    res.status(404).send({ error: 'Endpoint não encontrado.' })
  })

  // Numero da porta
  const PORT = process.env.PORT || 5000;

  // Configuração do Servidor
  app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`));

}

// Executamos a função main()
main()