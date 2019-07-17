// Imutability

const obj = {name: 'Andrei'}

function clone(obj) {
  return {...obj}; // this is pure
}
const cloneObj = clone(obj)
console.log(cloneObj)

function updateName(obj, name) {
  const obj2 = clone(obj); // don't change the actual obj
  obj2.name = name
  return obj2
}

let name = "new name"
const updatedObj = updateName(obj, name)
console.log(obj, updatedObj)