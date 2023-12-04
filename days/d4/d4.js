import { cards } from './input4.js';

const filterMatchingValues = (card) => {
  const [winningNums, myNums] = card;
  const prizeNums = myNums.filter((num) => {
    if (winningNums.includes(num)) {
      return num;
    }
  });

  const value = prizeNums.length === 0 ? 0 : Math.pow(2, prizeNums.length - 1);

  return value;
};

const getTotalCardsValue = (allCardsArray) => {
  return allCardsArray
    .map((array) => filterMatchingValues(array))
    .reduce((total, current) => total + current, 0);
};

// this result seems to be too low

export const d4 = () => {
  return getTotalCardsValue(cards);
};
