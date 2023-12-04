import { schematic } from './input.js';

// transform every line to an array of objects { type : number (single digit) | symbol (*) | space (a), possition [line, index] }

const symbols = ['+', '-', '*', '/', '$', '%', '@', '#'];

const charactersArray = schematic.map((line, i) =>
  line.split('').map((char, j) => {
    char.trim();
    if (!isNaN(parseInt(char))) {
      return { type: 'number', possition: [i, j], value: parseInt(char) };
    } else if (symbols.includes(char)) {
      return { type: '*', possition: [i, j] };
    } else if (char === '.') {
      return { type: 'a', possition: [i, j] };
    }
  })
);

/* const filterSingleNumber = (int) => {
  charactersArray.flat().filter((char) => {
    if (
      int.possition[1] === char.possition[1] + 1 ||
      int.possition[1] === char.possition[1] - 1 ||
      int.possition[0] === char.possition[0] + 1 ||
      int.possition[0] === char.possition[0] + 1
    ) {
      return int;
    }
  });
}; */

/* const validNumbers = charactersArray.flat().filter((char) => {
  filterSingleNumber(char);
}); */

export const d3 = () => {
  /* return {charactersArray}; */
  /* return charactersArray; */
};
