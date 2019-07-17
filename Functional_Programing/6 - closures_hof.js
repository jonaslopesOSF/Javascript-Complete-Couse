//HOF - Higher Order Function
const hof = (fn) => fn(5);
console.log(hof(function a(x){ return x}))


//Closure
const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }
}

const getCounter = closure();
getCounter()
getCounter()
getCounter()