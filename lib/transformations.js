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

function leftpad(input, len, ch) {
	var input = String(input);
	var i = -1;
	if (!ch && ch !== 0) ch = ' ';
	len = len - input.length;
	while (++i < len) {
		input = ch + input;
	}
	return input;
}

module.exports = {
	echo,
	uppercase,
	lowercase,
	reverse,
	length,
	leftpad
};
