import "./index.css";

import Card from "../../../components/card/index.js";
import React from "react";
import { useSelector } from "react-redux";

const ShuffledCards = () => {
  const deck = useSelector((state) => state.deck);

  return (
    <div className="container">
      {deck.map((item, key) => (
        <Card value={item.value} suit={item.suit} key={key} />
      ))}
    </div>
  );
};

export default ShuffledCards;
