#! /usr/bin/env node
import inquirer from "inquirer";
// 1> computer will generate a random number
// 2> user input for guessing number
// 3> compare user input with computer generated number and show number
const randomnumber = Math.floor(Math.random());
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guessed a number between 1-10:",
    }
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("Congratulation You Guessed The Right Number");
}
else {
    console.log("You Guessed the Wrong Number");
}
