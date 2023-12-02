import { lines } from './lines.js';
const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const findSingleHiddenNumber = (string) => {
  let substrings = [];

  for (let i = 0; i < string.length; i++) {
    substrings.push(string.substring(i, i + 3)),
      substrings.push(string.substring(i, i + 4)),
      substrings.push(string.substring(i, i + 5));
  }

  let hiddenNumber;

  numbers.forEach((number) =>
    substrings.forEach((substring) => {
      if (number === substring) {
        hiddenNumber = number;
      }
    })
  );

  return hiddenNumber;
};

const replaceStringWithinString = (string, substr) => {
  let singleNumber = findSingleHiddenNumber(string);

  let substrings = [];
  if (!singleNumber) {
    return substr || [];
  }

  if (substr) {
    substrings = [...substr];
    const index = string.indexOf(singleNumber);
    const length = singleNumber.length;
    const before = string.slice(0, index);
    const after = string.slice(index + length);
    substrings = [...substrings, before, numbers.indexOf(singleNumber) + 1];

    if (string.length > 2) {
      substrings = replaceStringWithinString(after, substrings);
    }
  }

  const cleanString = Object.values(substrings).reduce(
    (total, current) => total + current,
    ''
  );

  return cleanString;
};

const findAllHiddenNumbers = (string) => {
  /* const replacedString = replaceStringWithinString(string); */
  /* console.log(replacedString); */
  const replacedString = replaceStringWithinString(string, []);

  return replacedString;
};

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
  const characters = findAllHiddenNumbers(string).split('');

  const firstNumber = findNumber(characters);
  const lastNumber = findNumber(characters.reverse());
  const number = parseInt(`${firstNumber}${lastNumber}`);
  return number;
};

const calculateSetOfStringsValue = (strings) => {
  return strings.reduce(
    (total, line) => extractDigitsFromString(line) + total,
    0
  );
};

export const d1 = () => {
  /* return calculateSetOfStringsValue(lines); */
  return replaceStringWithinString('449three45three', []);
};
