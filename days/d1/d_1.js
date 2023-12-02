import { lines } from './lines.js';
const stringNumbers = [
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

const replaceStringByNumber = (string) => {
  return stringNumbers.indexOf(string) + 1;
};

export const findStringValue = (string) => {
  const firstInt = string.charAt(0);
  const lastInt = string.charAt(string.length - 1);
  return `${firstInt}${lastInt}`;
};

export const findHiddenNumbers = (string) => {
  let substrings = [];

  for (let i = 0; i < string.length; i++) {
    if (string.length > 2) {
      if (!isNaN(string.split('')[i])) {
        substrings = [...substrings, string.split('')[i]];
      } else if (stringNumbers.includes(string.slice(i, i + 3))) {
        substrings = [
          ...substrings,
          replaceStringByNumber(string.slice(i, i + 3).trim()),
        ];
      } else if (stringNumbers.includes(string.slice(i, i + 4))) {
        substrings = [
          ...substrings,
          replaceStringByNumber(string.slice(i, i + 4).trim()),
        ];
      } else if (stringNumbers.includes(string.slice(i, i + 5))) {
        substrings = [
          ...substrings,
          replaceStringByNumber(string.slice(i, i + 5).trim()),
        ];
      }
    }
  }

  const stringValue = findStringValue(substrings.join(''));

  return stringValue;
};

export const getTotalStringsArrayValue = (stringsArray) => {
  return stringsArray
    .map((string) => parseInt(findHiddenNumbers(string)))
    .reduce((total, current) => {
      if (!isNaN(current)) {
        return current + total;
      }
      return total;
    }, 0);
};

const inputValue = lines[225];
const expectedOutput = '91499415';

export const d1 = () => {
  console.log('input value: ', inputValue);
  console.log('expected output : ', expectedOutput);
  return getTotalStringsArrayValue(lines);
};
