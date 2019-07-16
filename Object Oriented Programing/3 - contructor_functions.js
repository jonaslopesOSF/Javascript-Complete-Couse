//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon; // setting the properties
}

Elf.prototype.attack = function() {
  // using the function in the same memory space
  return `attack with ${this.weapon}`;
};

const peter = new Elf("Peter", "bow");
const sam = new Elf("Sam", "fire");
console.log(peter.attack());
console.log(sam.attack());

peter.__proto__.attack;

// const Elf1 = new Function('name', 'weapon', `this.name = name;
//   this.weapon = weapon;`)
// const sarah = new Elf1('Sarah', 'fireworks')
// sarah
