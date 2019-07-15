const giveAccessTo = (name) => console.log(`Access Greanted to ${name}`);

function authenticate (verify) {
	let array = [];
	for (let i = 0; i < verify; i++) {
		array.push(i);
	}
	return giveAccessTo(person.name);
}

function sing(person) {
	return `lalala my name is ${person.name}`;
}

function letPersonLogin(person, fn) { // tell it what data to use + function
	if (person.level === 'admin') {
		return fn(person);
	} else if (person.level === 'user') {
		return fn(person);
	}
	
}

let person = {level:'admin', name:'Jonas'};
letPersonLogin(person, authenticate);
