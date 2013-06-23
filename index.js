
var decorate = require('resultify')
var fs = require('fs')

module.exports = decorate(readSlice)
module.exports.plain = readSlice

/**
 * read a portion of `file`
 * 
 * @param {String} file
 * @param {Number} from
 * @param {Number} to
 * @param {Function} cb(error, buffer)
 */

function readSlice(file, from, to, cb){
	var len = to - from
	var buf = new Buffer(len)
	fs.open(file, 'r', function(e, fd){
		if (e) cb(e)
		else fs.read(fd, buf, 0, len, from, function(e, bytes, buf){
			if (e) cb(e)
			else fs.close(fd, function(e){
				if (e) cb(e)
				else cb(null, buf)
			})
		})
	})
}
