export const cardValues = [
  { value: "A", rank: 13 },
  { value: "2", rank: 12 },
  { value: "3", rank: 11 },
  { value: "4", rank: 10 },
  { value: "5", rank: 9 },
  { value: "6", rank: 8 },
  { value: "7", rank: 7 },
  { value: "8", rank: 6 },
  { value: "9", rank: 5 },
  { value: "10", rank: 4 },
  { value: "J", rank: 3 },
  { value: "Q", rank: 2 },
  { value: "K", rank: 1 },
];

export const suitValues = [
  { value: "club", rank: 4, color: "black" },
  { value: "diamond", rank: 3, color: "red" },
  { value: "heart", rank: 2, color: "red" },
  { value: "spade", rank: 1, color: "black" },
];

let deck = [];

suitValues.forEach((suit) => {
  cardValues.forEach((card) => {
    deck.push({
      value: card.value,
      suit: suit.value,
      cardRank: card.rank,
      suitRank: suit.rank,
    });
  });
});

export const initialDeck = deck;
