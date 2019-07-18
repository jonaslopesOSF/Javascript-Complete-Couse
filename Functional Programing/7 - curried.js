//Currying
const multiply = (a, b) => a * b
console.log(multiply(3,4))

const curriedMultiply = (a) => (b) => a * b
console.log(curriedMultiply(5)(20))

const multiplyBy5 = curriedMultiply(5)
console.log(multiplyBy5(20))