const transformations = require('./transformations');

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

module.exports = {
	handleEcho,
	handleUppercase,
	handleLowercase,
	handleReverse,
	handleLength
};