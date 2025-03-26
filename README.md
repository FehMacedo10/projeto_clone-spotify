# Clone do Spotify

Este projeto é um clone funcional do Spotify, desenvolvido como parte da Jornada Full Stack. Ele simula funcionalidades básicas de um player de música, incluindo exibição de artistas, músicas, e um player interativo.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. **Front-end**: Localizado na pasta `Deploy/front-end`, é responsável pela interface do usuário.
2. **Back-end**: Localizado na pasta `Deploy/back-end`, é responsável por fornecer dados via API.

---

## Tecnologias Utilizadas

### Front-end

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no front-end.
- **CSS**: Estilização da interface.
- **FontAwesome**: Ícones utilizados na interface.
- **Axios**: Para requisições HTTP.

### Back-end

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **MongoDB**: Banco de dados utilizado para armazenar informações de artistas e músicas.
- **Cors**: Middleware para habilitar requisições entre diferentes origens.

---

## Funcionalidades

### Front-end

- **Página de Artista**:
  - Exibe informações do artista, como nome e banner.
  - Lista as músicas populares do artista.
- **Página de Música**:
  - Exibe informações da música, como nome, duração, e artista.
  - Player funcional para reproduzir músicas.
- **Player**:
  - Controles de play/pause, próximo e anterior.
  - Barra de progresso sincronizada com a reprodução.

### Back-end

- **Endpoints**:
  - `/artists`: Retorna a lista de artistas.
  - `/songs`: Retorna a lista de músicas.
- **Banco de Dados**:
  - Coleção `artists`: Contém informações dos artistas.
  - Coleção `songs`: Contém informações das músicas.

---

## Estrutura de Pastas

```
Aula/
├── Deploy/
│   ├── back-end/
│   │   ├── api/
│   │   │   ├── connect.js
│   │   │   └── server.js
│   ├── front-end/
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   │   ├── database/
│   │   │   │   │   ├── artists.js
│   │   │   │   │   └── songs.js
│   │   │   ├── components/
│   │   │   │   ├── Player.jsx
│   │   │   │   ├── SongItem.jsx
│   │   │   │   └── SongList.jsx
│   │   │   ├── pages/
│   │   │   │   ├── Artist.jsx
│   │   │   │   └── Song.jsx
│   │   │   ├── index.css
│   │   │   ├── App2.jsx
│   │   │   └── main.jsx
│   ├── index.html

```

---

## Configuração e Execução

### Pré-requisitos

- Node.js instalado.
- MongoDB configurado.

### Passos para Executar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/FehMacedo10/projeto_clone-spotify

   cd projeto_CloneSpotify
   ```

2. \*\*Configuração do Back-end

- Navegue até a pasta `back-end`.
- Instale as dependências

```bash
npm install
```

- Inicie o servidor

```bash
node api/server.js
```

3. Configuração do Front-end

- Navegue até a pasta `front-end`
- Instale as dependências

```bash
npm install
```

- Inicie o servidor de densenvolvimento:

```bash
npm run start
```

4. Acesse o projeto:

- O front-end estará disponível em `http://localhost:3000`
- O back-end estará disponível em `http://localhost:3001`

---

## Variáveis de Ambiente

**Back-end**

- `MONGO_URI`: URL de conexão com o MongoDB.
- PORT: Porta para o servidor (padrão: 3001).

---

## Créditos

Este projeto foi desenvolvido como parte da Jornada Full Stack da Hashtag Treinamentos.
