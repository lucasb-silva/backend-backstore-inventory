// Módulo express
const express = require('express');

// Módulo cors
const cors = require('cors')

// Criando o objeto express
const app = express();

// Sinalizando para o Express que estamos usando JSON no Body
app.use(express.json())
// Habilitando cors para que a API seja consumida por diferentes dominios
app.use(cors())


// Handling GET request
app.get('/', (req, res) => { 
    res.send('Aplicativo Node está executando') 
    res.end() 
})

// Lista em memória para o Inventário
const invetario = ['Mouse', 'Teclado Gamer', 'Headphone']

// Endpoint Read All (GET) /inventario
app.get('/inventario', function(req, res){
    // Filtrando itens válidos da lista que não são atualizados no JavaScript
    res.send(invetario.filter(Boolean))
})
// Endpoint Read by ID [GET:id] /inventario/:id
app.get('/inventario/:id', function(req, res){
    // Acessamos o parametro de rota ID
    const id = req.params.id

    // Acessa o item na lista usando o ID-1
    const item = invetario[id - 1]

    // Checamos se o item existe
    if(!item){
        return res.status(404).send('Item não encontrado')
    }

    // Enviamos o item como resposta
    res.send(item)
})

// Endpoint Create [POST] /inventario
app.post('/inventario', function(req, res){
    // Acessamos o corpo da requisição
    const body = req.body

    // Acessamos a propriedade `nomeDoProduto` do body
    const nome = body.nome

    // Checando se o `nome` está presente na requisição
    if (!nome){
        return res.send(400).send('Corpo da requisição deve conter a propriedade `nome`.')
    }

    // Adicionamos o item na lista
    invetario.push(nome)

    // Exibimos uma mensagem de sucesso
    res.status(201).send('Item adicionado com sucesso: ' + nome)
})

// Endpoint Update [PUT] /inventario
app.put('/inventario/:id', function(req, res){
    // Acessamos o parâmetro de rota ID
    const id = req.params.id

    // Acessamos o Body da requisição
    const body = req.body

    // Acessamos a propriedade `nomeDoProduto` do body
    const nome = body.nome

    // Checando se o `nome` está presente na requisição
    if (!nome){
        return res.send(400).send('Corpo da requisição deve conter a propriedade `nome`.')
    }

    // Atualizamos o item na lista
    invetario[id - 1] = nome

    // Enviamos uma mensagem de sucesso
    res.send('Item atualizado com sucesso: ' + id + ' - ' + nome)
})

// Endpoint Delete [DELETE] /inventario/:id
app.delete('/inventario/:id', function(req, res){
    // Acessamos o parâmtro de rota
    const id = req.params.id

    // Checamos se o item com ID - 1 está na lista
    if (!invetario[id - 1]) {
        return res.status(404).send('Item não encontrado.')
    }

    // Removemos o item da lista
    delete invetario[id - 1]

    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso: ' + id)
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));