const chalk = require('chalk');
const boxen = require('boxen');

const data = {
  name: chalk.bold.green("                   Ahmet Atar"),
  handle: chalk.white("@ahmetatar"),
  work: `${chalk.white("Lead Software Engineer at")} ${chalk
    .hex("#2b82b2")
    .bold("Amadeus")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("killprocs"),
  github: chalk.gray("https://github.com/") + chalk.green("ahmetatar"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("ahmet-atar"),
  web: chalk.cyan("https://medium.com/@ahmet.atar"),
  npx: chalk.red("npx") + " " + chalk.white("ahmetatar"),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

module.exports = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.whiteBright("I am a software engineer and a technology addict,")}`,
    `${chalk.whiteBright("I love digging new ideas and creating them by coding.")}`,
    `${chalk.whiteBright("Please contact me to work or discuss anything ")}`,
    `${chalk.whiteBright("I will definitely reply at my best time!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "green"
  }
);
