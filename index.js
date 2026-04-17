const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando com Express 🚀');
});

// lista fake
let usuarios = [
  { id: 1, nome: 'Gustavo' }
];

// GET
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// STATUS
app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

// POST (CORRIGIDO)
app.post('/usuarios', (req, res) => {
  if (!req.body.nome) {
    return res.status(400).json({ erro: 'Nome é obrigatório' });
  }

  const novo = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };

  usuarios.push(novo);
  res.status(201).json(novo);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});