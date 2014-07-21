var myMenu = require('./menu.js')
console.log(myMenu)


// Makes an array of items entered by user, slice at 2 to remove "node" and filename
var lunchItems = process.argv.slice(2)	

if (lunchItems.length === 0) {
	console.log("You must order at least one item!")
}
else if(lunchItems.length > 3) {
	console.log("You must be hungry! But you can\'t order more than 3 things...")
}
else {
	console.log("Yumm, that sounds good. You have ordered: \n" + lunchItems.join('\n'))
}