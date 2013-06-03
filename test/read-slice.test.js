
var chai = require('./chai')
  , slice = require('..')

describe('read-slice', function(){
	it('should return a string', function(done){
		slice(__filename, 1, 29).then(function(str){
			str.should.equal("var chai = require('./chai')")
		}).node(done)
	})
})
