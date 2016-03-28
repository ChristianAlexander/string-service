const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../lib/server');

chai.use(chaiHttp);

describe('Echo API Method - GET', function() {
	it('should return \'test\' when requesting /echo/test GET', function(done) {
	  chai.request(server)
	    .get('/echo/test')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('test');
	      done();
	    });
	});
	it('should return a 404 when requesting /echo GET', function(done) {
	  chai.request(server)
	    .get('/echo')
	    .end(function(err, res){
	      res.should.have.status(404);
	      done();
	    });
	});
	it('should return \'Hello, world\' when requesting /echo/Hello%2C%20world GET', function(done) {
	  chai.request(server)
	    .get('/echo/Hello%2C%20world')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('Hello, world');
	      done();
	    });
	});
});

describe('Uppercase API Method - GET', function() {
	it('should return a 404 when requesting /uppercase GET', function(done) {
	  chai.request(server)
	    .get('/uppercase')
	    .end(function(err, res){
	      res.should.have.status(404);
	      done();
	    });
	});
	it('should return \'WORD\' when requesting /uppercase/word GET', function(done) {
	  chai.request(server)
	    .get('/uppercase/word')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('WORD');
	      done();
	    });
	});
	it('should return \'A LONGER STRING\' when requesting /uppercase/a%20longer%20string GET', function(done) {
	  chai.request(server)
	    .get('/uppercase/a%20longer%20string')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('A LONGER STRING');
	      done();
	    });
	});
	it('should return \'UPPERCASE\' when requesting /uppercase/UPPERCASE GET', function(done) {
	  chai.request(server)
	    .get('/uppercase/UPPERCASE')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('UPPERCASE');
	      done();
	    });
	});
	it('should return \'MIXED CASE\' when requesting /uppercase/mIxEd%20caSE GET', function(done) {
	  chai.request(server)
	    .get('/uppercase/mIxEd%20caSE')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('MIXED CASE');
	      done();
	    });
	});
});

describe('Lowercase API Method - GET', function() {
	it('should return a 404 when requesting /lowercase GET', function(done) {
	  chai.request(server)
	    .get('/lowercase')
	    .end(function(err, res){
	      res.should.have.status(404);
	      done();
	    });
	});
	it('should return \'word\' when requesting /lowercase/word GET', function(done) {
	  chai.request(server)
	    .get('/lowercase/word')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('word');
	      done();
	    });
	});
	it('should return \'a longer string\' when requesting /lowercase/a%20longer%20string GET', function(done) {
	  chai.request(server)
	    .get('/lowercase/a%20longer%20string')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('a longer string');
	      done();
	    });
	});
	it('should return \'uppercase\' when requesting /lowercase/UPPERCASE GET', function(done) {
	  chai.request(server)
	    .get('/lowercase/UPPERCASE')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('uppercase');
	      done();
	    });
	});
	it('should return \'mixed case\' when requesting /lowercase/mIxEd%20caSE GET', function(done) {
	  chai.request(server)
	    .get('/lowercase/mIxEd%20caSE')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('mixed case');
	      done();
	    });
	});
});

describe('Reverse API Method - GET', function() {
	it('should return a 404 when requesting /reverse GET', function(done) {
	  chai.request(server)
	    .get('/reverse')
	    .end(function(err, res){
	      res.should.have.status(404);
	      done();
	    });
	});
	it('should return \'drow\' when requesting /reverse/word GET', function(done) {
	  chai.request(server)
	    .get('/reverse/word')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('drow');
	      done();
	    });
	});
	it('should return \'gnirts regnol a\' when requesting /reverse/a%20longer%20string GET', function(done) {
	  chai.request(server)
	    .get('/reverse/a%20longer%20string')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('gnirts regnol a');
	      done();
	    });
	});
	it('should return \'tacocat\' when requesting /reverse/tacocat GET', function(done) {
	  chai.request(server)
	    .get('/reverse/tacocat')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('tacocat');
	      done();
	    });
	});
	it('should return \'ESac dExIm\' when requesting /reverse/mIxEd%20caSE GET', function(done) {
	  chai.request(server)
	    .get('/reverse/mIxEd%20caSE')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('ESac dExIm');
	      done();
	    });
	});
});

describe('Length API Method - GET', function() {
	it('should return a 404 when requesting /length GET', function(done) {
	  chai.request(server)
	    .get('/length')
	    .end(function(err, res){
	      res.should.have.status(404);
	      done();
	    });
	});
	it('should return 4 when requesting /length/word GET', function(done) {
	  chai.request(server)
	    .get('/length/word')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal(4);
	      done();
	    });
	});
	it('should return 15 when requesting /length/a%20longer%20string GET', function(done) {
	  chai.request(server)
	    .get('/length/a%20longer%20string')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal(15);
	      done();
	    });
	});
});

describe('Leftpad API Method - GET', function() {
	it('should return a 404 when requesting /leftpad GET', function(done) {
	  chai.request(server)
	    .get('/leftpad')
	    .end(function(err, res){
	      res.should.have.status(404);
	      done();
	    });
	});
	it('should return \'word\' when requesting /leftpad/word GET', function(done) {
	  chai.request(server)
	    .get('/leftpad/word')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('word');
	      done();
	    });
	});
	it('should return \'  foo\' when requesting /leftpad/foo?len=5 GET', function(done) {
	  chai.request(server)
	    .get('/leftpad/foo?len=5')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('  foo');
	      done();
	    });
	});
	it('should return \'foobar\' when requesting /leftpad/foobar?len=6 GET', function(done) {
	  chai.request(server)
	    .get('/leftpad/foobar?len=6')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('foobar');
	      done();
	    });
	});
	it('should return \'01\' when requesting /leftpad/1?len=2&ch=0 GET', function(done) {
	  chai.request(server)
	    .get('/leftpad/1?len=2&ch=0')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('01');
	      done();
	    });
	});
	it('should return \'-1\' when requesting /leftpad/1?len=2&ch=- GET', function(done) {
	  chai.request(server)
	    .get('/leftpad/1?len=2&ch=-')
	    .end(function(err, res){
	      res.should.have.status(200);
	      res.body.should.equal('-1');
	      done();
	    });
	});
});
