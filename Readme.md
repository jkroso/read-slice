
# read-slice

  read part of a file

## Getting Started

_With npm_  

	$ npm install read-slice --save

then in your app:

```js
var read-slice = require('read-slice')
```

## API

  - [slice()](#moduleexportsfilestringfromnumbertonumberencodingstring)

### slice(file:String, from:Number, to:Number, [encoding]:String)

  read a portion of `file`

### Example

  the head(1) executable can be loosly emulated by defining `head` as

```js
function head(file){
	return slice(file, 0, 100)
}
```

## Running the tests

```bash
$ npm install
$ make test
```

_Note: these commands don't work on windows._ 
