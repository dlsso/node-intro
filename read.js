var fs = require('fs')

// This will read the content of whatever file you specify
// process.argv[2] grabs the first argument after node and executing file
var textContent = fs.readFileSync(process.argv[2], 'utf-8')


console.log(textContent)

