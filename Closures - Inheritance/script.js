function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

const one = a();
b();


//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`hi ${name2}`);
    };
  };
}

const boo = string => name => name2 => console.log(`${string} ${name} ${name2}`);

boo('hi')('tim')('becca')

// 5 years
booString = boo('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya')