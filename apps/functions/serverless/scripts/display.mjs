import readline from 'readline';

export function clearScreen() {
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
}

let buffer = "";

export function log(message) {
  clearScreen();
  buffer = `${buffer}\n${message}`;
  console.log(buffer);
}