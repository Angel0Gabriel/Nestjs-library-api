# Projeto NestJS API

## Introdução

Este é um projeto de API construído com NestJS, TypeScript e MongoDB. A API fornece funcionalidades para gerenciar usuários, autores e livros, com autenticação JWT e controle de permissões.

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```env
   MONGODB_URI=<sua-uri-do-mongodb>
   JWT_SECRET=<sua-chave-secreta-jwt>
   ```

2. Configure o banco de dados no arquivo `database.module.ts`.

## Rodando a Aplicação

1. Inicie o servidor:

   ```bash
   npm run start
   ```

2. A aplicação estará disponível em `http://localhost:3000`.

## Documentação da API

A documentação Swagger pode ser acessada em `http://localhost:3000/api/docs`.

## Estrutura do Projeto

```plaintext
src/
├── auth/
│   ├── dto/
│   │   ├── auth-login.dto.ts
│   │   ├── auth-refreshToken.dto.ts
│   │   ├── auth-response.dto.ts
│   ├── guards/
│   │   ├── jwt-auth.guard.ts
│   │   ├── local-auth.guard.ts
│   │   ├── permissions.guard.ts
│   │   ├── refresh-jwt-auth.guard.ts
│   ├── strategies/
│   │   ├── jwt.strategy.ts
│   │   ├── local.strategy.ts
│   │   ├── refreshToken.strategy.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
├── author/
│   ├── dto/
│   │   ├── create-author.dto.ts
│   │   ├── query.dto.ts
│   │   ├── update-author.dto.ts
│   ├── interfaces/
│   │   ├── author.interface.ts
│   ├── repositories/
│   │   ├── author.repository.ts
│   ├── schemas/
│   │   ├── author.schema.ts
│   ├── author.controller.ts
│   ├── author.module.ts
│   ├── author.provider.ts
│   ├── author.service.ts
├── book/
│   ├── dto/
│   │   ├── create-book.dto.ts
│   │   ├── query.dto.ts
│   │   ├── update-book.dto.ts
│   ├── interfaces/
│   │   ├── book.interface.ts
│   ├── repositories/
│   │   ├── book.repository.ts
│   ├── schemas/
│   │   ├── book.schema.ts
│   ├── book.controller.ts
│   ├── book.module.ts
│   ├── book.provider.ts
│   ├── book.service.ts
├── common/
│   ├── decorators/
│   │   ├── roles.decorators.ts
│   ├── lib/
│   │   ├── trim-query-params.ts
├── database/
│   ├── database.module.ts
│   ├── database.provider.ts
├── user/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   ├── update-user.dto.ts
│   ├── interfaces/
│   │   ├── user.interface.ts
│   ├── repositories/
│   │   ├── user.repository.ts
│   ├── schemas/
│   │   ├── user.schema.ts
│   ├── user.controller.ts
│   ├── user.module.ts
│   ├── user.provider.ts
│   ├── user.service.ts
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   ├── jest-e2e.json
```

## Endpoints da API

### Autenticação

- **POST api/auth/login**: Autenticar um usuário.
- **POST api/auth/refresh**: Atualizar o token JWT.

## Após realizar a autenticação, passar o access_token no Header da requisição ```Authorization Bearer <access_token>````, para poder acessar as rotas protegidas.

### Usuários

- **POST /users**: Criar um novo usuário.
- **GET /users**: Obter todos os usuários.
- **GET /users/:id**: Obter um usuário por ID.
- **PATCH /users/:id**: Atualizar um usuário por ID.
- **DELETE /users/:id**: Deletar um usuário por ID.

### Autores

- **POST /authors**: Criar um novo autor.
- **GET /authors**: Obter todos os autores.
- **GET /authors/:id**: Obter um autor por ID.
- **PATCH /authors/:id**: Atualizar um autor por ID.
- **DELETE /authors/:id**: Deletar um autor por ID.

### Livros

- **POST /books**: Criar um novo livro.
- **GET /books**: Obter todos os livros.
- **GET /books/:id**: Obter um livro por ID.
- **PATCH /books/:id**: Atualizar um livro por ID.
- **DELETE /books/:id**: Deletar um livro por ID.

## Tecnologias Utilizadas

- NestJS
- TypeScript
- MongoDB
- Mongoose
- JWT para autenticação
- Swagger para documentação da API

---
