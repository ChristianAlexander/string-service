#StringService
A service for manipulating strings.

##Installation

* Local command line: `npm install -g string-service`
* Docker: `docker pull christianalexander/string-service`

##Running

* In general: `string-service`
* On specific port: `PORT=3001 string-service`
* Tests: `npm test`
* Local development version: `npm start`
* Docker: `docker run -d -p 8080:8080 christianalexander/string-service`

##Routes

* `GET /`: Returns version information
* `GET /echo/:input`: Returns the given string
* `GET /uppercase/:input`: Returns the uppercase version of the given string
* `GET /lowercase/:input`: Returns the lowercase version of the given string
* `GET /reverse/:input`: Returns the reversed version of the given string
* `GET /length/:input`: Returns the length of the given string
* `GET /leftpad/:input?len={length}&ch={character}`: Runs leftpad on the given string, and returns the result.
