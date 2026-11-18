# Projeto ONG

Projeto Integrador Extensionista II · Atividade 1

Este projeto da Atividade 1 demonstra a conexão entre uma página em JavaScript Vanilla, servida pelo Vite+, e uma API Express.

## Requisitos

- Node.js 22 a partir da versão 22.18, ou Node.js 24 ou superior
- npm

## Como rodar

Na raiz do repositório, instale as dependências e crie o arquivo de configuração local.

```sh
npm install
cp .env.example .env
```

No PowerShell, use `Copy-Item .env.example .env` no segundo comando.

Inicie a API em um terminal.

```sh
npm run api
```

Em outro terminal, também na raiz do repositório, inicie o frontend.

```sh
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173). A página deve mostrar **Status da API: ok** com a data e a hora retornadas pelo servidor, exibidas no fuso horário do navegador. O botão **Verificar novamente** faz uma nova consulta.

## API

Em desenvolvimento, o Vite+ encaminha `/api` para o servidor Express em `127.0.0.1:3001`. O valor de `API_PORT` no `.env` define a porta do Express e o destino do proxy. Reinicie os dois processos após alterar a porta. O `.env.example` pode ser versionado e serve de modelo para o `.env` de cada ambiente.

| Método | Rota | Resposta |
| --- | --- | --- |
| `GET` | `/api/health` | HTTP 200 com `status: "ok"` e `timestamp` em UTC, no formato ISO 8601 |

Para conferir a resposta passando pelo proxy, com os dois processos rodando:

```sh
curl http://localhost:5173/api/health
```

Para gerar a versão estática do frontend em `dist/`:

```sh
npm run build
```

Para a captura da atividade, abra a página no navegador e inclua a barra de endereço com `localhost:5173`, o status `ok` e a data e hora da resposta.

## Documentação

- [Vite+](https://viteplus.dev/guide/)
- [Express](https://expressjs.com/)
