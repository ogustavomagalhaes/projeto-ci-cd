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

// POST
app.post('/usuarios', (req, res) => {
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