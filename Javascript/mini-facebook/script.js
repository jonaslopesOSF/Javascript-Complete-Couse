var database = [
    {
        username: "jonas",
        password: "supersecret"
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
    }
];

function signIn(username, password){
    if(username === database[0].username && 
       password === database[0].password){
        console.log(newsFeed);
    } else {
        alert("Sorry, wroong username or password or both")
    }
}

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

signIn(userNamePrompt, passwordPrompt);