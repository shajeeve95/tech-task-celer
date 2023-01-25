import "./index.css";

import Card from "../../../components/card/index.js";
import React from "react";

const DrawCards = ({ drawnCards }) => {
  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
      {drawnCards.map((item, key) => (
        <Card value={item.value} suit={item.suit} key={key} />
      ))}
    </div>
  );
};

export default DrawCards;
