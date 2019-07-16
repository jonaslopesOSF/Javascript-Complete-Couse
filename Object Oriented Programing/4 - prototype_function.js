//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return "atack with " + this.weapon;
};

Elf.prototype.build = function() {
  // method
  const self = this;
  function building() {
    // function
    return `${self.name} builds a house`;
  }
  return building();
};

console.log(Elf.prototype);

const sam = new Elf("Sam", "bow");
console.log(sam.attack());
const peter = new Elf("Peter", "fire");
console.log(peter.attack());
