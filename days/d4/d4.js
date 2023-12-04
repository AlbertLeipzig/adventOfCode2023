import { cards } from './input4.js';

const filterMatchingValues = (card) => {
  const [winningNums, myNums] = card;
  const prizeNums = myNums.filter((num) => {
    if (winningNums.includes(num)) {
      return num;
    }
  });

  return prizeNums.length < 1 ? 0 : Math.pow(2, prizeNums.length);
};

const getTotalCardsValue = (allCardsArray) => {
  return allCardsArray
    .map((array) => filterMatchingValues(array))
    .reduce((total, current) => total + current, 0);
};

// this result seems to be too high

export const d4 = () => {
  return getTotalCardsValue(cards);
};
