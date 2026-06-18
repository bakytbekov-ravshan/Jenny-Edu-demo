const { add, greet } = require('./index').default

test('adds two numbers correctly', () => {
	expect(add(2, 3)).toBe(5)
})

test('greets with the correct name', () => {
	expect(greet('Jenkins')).toBe('Hello, Jenkins!')
})
