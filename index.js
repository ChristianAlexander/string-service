#! /usr/bin/env node
const server = require('./lib/server');

const DEFAULT_PORT = 8080;

server.listen(process.env.PORT || DEFAULT_PORT, function() {
	console.log(`${server.name} listening at ${server.url}`);
});
