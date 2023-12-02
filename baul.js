/* export const findSingleNumber = (string) => {
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
}; */