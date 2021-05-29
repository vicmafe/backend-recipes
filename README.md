# Projeto Cookmaster


# Sobre o projeto

Construção aplicação backend, aplicando validações, utilizando arquitetura MSC (Models, Service e Controllers). Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, pros mais íntimos 😜).


# Sumário

- [Objetivo do projeto](#entregáveis)
- [Habilidades desenvolvidas](#habilidades)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)
    - [Todos os seus endpoints devem estar no padrão REST](#todos-os-seus-endpoints-devem-estar-no-padrão-rest)
    - [1 - Crie um endpoint para o cadastro de usuários](#1---crie-um-endpoint-para-o-cadastro-de-usuários)
    - [2 - Crie um endpoint para o login de usuários](#2---crie-um-endpoint-para-o-login-de-usuários)
    - [3 - Crie um endpoint para o cadastro de receitas](#3---crie-um-endpoint-para-o-cadastro-de-receitas)
    - [4 - Crie um endpoint para a listagem de receitas](#4---crie-um-endpoint-para-a-listagem-de-receitas)
    - [5 - Crie um endpoint para visualizar uma receita específica](#5---crie-um-endpoint-para-visualizar-uma-receita-específica)
    - [6 - Permissões do usuário admin](#6---permissões-do-usuário-admin)
    - [7 - Crie um endpoint para a edição de uma receita](#7---crie-um-endpoint-para-a-edição-de-uma-receita)
    - [8 - Crie um endpoint para a exclusão de uma receita](#8---crie-um-endpoint-para-a-exclusão-de-uma-receita)
    - [9 - Crie um endpoint para a adição de uma imagem a uma receita](#9---crie-um-endpoint-para-a-adição-de-uma-imagem-a-uma-receita)
    - [10 - Crie um endpoint para acessar a imagem de uma receita](#10---crie-um-endpoint-para-acessar-a-imagem-de-uma-receita)
  - [Bônus](#bônus)
    - [11 - Cadastramento de admin](#11---cadastramento-de-admin)
  - [Como rodar](#como-rodar)
  - [Sobre autor](#sobre-autor)

---


# Objetivo do projeto:

Desenvolver backend de um crud de receitas, utilizando nodejs com auxilio do express, construir endpoints com conexão ao banco de dados não relacional, MongoDb. 

---


# Habilidades desenvolvidas:

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

---


# Requisitos do projeto

## Lista de requisitos

###  Todos os seus endpoints devem estar no padrão REST

- Use os verbos HTTP adequados para cada operação.

- Agrupe e padronize suas URL em cada recurso.

- Garanta que seus endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorne os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

---

### 1 - Crie um endpoint para o cadastro de usuários

[x] A rota deve ser (`/users`).

[x] No banco um usuário precisa ter os campos Email, Senha, Nome e Role.

[x] Para criar um usuário através da API, todos os campos são obrigatórios, com exceção do Role.

[x] O campo Email deve ser único.

[x] Usuários criados através desse endpoint devem ter seu campo Role com o atributo _user_, ou seja, devem ser usuários comuns, e não admins.

[x] O body da requisição deve conter o seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

### 2 - Crie um endpoint para o login de usuários

[x] A rota deve ser (`/login`).

[x] A rota deve receber os campos Email e Senha e esses campos devem ser validados no banco de dados.

[x] Um token `JWT` deve ser gerado e retornado caso haja sucesso no login. No seu payload deve estar presente o id, email e role do usuário.

[x] O body da requisição deve conter o seguinte formato:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### 3 - Crie um endpoint para o cadastro de receitas

[x] A rota deve ser (`/recipes`).

[x] A receita só pode ser criada caso o usuário esteja logado e o token `JWT` validado.

[x] No banco, a receita deve ter os campos Nome, Ingredientes, Modo de preparo, URL da imagem e Id do Autor.

[x] Nome, ingredientes e modo de preparo devem ser recebidos no corpo da requisição, com o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

[x] O campo dos ingredientes pode ser um campo de texto aberto.

[x] O campo ID do autor, deve ser preenchido automaticamente com o ID do usuário logado, que deve ser extraído do token JWT.

[x] A URL da imagem será preenchida através de outro endpoint


### 4 - Crie um endpoint para a listagem de receitas

[x] A rota deve ser (`/recipes`).

[x] A rota pode ser acessada por usuários logados ou não


### 5 - Crie um endpoint para visualizar uma receita específica

[x] A rota deve ser (`/recipes/:id`).

[x] A rota pode ser acessada por usuários logados ou não



### 6 - Permissões do usuário admin

[x] Crie um arquivo `seed.js` na raiz do projeto com uma query do Mongo DB capaz de inserir um usuário na coleção _users_ com os seguintes valores:

`{ name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' }`

**Obs.:** Esse usuário tem o poder de criar, deletar, atualizar ou remover qualquer receita, independente de quem a cadastrou. 


### 7 - Crie um endpoint para a edição de uma receita

[x] A rota deve ser (`/recipes/:id`).

[x] A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

[x] A receita só pode ser atualizada caso pertença ao usuário logado, ou caso esse usuário seja um admin.

[x] O corpo da requisição deve receber o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

### 8 - Crie um endpoint para a exclusão de uma receita

[x] A rota deve ser (`/recipes/:id`).

[x] A receita só pode ser excluída caso o usuário esteja logado e o token `JWT` validado.

[x] A receita só pode ser excluída caso pertença ao usuário logado, ou caso o usuário logado seja um admin.


### 9 - Crie um endpoint para a adição de uma imagem a uma receita

[x] A rota deve ser (`/recipes/:id/image/`).

[x] A imagem deve ser lida do campo `image`.

[x] O endpoint deve aceitar requisições no formato `multipart/form-data`.

[x] A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

[x] A receita só pode ser atualizada caso pertença ao usuário logado ou caso o usuário logado seja admin.

[x] O upload da imagem deverá ser feito utilizando o `Multer`.

[x] O nome do arquivo deve ser o ID da receita.

[x] A URL completa para acessar a imagem através da API deve ser gravada no banco de dados, junto com os dados da receita.


### 10 - Crie um endpoint para acessar a imagem de uma receita

[x] As imagens devem estar disponíveis através da rota `/images/<id-da-receita>.jpeg` na API.


## Bônus

### 11 - Cadastramento de admin

[x] A rota deve ser (`/users/admin`).

[x] Só será possível adicionar um admin caso esta ação esteja sendo feita por outro admin, portanto, deve ser validado se há um admin logado.

[x] Por padrão, as requisições pra esse endpoint devem adicionar um usuário com a role _admin_.

[x] O corpo da requisição deve ter o seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
  
# Como rodar

Para rodar localmente, siga os passos:

1 - Abra um terminal;

2 - Clone este repositorio;

3 - Instale as dependencias na pasta raiz do projeto digitando: npm install;

4 - Instale o express e os pactoes nodemon e body-parser digitando: npm install express nodemon -D body-parser;

5 - Instale os pactoes nodemon e body-parser digitando: npm install nodemon -D body-parser;

6 - Assim que finalizar a instalação, rode a aplicação digitando: npm start;

7 - Utilize uma ferramenta para testar serviços RESTfull (Web APis) como Postman ou Insomnia e teste os endpoints dos requisitos;

8 - É possivel rodar a suite de testes digitando: npm test;

**IMPORTANTE: É necessario ter MongoDB instalado e rodando na sua máquina previamente.**


# Sobre o autor

<a href="https://www.linkedin.com/in/victor-mateus-ferreira/" align="center">
 <img style={border-radius: 100p} src="./AvatarII.jpeg" width="200px;" alt=""/>
 <br>
 <sub><b>Victor Mateus </b></sub>🚀</a><br>
<br>

<p>
Feito com ❤️ por Victor Mateus<br>
👋🏽 Entre em contato!
</p>
