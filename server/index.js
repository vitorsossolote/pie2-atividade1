import express from 'express';

const port = Number(process.env.API_PORT ?? 3001);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('API_PORT deve ser um número inteiro entre 1 e 65535.');
}

const app = express();
app.disable('x-powered-by');

app.get('/api/health', (_request, response) => {
  response.set('Cache-Control', 'no-store').json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, '127.0.0.1', () => {
  console.log(`API disponível em http://127.0.0.1:${port}`);
});
