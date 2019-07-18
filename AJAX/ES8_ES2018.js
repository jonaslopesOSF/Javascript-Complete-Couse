const array = [1,2,3,4,5]
function sum(a,b,c,d,e) {
  return a + b + c + d + e
}
sum(...array)

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
   bird: 40
}

function objectSpread(obj1, obj2, obj3) {
  console.log(obj1)
  console.log(obj2)
  console.log(obj3)
}
const {tiger, lion, ...rest} = animals;
objectSpread(tiger, lion, rest)