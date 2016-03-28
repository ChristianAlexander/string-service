const transformations = require('./transformations');

function handleRoot(req, res) {
	const version = require('../package.json').version || 'unknown';

	res.send({
		application: 'StringService',
		version
	});
}

function handleEcho(req, res) {
	res.send(transformations.echo(req.params.input));
}

function handleUppercase(req, res) {
	res.send(transformations.uppercase(req.params.input));
}

function handleLowercase(req, res) {
	res.send(transformations.lowercase(req.params.input));
}

function handleReverse(req, res) {
	res.send(transformations.reverse(req.params.input));
}

function handleLength(req, res) {
	res.send(200, transformations.length(req.params.input));
}

function handleLeftpad(req, res) {
	res.send(transformations.leftpad(req.params.input, req.query.len, req.query.ch));
}

module.exports = {
	handleRoot,
	handleEcho,
	handleUppercase,
	handleLowercase,
	handleReverse,
	handleLength,
	handleLeftpad
};
