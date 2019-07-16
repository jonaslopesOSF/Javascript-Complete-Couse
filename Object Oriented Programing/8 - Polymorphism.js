class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }
  
  class Elf extends Character { 
    constructor(name, weapon, type) {
      // console.log('what am i?', this); this gives an error
      super(name, weapon) 
      console.log('what am i?', this);
      this.type = type;
    }
    attack(cry='wee') {
        return 'attack with ' + cry;
    }
  }
  
  class Ogre extends Character {
    constructor(name, weapon, color) {
      super(name, weapon);
      this.color = color;
    }
    makeFort() { // this is like extending our prototype.
      return 'strongest fort in the world made'
    }
    attack() {
      return 'arrrghhhhhh';
    }
  }
  
  const dolby = new Elf('Dolby', 'cloth', 'house')
  //houseElf.makeFort() // error
  const shrek = new Ogre('Shrek', 'club', 'green')
  console.log('elf',dolby.attack('weee'))
  console.log('ogre',shrek.attack())
  