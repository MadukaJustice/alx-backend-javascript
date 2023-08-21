/**
 * A function that prints in STDOUT the message passed as parameter
 * @param message - the message to print
 */

function displayMessage(d) {
  process.stdout.write(`${d}\n`);
}

module.exports = displayMessage;
