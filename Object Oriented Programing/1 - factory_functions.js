// factiry functions, function that creates objects 
function createElf(name, weapon) {
    return {
      //name: name,
      //weapon: weapon,
      // or
      name, 
      weapon,
      attack() {
        return `attack with ${weapon}`
      }
    }
  }
  
  const peter = createElf('Peter', 'stones')
  peter.attack()
  const sam = createElf('Sam', 'water')
  sam.attack()