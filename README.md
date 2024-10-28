# FullStack Web | Teste de Emprego | Salvatore Academy

Projeto prático do curso FullStack Web da Salvatore Academy simulando teste de emprego. Veja como instalar e usar a aplicação:

----------------

### Requisitos

*   Node.js versão 18.17.1 ou superior
*   MongoDB versão 6.9.0 ou superior
*   React versão 18.3.1 ou superior

### Passos de Instalação

#### Backend

1.  Clone o repositório do backend: `git clone https://github.com/lucasb-silva/backend-backstore-inventory.git`
2.  Navegue até o diretório do projeto: `cd backend-backstore-inventory`
3.  Instale as dependências: `npm install`
4.  Configure as variáveis de ambiente no arquivo `.env`:
    
        DATABASE_URL=your_mongodb_uri
        
    
5.  Inicie o servidor backend: `npm start`

#### Frontend

1.  Clone o repositório do frontend: `git clone https://github.com/lucasb-silva/frontend-backstore-inventory.git`
2.  Navegue até o diretório do projeto: `cd frontend-backstore-inventory`
3.  Instale as dependências: `npm install`
4.  Inicie o servidor frontend: `npm run dev`
5.  Acesse a aplicação no navegador em `http://localhost:5173/`
6.  A aplicação está usando a API online, caso queira usar a API localmente configure o arquivo `src/api/api.js`

        export const Api = {
            baseUrl: 'http://localhost:5000', # Troque a API online pela API local

### Exemplos de Uso da API

Exemplos de requisições executadas localmente pelo Thunder Client:

#### Create (POST)

![image](https://github.com/user-attachments/assets/6925b421-11af-47bd-b52f-19d3cb2b83b6)

#### Read (GET)

![image](https://github.com/user-attachments/assets/16beda0d-15cb-4cf5-a9e4-cc4b0ff157ab)

----

Exemplos de requisições executadas na API online pelo Thunder Client:

#### Update (PUT)

![image](https://github.com/user-attachments/assets/b3cd33d4-d707-45fd-b16b-9d5e9a36403c)

#### Delete (DELETE)

![image](https://github.com/user-attachments/assets/0a72e3e4-3f68-4ffa-aed4-92285d1f3d51)


### Acesso à Aplicação Online

*   URL do frontend: [https://frontend-backstore-inventory.onrender.com/](https://frontend-backstore-inventory.onrender.com/)
*   URL do backend: [https://backend-backstore-inventory.onrender.com](https://backend-backstore-inventory.onrender.com)

### Registro dos testes e validações

* Link do Google Sheets: [Testes unitários](https://docs.google.com/spreadsheets/d/1f1mwABtqtfmQlTpFM-9c6Rg7Etf26S4JExBvedzJ1pE/edit?usp=sharing)
