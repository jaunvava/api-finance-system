import express from "express";

const rotasPublicas = express.Router();

// cadastro de usuário
rotasPublicas.post("/cadastro", async (req, res) => {
  const usuario = req.body;

  await prisma.user.create({
    data: {
      name: usuario.name,
      email: usuario.email,
      password: usuario.password,
    },
  });

  res.status(201).json(usuario);
});

export default rotasPublicas;
