const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// fonte: https://www.mundojs.com.br/2019/11/29/exemplo-pratico-node-js/

// Exemplo simples de um servidor web criado usando o Node.js com o módulo http.

const http = require('http'); // Importação do Módulo HTTP
const hostname = '127.0.0.1'; // Definição de Hostname e Porta:
const port = 3000;

// Essas linhas definem o hostname (ou endereço IP) e a porta onde o servidor será acessado. 127.0.0.1 é o endereço de loopback (localhost), que aponta para a própria máquina, e 3000 é a porta na qual o servidor escuta.

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola Mundo!\nBem vindo ao nodejs');
});

// Esta é a parte central do código onde o servidor é criado. A função http.createServer() recebe uma função de callback que é chamada sempre que uma requisição é recebida. Dentro desta função:
// 	•	res.statusCode = 200; define o código de status da resposta HTTP como 200, indicando sucesso.
// 	•	res.setHeader('Content-Type', 'text/plain'); define o cabeçalho da resposta para indicar que o conteúdo retornado é texto puro.
// 	•	res.end('Ola Mundo!\nBem vindo ao nodejs'); envia a resposta para o cliente e encerra a resposta. O texto “Ola Mundo!\nBem vindo ao nodejs” é enviado como corpo da resposta.

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// O servidor é iniciado com o método listen(), especificando a porta e o hostname onde ele deve escutar por requisições. 
// A função de callback dentro de listen() é chamada assim que o servidor começa a escutar, informando no console que o
// servidor está rodando e pronto para receber requisições. 

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bem-vindo ao Node.js!</h1><p>Esta é a página inicial.</p>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Sobre Nós</h1><p>Esta é a página sobre nós.</p>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>404 Não Encontrado</h1><p>A página que você está procurando não existe.</p>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
// Servir JSON com Node.js

// O servidor responde com um JSON na rota /api, útil para simular uma API.
// Na rota padrão, ele retorna uma mensagem de erro 404.

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const data = {
            nome: "Servidor Node.js",
            linguagem: "JavaScript",
            uso: "Desenvolvimento Web"
        };
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
// Simulação de Requisições POST com Node.js (sem banco de dados)

// O servidor aceita requisições POST na rota /submit.
// O conteúdo do corpo da requisição é lido e retornado ao cliente.
// Ótimo para explicar como capturar dados enviados de um formulário.

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`Dados recebidos: ${body}`);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

// curl -X POST http://127.0.0.1:3000/submit -d "nome=Aluno"
