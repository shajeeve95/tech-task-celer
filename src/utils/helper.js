export const sortDeckByCardRank = (deck) =>
  deck.sort((a, b) => {
    return b.cardRank - a.cardRank;
  });

export const sortDeckBySuitRank = (deck) =>
  deck.sort((a, b) => {
    return a.suitRank - b.suitRank;
  });

export const sortDeckByCardRankAndSuitRank = (deck) => {
  sortDeckByCardRank(deck);
  sortDeckBySuitRank(deck);
  return deck;
};

export const checkSuit = (card, suit) => {
  return card.suit === suit;
};

export const shuffleDeck = (deck) => {
  deck.sort(() => {
    return 0.5 - Math.random();
  });
  return deck;
};
