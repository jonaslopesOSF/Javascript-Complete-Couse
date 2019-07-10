var b = {
    name: 'jay',
    say() {console.log(this)} // references correctly the object
  }
  
  var c = {
    name: 'jay',
    say() {
      return function() {
        console.log(this) // funcion inside another function, it references the global context
      }
    }
  }
  
  var d = {
    name: 'jay',
    say() {
      return () => console.log(this) // arrow function uses object to this, lexaly scoped
    }
  }
  
  console.log(b.say())
  console.log(c.say()())
  console.log(d.say()())