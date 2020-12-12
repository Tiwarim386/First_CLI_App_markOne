

const chalk = require('chalk')
var readLineSync = require("readline-sync")
var username = readLineSync.question("Hello There! What's your Name? \n")
console.log(chalk.yellow("Welcome To the Quiz! Mohit's friend: " + username ))
console.log(chalk.magentaBright("Lets get Started \n"))

var score=0;

function play(question, answer) {
  var userAnswer = readLineSync.question(chalk.cyan(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
  console.log(chalk.green("YAY! You're right!! \n"));
  console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
  score = score + 1
  }
else{
  console.log(chalk.red("BOO! You're wrong!! \n"))
  console.log("--------------")
  }
}
var questionOne = {
  question:"where does Mohit live ? \n ",
  answer:"Gwalior",
  }

var questionTwo = { 
  question:"What is Mohit's favorite color? \n",
  answer:"Black",
}

var questionThree= {
  question:"What is Mohit's favourite? Quora/Instagram/Facebook/Whatsapp/LinkedIn/Snapchat?\n",
  answer: "Quora",
}
var questionFour = { 
  question:"When is Mohit's birthday?  You NEED to get this Right \n",
  answer:"6 february",
}

var questionFive= {
  question:"Where does Mohit study? \n",
  answer: "Jaipur",
}
var questionList = [questionOne, questionTwo, questionThree,questionFour,questionFive]

for(var i=0; i<questionList.length; i++) {
  currentQuestion = questionList[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.cyan("Your Final Score is: " + score + "\n"))
console.log(chalk.magentaBright("Thanks for playing the quiz "+ username))