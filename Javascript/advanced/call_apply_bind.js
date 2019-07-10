const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2){
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}
console.log(archer)
wizard.heal.call(archer, 50, 30); // using one methods of another object to this object
wizard.heal.apply(archer, [100, 30]); // using one methods of another object to this object
console.log(archer)

const healArcher = wizard.heal.bind(archer, 50, 30);
console.log('bind', archer)
healArcher();
console.log('bind', archer)
