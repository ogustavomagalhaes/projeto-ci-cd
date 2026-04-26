const request = require('supertest');
const app = require('../index');

describe('Testes da API', () => {
  test('GET / deve retornar API funcionando!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('API funcionando com Express');
  });

  test('GET /status deve retornar status ok', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /usuarios deve retornar lista', async () => {
    const res = await request(app).get('/usuarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /usuarios deve criar usuário', async () => {
    const res = await request(app)
      .post('/usuarios')
      .send({ nome: 'João' });

    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe('João');
  });

  test('POST /usuarios sem nome deve dar erro', async () => {
    const res = await request(app)
      .post('/usuarios')
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.erro).toBe('Nome é obrigatório');
  });
});