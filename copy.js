// Goal is to copy a file 

var fs = require('fs')

var content = fs.readFileSync(process.argv[2], 'utf-8')

fs.writeFileSync(process.argv[3], content, 'utf-8')
console.log("Saved.")