import { shuffleDeck, sortDeckByCardRankAndSuitRank } from "utils/helper";

import { createSlice } from "@reduxjs/toolkit";
import { initialDeck } from "utils/constants";

export const deckSlice = createSlice({
  name: "deck",
  initialState: {
    deck: initialDeck,
  },
  reducers: {
    sort: (state) => {
      state.deck = sortDeckByCardRankAndSuitRank(state.deck);
    },
    reset: (state) => {
      state.deck = initialDeck;
    },
    shuffle: (state) => {
      state.deck = shuffleDeck(state.deck);
    },
    draw: (state) => {
      state.deck =
        !!state.deck &&
        state.deck.filter((_, i) => i !== state.deck.length - 1);
    },
  },
});

export const { sort, reset, shuffle, draw } = deckSlice.actions;

export default deckSlice.reducer;
