const prompt = require("prompt-sync")();

module.exports = function GETOptions() {
  let condition = true;
  let confirm;

  while (condition) {
    console.log("*****************************\n** CHOOSE AN OPTION\n**\n** ( 1 ) UPDATE SETTINGS\n** ( 2 ) UPDATE CERTIFICATES\n** ( 3 ) RE-ORDER CERTIFICATES\n**\n** ( 0 ) EXIT")
    confirm = prompt("** ")

    if (parseInt(confirm) <= 4) {
      condition = false;
    } else {
      console.log("** INVALID OPTION!!  PLEASE TRY AGAIN\n** ")
    }
    console.log("**")
  }

  return confirm;
}
