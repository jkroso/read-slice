
var chai = require('./chai')
  , slice = require('..')

describe('read-slice', function(){
	it('should return a buffer', function(done){
		slice(__filename, 1, 29).then(function(buf){
			buf.should.eql(new Buffer("var chai = require('./chai')"))
		}).node(done)
	})
})
