#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let score = 0;
let totalQuestions = 4;

console.log(chalk.bold.greenBright("\t\tWelcome to Quiz System"));
console.log("=".repeat(60))

async function AskQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "Question1",
      choices: ["TypeScript Compiler" ," TypeScript Checker ","TypeScript Console","TypeScript Command"],
      message: (chalk.bold.bgBlueBright("What does tsc stand for??")),
    },
    {
      type: "list",
      name: "Question2",
      choices: ["type", "interface", "enum", "class"],
      message: (chalk.bold.bgBlueBright("Which keyword is used for defining types that can hold multiple values??")),
    },
    {
      type: "list",
      name: "Question3",
      choices: [".tt", ".tsx", ".nod", ".ts"],
      message:
        (chalk.bold.bgBlueBright("Which of the following filenames is the extension for typescript ?")),
    },
    {
      type: "list",
      name: "Question4",
      choices: ["readonly", "static", "!", "?"],
      message:
        (chalk.bold.bgBlueBright("Which TypeScript feature allows defining optional properties in interfaces?")),
    },
  ]);

  const marks = 10;
  const fail = 0;
  if (answers.Question1 === "TypeScript Compiler") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
    {
      console.log(chalk.bold.bgGreen("Answer is not correct\n"));
    };
  if (answers.Question2 === "enum") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
    {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };
  if (answers.Question3 === ".ts") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
 {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };
  if (answers.Question4 === "?") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
     {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };

    const percentageScore = (score / totalQuestions) * 100
    console.log(chalk.bold.green("Your total score : ",score + "\n" ));
    console.log(chalk.bold.green("Your percentage : "+ percentageScore +" %\n"));

}

AskQuestion()