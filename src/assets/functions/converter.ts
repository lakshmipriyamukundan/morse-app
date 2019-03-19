const alphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ","
};

export const morseToText = msg => {
  let messageConverted = "";

  msg.split("   ").map(function(word) {
    word.split(" ").map(function(letter) {
      messageConverted = messageConverted + alphabet[letter];
    });
    messageConverted = messageConverted + " ";
  });

  return messageConverted;
};

export const plainToMorse = msg => {
  let messageConverted = "";

  msg.split(" ").map(function(word) {
    word.split("").map(function(letter) {
      messageConverted =
        messageConverted +
        Object.keys(alphabet)[Object.values(alphabet).indexOf(letter)] +
        "/";
    });
    messageConverted = messageConverted + " ";
  });

  return messageConverted;
};
