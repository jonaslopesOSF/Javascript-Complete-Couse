// Scope:
function sayMyName() {
    var a = 'a';
    return function findName() {
      var b = 'b';
      // console.log(c) -> error
      return function printName() {
        var c = 'c';
        return 'Andrei Neagoie'
      }
    }
  }
  
  sayMyName()()() // each braquet left you inside the funcion deep
  
  function findName() {
    var b = 'b';
    return printName();
  }
  
  function printName() {
    var c = 'c'
    return 'Andrei Neagoie'
  }
  
  function sayMyName() {
    var a = 'a';
    return findName()
  }
  
  sayMyName()
   