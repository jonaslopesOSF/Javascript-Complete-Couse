var database = [
    {
        username: "jonas",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo coooool."
    },
    {
        username: "Gray",
        timeline: "I'm with shame."
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password){
                return true;
        }
    }
    return false;
}

function signIn(username, password){
    
    if(isUserValid(username, password)){
        console.log(newsFeed);
    } else {
        alert("Sorry, wroong username or password or both"); 
    }
}

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

signIn(userNamePrompt, passwordPrompt);