// ES6 Class
class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return "atack with " + this.weapon;
    }
  }
  
  class Elf extends Character {
    constructor(name, weapon, type) {
      super(name, weapon);
      this.type = type;
    }
  }
  
  class Ogre extends Character {
    constructor(name, weapon, color) {
      super(name, weapon);
      console.log(this)
      this.color = color;
      console.log(this)
    }
    makeFort() {
      return 'strongest fort in the world made';
    }
  }
  
  const dolby = new Elf('Dolby', 'cloth', 'house')
  dolby.attack()
  
  const shrek = new Ogre('Shrek', 'club', 'green')
  shrek.makeFort()

  console.log(shrek instanceof Ogre && shrek instanceof Character)  // sure yes