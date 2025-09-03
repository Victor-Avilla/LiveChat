# Chat em Tempo Real

Este projeto é um chat em tempo real desenvolvido com Node.js (backend WebSocket) e JavaScript puro no frontend. Permite que múltiplos usuários conversem simultaneamente de forma simples e rápida.

## Funcionalidades

- Login com nome de usuário
- Envio e recebimento de mensagens instantâneas
- Diferenciação visual entre mensagens próprias e de outros usuários
- Cores aleatórias para identificar cada usuário
- Interface responsiva e moderna

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, WebSocket (`ws`)
- **Hospedagem:** [Render](https://render.com)

## Como acessar

O chat está disponível em produção pelo link:

[https://livechat-frontend-xk5p.onrender.com](https://livechat-frontend-xk5p.onrender.com)

⚠Para o chat funcionar corretamente será necessário fazer login e aguardar alguns minutos para o backend ser iniciado, isso ocorre devido limitações da plataforma.

## Estrutura do Projeto

```
backend/
  src/
    server.js
frontend/
  index.html
  style.css
  script.js
```

## Observações

- As mensagens **não ficam salvas** no servidor, apenas são transmitidas entre os usuários conectados.
- O projeto é apenas para fins didáticos e pode ser expandido com autenticação, histórico de mensagens, etc.
