
# FoodExplorer

Cardápio digital para um restaurante fictício

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-soares-64b0a6227/)


## Funcionalidades gerais
- Autenticação dos usarios JWT
- mobile first, responsivo
- cada usuário terá uma foto de perfi podendo alteralá
- barra de besquisa no cabeçalho a qual bsuca pelos nomes dos pratos
- soma do valor total do carrinho
- abrir apenas um produto para ver todos os detalhes
### Funcionalidades Cliente
- Adicionar produtos aos avoritos
- selecionar a quantidade de produtos e adicionar ao carrinho
- acompanhar os detalhes do seu pedido (pendente, preparando , entrgue)

### Funcionalidades ADM
- cadastrar um novo produto
- atualizar um produto
- atualizar status o pedido de cada cliente (pendente, preparando , entrgue)
-
## Stack utilizada

**Front-end:** React, styled components, axios 

**Back-end:** Node, Express , Knex, Sqlite


## Instalação
Front-End
#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_BASE_URL_API`

```bash
# Clone este repositório
$ git clone <https://github.com/luiszkm/RocketFood.git>

# Instale as dependências
$ npm install

# Crie um .env com a variavel de ambiente acima

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

```
Back-End

#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`SECRET_AUTH`, `PORT`

```bash
# Clone este repositório
$ git clone <https://github.com/luiszkm/API_RocketFood.git>

# Instale as dependências
$ npm install

# Crie um .env com as variáveis de ambiente acima

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

```
## Layout

[![Figma](https://camo.githubusercontent.com/9a8ccd8ae319ddac9934db226e7834d7e1c61a31076e7d7c04ecb5bf352967aa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6669676d612d2532334632344531452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6669676d61266c6f676f436f6c6f723d7768697465)](https://www.figma.com/file/GkqG5AUJe3ppcUEHfvOX6z/food-explorer?node-id=0%3A1)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

