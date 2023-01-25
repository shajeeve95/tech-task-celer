import "./index.css";

import {
  checkSuit,
  sortDeckByCardRank,
  sortDeckBySuitRank,
} from "../../../utils/helper.js";

import Card from "../../../components/card/index.js";
import React from "react";
import { useSelector } from "react-redux";

const SortedCards = () => {
  const deck = useSelector((state) => state.deck);

  const sortedDeck = [...deck];

  sortDeckByCardRank(sortedDeck);
  sortDeckBySuitRank(sortedDeck);

  const sortedDeckSpades = sortedDeck.filter((e) => checkSuit(e, "spade"));
  const sortedDeckClubs = sortedDeck.filter((e) => checkSuit(e, "club"));
  const sortedDeckHearts = sortedDeck.filter((e) => checkSuit(e, "heart"));
  const sortedDeckDiamonds = sortedDeck.filter((e) => checkSuit(e, "diamond"));

  return (
    <div className="container">
      {sortedDeckSpades.map((item, key) => (
        <Card value={item.value} suit={item.suit} key={key} />
      ))}
      {sortedDeckClubs.map((item, key) => (
        <Card value={item.value} suit={item.suit} key={key} />
      ))}
      {sortedDeckHearts.map((item, key) => (
        <Card value={item.value} suit={item.suit} key={key} />
      ))}
      {sortedDeckDiamonds.map((item, key) => (
        <Card value={item.value} suit={item.suit} key={key} />
      ))}
    </div>
  );
};

export default SortedCards;
