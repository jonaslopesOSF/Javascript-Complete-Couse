var c = [1,2,3];
var d = c;
d.push( 4 );

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]

var a = 5;
var b = a;

b++;
console.log(a)
console.log(b)

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj);
console.log('clone', clone)
let clone2 = {...obj} // beautifull way
let superClone = JSON.parse(JSON.stringify(obj)) // powerfull way

obj.c.deep = 'hahaha';
console.log('oficial', obj)
console.log('clone', clone)
console.log(clone2)
console.log(superClone)