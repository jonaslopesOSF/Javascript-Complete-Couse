// no side effects
// input --> output the same input , the same output

const array = [1,2,3]
function removeLastItem(array) { 
  const newArray = [].concat(array); // copy of the array
  newArray.pop();
  return newArray;
}
function multiplyBy2(array) {
  return array.map(item => item * 2)
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log('array1', array)
console.log('array2', array2)
console.log('array3', array3)

function inpure() {
  console.log('hi') // change the window, so isn't a pure function
}

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2
}
b(a(3,4)) // always 14 -- referencial transparency
b(7) // always 14 -- referencial transparency