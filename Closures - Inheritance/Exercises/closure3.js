const array = [1, 2, 3, 4];

// first solution
for (let i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log("I am at index " + array[i]);
  }, 3000);
}

// second solution
for (var i = 0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function() {
      console.log("I am at index " + array[closureI]);
    }, 3000);
  })(i); // passing 'i' as parameter
}

// third solution
const timeOut3 = () => i => {
  setTimeout(function() {
    console.log("I am at index " + i);
  }, 3000);
};

for (var i = 0; i < array.length; i++) {
  timeOut3()(i);
}
