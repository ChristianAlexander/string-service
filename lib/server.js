const restify = require('restify');
const handlers = require('./handlers');

const server = restify.createServer({
	name: 'StringService'
});

server.get('/', handlers.handleRoot);
server.get('/echo/:input', handlers.handleEcho);
server.get('/uppercase/:input', handlers.handleUppercase);
server.get('/lowercase/:input', handlers.handleLowercase);
server.get('/reverse/:input', handlers.handleReverse);
server.get('/length/:input', handlers.handleLength);

module.exports = server;
