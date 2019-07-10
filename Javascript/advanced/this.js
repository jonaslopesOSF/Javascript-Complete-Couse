//this
const obj = {
    name: 'Billy',
    sing: function() {
      return 'llala ' + this.name;
    },
    singAgain: function() {
      return this.sing()  + '!';
    }
  }
  
  console.log(obj.sing());
  console.log(obj.singAgain());
  
  function importantPerson() {
    console.log(this.name)
  }
  
  const name = 'Sunny';
  const obj1 = { name: 'Cassy', importantPerson: importantPerson}
  const obj2 = { name: 'Jacob', importantPerson: importantPerson}
  
  importantPerson() // Sunny, because this.name access the global variable
  
  obj1.importantPerson() // Cassy
  obj2.importantPerson() // Jacob