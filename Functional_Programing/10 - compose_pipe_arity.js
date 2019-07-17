// compose
// arity - the number of arguments of one function,

const compose = (f, g) => (data) => f(g(data)) // right to left - arity = 2
const pipe = (f, g) => (data) => g(f(data)) // left to right

const multiplyBy3 = (num) => num*3; // arity = 1
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbsolute = pipe(multiplyBy3, makePositive)
const multiplyBy3AndAbsoluteCompose = compose(multiplyBy3, makePositive)


console.log(multiplyBy3AndAbsolute(50))
console.log(multiplyBy3AndAbsoluteCompose(50))