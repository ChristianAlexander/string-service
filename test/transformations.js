const expect = require('chai').expect;
const transformations = require('../lib/transformations');

describe('Echo Transformation', function() {
	const echo = transformations.echo;
	it('should be a function', function() {
		expect(echo).to.be.a('function');
	});
	it('should not throw when given null', function() {
		expect(echo.bind(this, null)).to.not.throw(Error);
	});
	it('should not throw when given undefined', function() {
		expect(echo.bind(this, undefined)).to.not.throw(Error);
	});
	it('should turn \'word\' into \'word\'', function() {
		expect(echo('word')).to.equal('word');
	});
	it('should turn \'a longer string\' into \'a longer string\'', function() {
		expect(echo('a longer string')).to.equal('a longer string');
	});
});

describe('Uppercase Transformation', function() {
	const uppercase = transformations.uppercase;
	it('should be a function', function() {
		expect(uppercase).to.be.a('function');
	});
	it('should not throw when given null', function() {
		expect(uppercase.bind(this, null)).to.not.throw(Error);
	});
	it('should not throw when given undefined', function() {
		expect(uppercase.bind(this, undefined)).to.not.throw(Error);
	});
	it('should turn \'word\' into \'WORD\'', function() {
		expect(uppercase('word')).to.equal('WORD');
	});
	it('should turn \'a longer string\' into \'A LONGER STRING\'', function() {
		expect(uppercase('a longer string')).to.equal('A LONGER STRING');
	});
	it('should turn \'UPPERCASE\' into \'UPPERCASE\'', function() {
		expect(uppercase('UPPERCASE')).to.equal('UPPERCASE');
	});
	it('should turn \'mIxEd caSE\' into \'MIXED CASE\'', function() {
		expect(uppercase('mIxEd caSE')).to.equal('MIXED CASE');
	});
});

describe('Lowercase Transformation', function() {
	const lowercase = transformations.lowercase;
	it('should be a function', function() {
		expect(lowercase).to.be.a('function');
	});
	it('should not throw when given null', function() {
		expect(lowercase.bind(this, null)).to.not.throw(Error);
	});
	it('should not throw when given undefined', function() {
		expect(lowercase.bind(this, undefined)).to.not.throw(Error);
	});
	it('should turn \'word\' into \'word\'', function() {
		expect(lowercase('word')).to.equal('word');
	});
	it('should turn \'a longer string\' into \'a longer string\'', function() {
		expect(lowercase('a longer string')).to.equal('a longer string');
	});
	it('should turn \'UPPERCASE\' into \'uppercase\'', function() {
		expect(lowercase('UPPERCASE')).to.equal('uppercase');
	});
	it('should turn \'mIxEd caSE\' into \'mixed case\'', function() {
		expect(lowercase('mIxEd caSE')).to.equal('mixed case');
	});
});

describe('Reverse Transformation', function() {
	const reverse = transformations.reverse;
	it('should be a function', function() {
		expect(reverse).to.be.a('function');
	});
	it('should not throw when given null', function() {
		expect(reverse.bind(this, null)).to.not.throw(Error);
	});
	it('should not throw when given undefined', function() {
		expect(reverse.bind(this, undefined)).to.not.throw(Error);
	});
	it('should turn \'\' into \'\'', function() {
		expect(reverse('')).to.equal('');
	});
	it('should turn \'word\' into \'drow\'', function() {
		expect(reverse('word')).to.equal('drow');
	});
	it('should turn \'a longer string\' into \'gnirts regnol a\'', function() {
		expect(reverse('a longer string')).to.equal('gnirts regnol a');
	});
	it('should turn \'tacocat\' into \'tacocat\'', function() {
		expect(reverse('tacocat')).to.equal('tacocat');
	});
	it('should turn \'mIxEd caSE\' into \'ESac dExIm\'', function() {
		expect(reverse('mIxEd caSE')).to.equal('ESac dExIm');
	});
});

describe('Length Transformation', function() {
	const length = transformations.length;
	it('should be a function', function() {
		expect(length).to.be.a('function');
	});
	it('should not throw when given null', function() {
		expect(length.bind(this, null)).to.not.throw(Error);
	});
	it('should not throw when given undefined', function() {
		expect(length.bind(this, undefined)).to.not.throw(Error);
	});
	it('should return 4 when given \'word\'', function() {
		expect(length('word')).to.equal(4);
	});
	it('should return 15 when given \'a longer string\'', function() {
		expect(length('a longer string')).to.equal(15);
	});
	it('should return 0 when given \'\'', function() {
		expect(length('')).to.equal(0);
	});
});

describe('Leftpad Transformation', function() {
	const leftpad = transformations.leftpad;
	it('should be a function', function() {
		expect(leftpad).to.be.a('function');
	});
	it('should return \'word\' when given (\'word\')', function() {
		expect(leftpad('word')).to.equal('word');
	});
	it('should return \'  foo\' when given (\'foo\', 5)', function() {
		expect(leftpad('foo', 5)).to.equal('  foo');
	});
	it('should return \'foobar\' when given (\'foobar\', 6)', function() {
		expect(leftpad('foobar', 6)).to.equal('foobar');
	});
	it('should return \'01\' when given (1, 2, 0)', function() {
		expect(leftpad(1, 2, 0)).to.equal('01');
	});
	it('should return \'-1\' when given (1, 2, \'-\')', function() {
		expect(leftpad(1, 2, '-')).to.equal('-1');
	});
});
