const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const francCode = franc(input);
const language = langs.where("3", francCode);
if (francCode === "und") {
  console.log(
    "We cant find the language you are looking for, pleace try with more words"
      .red
  );
  console.log(
    `Remember to use quotation mark after node index.js, and at the end`.red
  );
} else {
  console.log(`Best Guess is: ${language.name.green}`);
}
