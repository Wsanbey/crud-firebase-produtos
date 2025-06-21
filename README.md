# CRUD de Produtos com Firebase Firestore

Este projeto é uma API RESTful para gerenciar produtos utilizando Node.js, Express e Firebase Firestore.

## 🚀 Tecnologias

- Node.js
- Express
- Firebase Admin SDK (Firestore)
- CORS

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Wsanbey/crud-firebase-produtos.git
   cd crud-firebase-produtos
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Adicione o arquivo `serviceAccountKey.json`**  
   Baixe o arquivo de credenciais do Firebase e coloque na raiz do projeto.

4. **Configure as variáveis de ambiente:**  
   Crie um arquivo `.env` na raiz do projeto e adicione:
   ```
   PORT=3000
   FIREBASE_COLLECTION=produtos
   ```
   > Substitua os valores conforme necessário.

5. **Inicie o servidor:**
   ```bash
   node app.js
   ```
   O servidor irá rodar na porta definida na variável `PORT`.

## 🛣️ Rotas da API

- `GET /produtos`  
  Lista todos os produtos.

- `GET /produtos/:id`  
  Busca um produto pelo ID.

- `POST /produtos`  
  Cria um novo produto.  
  **Body:**  
  ```json
  {
    "nome": "Camiseta",
    "preco": 49.9,
    "categoria": "Roupas"
  }
  ```

- `PUT /produtos/:id`  
  Atualiza um produto existente.  
  **Body:**  
  ```json
  {
    "nome": "Camiseta Nova",
    "preco": 59.9,
    "categoria": "Roupas"
  }
  ```

- `DELETE /produtos/:id`  
  Remove um produto.

## 🧪 Testes com Postman

Você pode testar todas as rotas utilizando a coleção do Postman pronta:

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/28557910-89008d9f-8cda-4754-bf88-3aa786cdac8d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D28557910-89008d9f-8cda-4754-bf88-3aa786cdac8d%26entityType%3Dcollection%26workspaceId%3Dccb9641e-65bd-4c7c-9986-7c87f9c2b841)

**Antes de rodar os testes, verifique ou adicione caso não encontre as seguintes variáveis de ambiente no Postman:**

- `base_url` — URL base da sua API (exemplo: `http://localhost:3000`)
- `produto_id` — ID de um produto cadastrado (preenchido automaticamente após criar um produto)

## ⚠️ Observações

- Não esqueça de adicionar o arquivo `serviceAccountKey.json` (não versionado, está no `.gitignore`).
- O projeto não possui testes automatizados.
- Para ambiente de produção, utilize variáveis de ambiente para as credenciais.

---

Feito com 💙 por Welry Sanbey