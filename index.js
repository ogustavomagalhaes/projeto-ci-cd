const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando com Express');
});

let usuarios = [
  { id: 1, nome: 'Gustavo' }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

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

const PORT = 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
  });
}

module.exports = app;