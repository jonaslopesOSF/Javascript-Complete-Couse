// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
const multiplyBy = function(num1) { // no arrows function
    return function(num2) {
      return num1*num2;
    }
  }
 
 const multiplyBy = (num1) => (num2) =>  num1 * num2; // arrow function
 
 // You should be able to do:
 const multiplyByTwo = multiplyBy(2);
 const multiplyByFive = multiplyBy(5);
 
 console.log(multiplyByTwo(4)) // 8
 
 console.log(multiplyByFive(4)) // 20