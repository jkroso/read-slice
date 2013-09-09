
var lift = require('lift-result/cps')
var fs = require('fs')

/**
 * read a portion of `file`
 *
 * @param {String} file
 * @param {Number} from
 * @param {Number} to
 * @param {Function} cb(error, buffer)
 */

module.exports = lift(function(file, from, to, cb){
	var len = to - from
	var buf = new Buffer(len)
	fs.open(file, 'r', function(e, fd){
		if (e) cb(e)
		else fs.read(fd, buf, 0, len, from, function(e, bytes, buf){
			fs.close(fd, function(e2){
				if (e || e2) cb(e || e2)
				else cb(null, buf)
			})
		})
	})
})