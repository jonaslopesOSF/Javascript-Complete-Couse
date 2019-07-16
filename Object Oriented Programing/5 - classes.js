// ES6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}

const sam = new Elf("Sam", "bow");
console.log(sam instanceof Elf); // sam is instance of Elf class?
console.log(sam.attack());
const peter = new Elf("Peter", "fire");
console.log(peter.attack());
