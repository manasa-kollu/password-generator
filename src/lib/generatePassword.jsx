function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getRandomChar(text) {
  return text[Math.floor(Math.random() * text.length)];
}

export function generatePassword(config) {
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const SPECIALS = "!@#$%^&*()_-+=[]{};':\",./<>?\\";
  let result = "";
  let charsToSkip = 1;
  let alphabet = LOWERCASE;
  result += getRandomChar(LOWERCASE);

  if (config.uppercase) {
    alphabet += UPPERCASE;
    result += getRandomChar(UPPERCASE);
    charsToSkip++;
  }
  if (config.numbers) {
    alphabet += NUMBERS;
    result += getRandomChar(NUMBERS);
    charsToSkip++;
  }
  if (config.specials) {
    alphabet += SPECIALS;
    result += getRandomChar(SPECIALS);
    charsToSkip++;
  }

  for (let i = charsToSkip; i < Number(config.size); i++) {
    result += getRandomChar(alphabet);
  }
  return shuffle(result).join("");
}
