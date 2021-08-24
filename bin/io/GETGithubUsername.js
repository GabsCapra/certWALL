const prompt = require("prompt-sync")();

module.exports = function GETGithubUsername() {
    console.log("*****************************\n**");
    let user = prompt("** ENTER YOUR GITHUB USERNAME   ");
    console.log("**")


    return user;
}