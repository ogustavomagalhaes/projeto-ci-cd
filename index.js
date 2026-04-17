const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
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
  const novo = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };

  usuarios.push(novo);
  res.status(201).json(novo);
});

if (!req.body.nome) {
  return res.status(400).json({ erro: 'Nome é obrigatório' });
}

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
