# 📓 Agenda API (Back-end)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

API RESTful construída com Node.js, Express para servir como back-end para uma aplicação de agenda de contatos (CRUD).

Este projeto é a parte servidora da aplicação "Agenda" e é consumido pelo [agenda-frontend](https://github.com/gbrlstrack/agenda-frontend).

## ✨ Funcionalidades

* **CRUD completo** de usuários/contatos (Criar, Ler, Atualizar, Deletar).
* Validação de dados na criação e atualização de contatos.
* Conexão simplificada com MongoDB através do Mongoose.
* Rotas estruturadas e controladores separados da lógica de negócio.

## 🚀 Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript no servidor.
* **Express.js:** Framework para criação das rotas e gerenciamento da API.
* **CORS:** Habilitação de acesso para o front-end.
* **Dotenv:** Gerenciamento de variáveis de ambiente.
* **Nodemon:** Live-reload para o ambiente de desenvolvimento.

## 🛠️ Pré-requisitos

* [Node.js](https://nodejs.org/en/) (v18 ou superior recomendado).
* [MongoDB](https://www.mongodb.com/try/download/community) (Instância local ou um URI de conexão de um serviço cloud, como o MongoDB Atlas).

## ⚙️ Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/gbrlstrack/agenda-backend.git](https://github.com/gbrlstrack/agenda-backend.git)
    cd agenda-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Renomeie o arquivo `.env.example` para `.env`.
    * Abra o arquivo `.env` e configure as variáveis:

    ```env
    # Porta em que o servidor irá rodar (ex: 3001)
    PORT=3001

    # URI de conexão com seu banco de dados MongoDB
    # (Local) Ex: mongodb://127.0.0.1:27017/agendaDB
    # (Cloud Atlas) Ex: mongodb+srv://user:pass@cluster.mongodb.net/agendaDB
    DB_CONNECTION=SUA_URI_DE_CONEXAO_DO_MONGODB
    ```

4.  **Execute o servidor (modo de desenvolvimento):**
    * Este comando usa o `nodemon` para reiniciar o servidor automaticamente a cada alteração no código.

    ```bash
    npm run start:dev
    ```

5.  **Servidor em Produção (opcional):**
    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:PORTA_ESCOLHIDA` (ex: `http://localhost:3001`).

## 📋 Endpoints da API

A API segue os padrões REST para o recurso `/users`:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/users` | Cria um novo usuário (contato). Requer `name`, `email` e `phone` no body. |
| `GET` | `/users` | Retorna uma lista de todos os usuários. |
| `GET` | `/users/:id` | Retorna um usuário específico pelo seu ID. |
| `PATCH` | `/users/:id` | Atualiza um usuário existente pelo ID. |
| `DELETE` | `/users/:id` | Deleta um usuário pelo ID. |

---
