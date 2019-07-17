const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter();

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW); //this should return 'Simon' bud doesn't

// using bind and official answer

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log("?", giveMeTheCharacterNOW());
