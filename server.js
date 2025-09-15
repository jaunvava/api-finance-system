import express from "express";
import rotasPublicas from "./routes/puclic.js";

const app = express();
const port = 3000;
app.use(express.json());

const prisma = new PrismaClient();

app.use("/", rotasPublicas);

app.get("/", (req, res) => {
  res.send("Servidor está rodando!");
});

app.listen(port, () => {
  console.log(`servidor está rodando na porta ${port}`);
});
