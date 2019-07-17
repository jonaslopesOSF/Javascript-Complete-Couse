// no side effects
// input --> output the same input , the same output

const array = [1,2,3]
function mutateArray(array) { // side effects, afects something outside his context
  array.pop();
}
function mutateArray2(array) {
  array.forEach(item => {
    array.push(1);
  })
}

mutateArray(array)
mutateArray2(array)
console.log(array)