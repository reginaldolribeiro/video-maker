const readline = require("readline-sync");
const robots = {
  userInput: require("./robots/user-input.js"),
  text: require("./robots/text.js")
};

function start() {
  const content = {};

  /* content.searchItem = askAndReturnSearchItem();
  content.prefix = askAndReturnPrefix(); */

  robots.userInput(content);
  robots.text(content);

  /* function askAndReturnSearchItem() {
    //return "TERM EXAMPLE";
    return readline.question("Type a Wikipedia search term: ");
  }

  function askAndReturnPrefix() {
    const prefixes = ["Who is", "What is", "The history of"];
    const selectedPrefixIndex = readline.keyInSelect(
      prefixes,
      "Choose one option: "
    );
    const selectedPrefixText = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  } */

  console.log(content);
}

start();
