var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
const warning = chalk.keyword('orange');
const violet = chalk.keyword('violet');
const lastMessage= chalk.keyword('yellow');

console.log(chalk.bold.green("HEY,<*-*>"));
var userName = readlineSync.question(chalk.bold.white.bgRed("What's your name?  \n"));

console.log( chalk.bold.green("WELCOME ") + chalk.green(userName.toUpperCase()) + "!!!");
console.log(chalk.blue("~~~~~~~~~~~~~~~~~~~"));

var city = chalk.green.bold("BANGALORE");
console.log(warning("Let's Play!! Quick Quiz on,\nHow much you know about " + city ));
console.log('\n');

console.log(chalk.white.bgBlue.bold.underline("Guidelines to play quiz!!!\n"));
console.log(violet('1. There are 5 questions.'));
console.log(violet('2. You will get 2 points for right answer .'))
console.log(violet('3. 1 point will be deducted for wrong answer.'));
console.log(violet('4. You have to choose a/b/c/d in the given options\n '))



function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You are right!!! :-) "));
    score = score + 2;
  }
  else{
    console.log(chalk.red("You are wrong :-( "))
    score = score - 1;
  }
  console.log("current score : " + score);
  console.log(violet("---------------------------\n"))
}

var questions = [{
question: chalk.bold.red("1. In which state of India is Bangalore located?\n\t a. Kerala \n\t b. Tamil Nadu \n\t c. Andra Pradesh \n\t d. Karnataka\n\t"),
answer: "d"
},
{
 question:chalk.bold.cyan("2. What was the old name of Bangalore?\n\t a. Mysore \n\t b. None of these \n\t c. Madras \n\t d. Indraprastha\n\t "),
answer: "b"
},
{
 question:chalk.bold.magenta("3. Bangalore is also known as the _________ city of India. \n\t a. Garden \n\t b. Jewel \n\t c. Pink \n\t d. Temple\n\t"),
answer: "a"
},
{
 question:chalk.bold.yellow("4. Bangalore has its own palace - the Bangalore Palace.\n Which royal dynasty owned this palace?\n\t a. Holkar\n\t b. Scindia\n\t c. Wodeyar\n\t d. Peshwa\n\t"),
answer: "c"
},
{
 question:chalk.bold.blueBright("5. Bangalore was the first city in India to have electricity.?\n\t a. True\n\t b. False\n\t "),
answer: "a"
},
];

for(var i=0; i < questions.length; ++i)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(lastMessage("YAY!! Congratulations,", "\n Your Total Score is : " + score));
console.log("\n Thanks for playing quiz. Hope you enjoyed it!!!!")
console.log(chalk.blueBright("Have a good day :-)"))
