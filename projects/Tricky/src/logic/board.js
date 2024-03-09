import { ALL_COMBINATIONS } from '../constants';

export const checkWinner = (boardToCheck) => {

  for (let combination of ALL_COMBINATIONS) {
    const [a, b, c] = combination;
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a];
    }
  }

  return null;
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every(cell => cell !== null)
}