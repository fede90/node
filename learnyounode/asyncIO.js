var fs = require('fs')

var lines = undefined

function cantLinesAsync(callback){
	
	fs.readFile(process.argv[2], function (err, filesContent){
		lines = filesContent.toString().split('\n').length -1
		callback()
	})
}

function log(){
	console.log(lines)
}

cantLinesAsync(log)