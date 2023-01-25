import "./index.css";

import ClubsImg from "../../assets/suit-clubs.png";
import DiamondImg from "../../assets/suit-diamond.png";
import HeartImg from "../../assets/suit-heart.png";
import React from "react";
import SpadeImg from "../../assets/suit-spade.png";

const Card = ({ value, suit }) => {
  let suitImg;

  switch (suit) {
    case "spade":
      suitImg = (
        <img
          src={SpadeImg}
          style={{ height: "30px", width: "30px" }}
          alt="spade"
        />
      );
      break;
    case "club":
      suitImg = (
        <img
          src={ClubsImg}
          style={{ height: "30px", width: "30px" }}
          alt="club"
        />
      );
      break;
    case "heart":
      suitImg = (
        <img
          src={HeartImg}
          style={{ height: "30px", width: "30px" }}
          alt="heart"
        />
      );
      break;
    case "diamond":
      suitImg = (
        <img
          src={DiamondImg}
          style={{ height: "30px", width: "30px" }}
          alt="diamond"
        />
      );
      break;
    default:
      suitImg = <img src={null} alt="none" />;
  }
  return (
    <div className="card-container">
      <div>
        {value}
        <br />
        {suitImg}
      </div>
      <div className="card-container_bottom">
        {suitImg}
        <br />
        {value}
      </div>
    </div>
  );
};

export default Card;
