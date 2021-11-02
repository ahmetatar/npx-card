#!/usr/bin/env node

const chalk = require("chalk");
const open = require("open");
const card = require("./card");
const inquirer = require("inquirer");
const clear = require('clear');

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me and ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:ahhmetatar@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `See my latest ${chalk.hex('#2b82b2').bold("blog posts")}`,
        value: () => {
          open('https://medium.com/@ahmet.atar')
        }
      },
      {
        name: "Just quit",
        value: () => {
          console.log(
            "If you're brave enough to say goodbye, life will reward you with a new hello :P"
          );
        },
      },
    ],
  },
];

const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");

clear();
console.log(card);
console.log(tip);

const prompt = inquirer.createPromptModule();
prompt(questions).then((answer) => answer.action());
