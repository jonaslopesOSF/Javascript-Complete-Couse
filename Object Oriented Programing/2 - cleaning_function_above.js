// factiry functions, function that creates objects

// Object.create()
const elfFunctions = {
  attack() {
    return `attack with ${this.weapon}`;
  }
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions); // giving the method to the new object, inheritance
  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const peter = createElf("Peter", "stones");
console.log(peter.attack());
const sam = createElf("Sam", "ice");
console.log(sam.attack());
