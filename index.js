function add(a, b) {
	return a + b
}

function greet(name) {
	return `Hello, ${name}!`
}

console.log(greet('World'))
module.exports = { add, greet }
