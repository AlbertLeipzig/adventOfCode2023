import { schematic } from './input.js';

// transform every line to an array of objects { type : number (single digit) | symbol (*) | space (a), possition [line, index] }

// check every number
// if character type === "number" character.possition[y (+/-) 1, x (+/-)1].type === symbol, then it's valid

// every validNumber must check then if character.possition[y ===, x(+/-)1].type === "number".

//Every true must be added in the rigth possition

// add all numbers

// the rightNumberArray must be reduced()

const charactersMap = schematic.map((line, i) =>
  line.split('').map((char, j) => {
    char.trim();
    if (
      char === '0' ||
      char === '1' ||
      char === '2' ||
      char === '3' ||
      char === '4' ||
      char === '5' ||
      char === '6' ||
      char === '7' ||
      char === '8' ||
      char === '9'
    ) {
      return { type: 0, possition: [i, j] };
    } else if (
      char === '*' ||
      char === '+' ||
      char === '$' ||
      char === '-' ||
      char === '*' ||
      char === '/' ||
      char === '@' ||
      char === '#' ||
      char === '%'
    ) {
      return { type: '*', possition: [i, j] };
    } else if (char === '.') {
      return { type: 'a', possition: [i, j] };
    } else {
      return 'X';
    }
  })
);
const value = charactersMap;

/*  */
export const d3 = () => {
  return value;
};
