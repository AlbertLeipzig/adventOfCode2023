import { lines } from './lines.js';
import * as util from './d_1.js';
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



export const findSingleHiddenNumber = (string) => {
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
export const replaceStringWithinString = (string, substr) => {
  let singleNumber = util.findSingleHiddenNumber(string);

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

export const findAllHiddenNumbers = (string) => {
  /* const replacedString = replaceStringWithinString(string); */
  /* console.log(replacedString); */
  const replacedString = replaceStringWithinString(string, []);

  return replacedString;
};

export const findNumber = (characters) => {
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

export const extractDigitsFromString = (string) => {
  const characters = findAllHiddenNumbers(string).split('');

  const firstNumber = findNumber(characters);
  const lastNumber = findNumber(characters.reverse());
  const number = parseInt(`${firstNumber}${lastNumber}`);
  return number;
};

export const calculateSetOfStringsValue = (strings) => {
  return strings.reduce(
    (total, line) => extractDigitsFromString(line, []) + total,
    0
  );
};
export const d1 = () => {
  return test(lines[225]);
};

export const test = (value) => value

