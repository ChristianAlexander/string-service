function echo(input) {
	return input;
}

function uppercase(input) {
	if (!input) {
		return input;
	}

	return input.toUpperCase();
}

function lowercase(input) {
	if (!input) {
		return input;
	}

	return input.toLowerCase();
}

function reverse(input) {
	if (!input) {
		return input;
	}

	return input.split('').reverse().join('');
}

function length(input) {
	if (typeof input === 'string') {
		return input.length;
	}

	return input;
}

module.exports = {
	echo,
	uppercase,
	lowercase,
	reverse,
	length
};
