# Como Iniciar o Projeto

## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager)
- PostgreSQL instalado

## Comandos de Instalação

```bash
# Instalar dependências
npm install

# Configurar Prisma
npx prisma generate
npx prisma migrate dev

# Iniciar o servidor de desenvolvimento
npm start

# Iniciar Prisma Studio (interface visual do banco de dados)
npx prisma studio
```

## Acesso

- Servidor: `http://localhost:3000`
- Prisma Studio: `http://localhost:5555`

## Observações

Certifique-se de que o arquivo `.env` está configurado corretamente com a URL do banco de dados.

### Acessos:

```nome: jpdevcontato_db_user

- senha: BWuZEkB8j8Kp6yyw

- acesso: mongodb+srv://

- jpdevcontato_db_user:BWuZEkB8j8Kp6yyw@cluster0.peoo5d2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
