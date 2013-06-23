
# read-slice

  read part of a file

## Installation

_With npm_  

	$ npm install read-slice --save

then in your app:

```js
var slice = require('read-slice')
```

## API

  - [slice()](#slicefilestringfromnumbertonumber)

### slice(file:String, from:Number, to:Number)

  read a portion of `file`. `slice` returns a [Result](//github.com/jkroso/result) though you can access the internal callback based implemenation as `slice.plain`

### Example

  the head(1) executable can be loosly emulated by defining `head` as

```js
function head(file){
  slice(file, 0, 100).read(function(buffer){
    console.log(buffer.toString('utf8'))
  })
}
```

## Running the tests

```bash
$ make test
```