const prompt = require("prompt-sync")();
const READProperties = require('../op/READProperties');
module.exports = function GETGithubUsername() {
    let condition = true;
    let user;
    while (condition) {
        console.log("*****************************\n**");
        console.log("** CHOOSE YOUR THEME:\n** 1 - minimalist\n** 2 - swampmoss\n** 3 - rarecandy\n** 4 - githublight\n** 5 - githubdark")
        user = prompt('**');
        console.log("**")



        if ((user === '1') || (user.toLowerCase() === 'minimalist')) {
            user = 'minimalist'
        } else if ((user === '2') || (user.toLowerCase() === 'swampmoss')) {
            user = 'swampmoss'
        } else if ((user === '3') || (user.toLowerCase() === 'rarecandy')) {
            user = 'rarecandy'
        } else if ((user === '4') || (user.toLowerCase() === 'githublight')) {
            user = 'githublight'
        } else if ((user === '5') || (user.toLowerCase() === 'githubdark')) {
            user = 'githubdark'
        }
        if(user!==READProperties.style){
            condition=false;
        } else {
            console.log("** THEME  ALREADY SELECTED\n** PLEASE SELECT ANOTHER:")

        }
    }

    return user.toLowerCase();
}