const prompt = require("prompt-sync")();

module.exports = function GETReOrder(max, exec) {
    let condition = true;
    let result;

    if(exec==='start'){
        console.log("*****************************\n** WICH CERTIFICATE DO YOU WANT TO REORDER? \n** ( 0 ) TO EXIT\n**")

    } else if(exec==='to'){
        while (condition) {
            console.log("*****************************\n** CHOOSE A NEW POSITION TO SELECTED CERTIFICATE \n**\n** - min:'1', max:'"+max+"\n**")
            result = prompt("** ")
    
            if (parseInt(result)<=max) {
                condition = false;
            } else {
                console.log("** INVALID OPTION!!  PLEASE TRY AGAIN\n** ")
            }
            console.log("**")
        }
    } else if(exec==='from'){
        while (condition) {
            result = prompt("** ")
    
            if (parseInt(result)<=max) {
                condition = false;
            } else {
                console.log("** INVALID OPTION!!  PLEASE TRY AGAIN\n** ")
            }
            console.log("**")
        }
    }  else if(exec==="end"){
        console.log("** SUCCESSFUL \n**\n*****************************\n**")
    }


    return parseInt(result);
}