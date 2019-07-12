const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
strings.push('e');
console.log(strings)
//pop
strings.pop();
strings.pop();
console.log(strings)

//unshift
strings.unshift('x')
console.log(strings)
//splice
strings.splice(2, 0, 'alien'); // add in index
console.log(strings)
strings.splice(2, 1); // delete in index
console.log(strings)