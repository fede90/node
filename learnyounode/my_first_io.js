var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

var string = buffer.toString().split('\n')

console.log(string.length-1)