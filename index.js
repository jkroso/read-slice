
var Promise = require('laissez-faire/full')
var fs = require('fs')

/**
 * read a portion of `file`
 * 
 * @param {String} file
 * @param {Number} from
 * @param {Number} to
 * @param {String} [encoding]
 * @return {Promise<String|Buffer>}
 */

module.exports = function(file, from, to, encoding){
	var promise = new Promise
	var len = to - from
	var buf = new Buffer(len)
	fs.open(file, 'r', function(e, fd){
		if (e) return promise.error(e)
		fs.read(fd, buf, 0, len, from, function(e, bytes, buf){
			if (e) promise.error(e)
			fs.close(fd, function(e){
				if (e) return promise.error(e)
				promise.write(buf.toString(encoding || 'utf8'))
			})
		})
	})
	return promise
}
