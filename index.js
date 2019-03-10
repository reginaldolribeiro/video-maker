const readline = require("readline-sync");

function start() {
  const content = {};

  content.searchItem = askAndReturnSearchItem();
  content.prefix = askAndReturnPrefix();

  function askAndReturnSearchItem() {
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
  }

  console.log(content);
}

start();
