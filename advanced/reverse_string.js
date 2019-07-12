function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'is not so good';
    }

    const backwards = [];
    const totalCharacteres = str.length - 1;

    for (let i = totalCharacteres; i >= 0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards)
    return backwards.join('');
}

function reverse2(str) { 
    return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('');

reverse3('jonas lopes')




