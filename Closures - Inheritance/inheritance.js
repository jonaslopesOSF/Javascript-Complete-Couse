let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
        
    }
}

let lizard = {
    name: 'Kiki',
    fight() { // overriding fight method
        return 1
    }
}

lizard.__proto__ = dragon; // creating inheritance
for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)){
        console.log(prop)
    }
}

console.log(lizard.fire) // true, 'cause inheritance was on
lizard.sing()

dragon.isPrototypeOf(lizard) // 'cause dragon is inherited

