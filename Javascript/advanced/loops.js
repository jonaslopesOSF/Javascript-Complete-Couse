const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples : 5,
    oranges: 10,
    grapes: 1000
}

// Form number 1 - for normal
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// Form number 2 - forEach
basket.forEach(item => {
    console.log(item);
})

// Form number 3 --- for of - arrays and string
for (item of basket) {
    console.log(item);
}

// Form number 4 --- for in (works with objects)
// enumerating called when iterating in a object
// if you try use for in in a non-object, it takes the index
for (item in detailedBasket) {
    console.log(item.value);
}