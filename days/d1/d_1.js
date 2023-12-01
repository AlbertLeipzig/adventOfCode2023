const lines = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

const findNumber = (characters) => {
  let number;
  characters
    .map((char) => parseInt(char))
    .forEach((char) => {
      if (number !== undefined) {
        return;
      }
      if (!isNaN(char)) {
        number = char;
      }
    });
  return number;
};

const extractDigitsFromString = (string) => {
  const characters = string.split('');

  const firstNumber = findNumber(characters);
  const lastNumber = findNumber(characters.reverse());
  const number = parseInt(`${firstNumber}${lastNumber}`);
  return number;
};

const calculateSetOfStringsValue = (strings) => {
  return strings.reduce((total, line) => extractDigitsFromString(line) + total, 0);
};

export const d1 = () => {
  return calculateSetOfStringsValue(lines);
};
