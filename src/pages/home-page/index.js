import "./index.css";

import React, { useCallback, useEffect, useState } from "react";
import { reset, shuffle, sort } from "state";

import DrawCards from "./draw-cards";
import ShuffledCards from "./shuffled-cards";
import SortedCards from "./sorted-cards";
import { initialDeck } from "utils/constants";
import { shuffleDeck } from "../../utils/helper";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const [pageState, setPageState] = useState("home");

  const [deck] = useState([...initialDeck]);
  const [state, setState] = useState([]);

  const handleShuffle = useCallback(() => {
    dispatch(shuffle());
    setPageState("shuffle");
  }, [setPageState, dispatch]);

  const handleSort = useCallback(() => {
    dispatch(sort());
    setPageState("sorted");
  }, [setPageState, dispatch]);

  const handleHome = useCallback(() => {
    dispatch(reset());
    setPageState("home");
  }, [setPageState, dispatch]);

  const handleDraw = useCallback(() => {
    let a;
    if (deck.length > 0) {
      a = deck.pop();
      setState((oldstate) => [...oldstate, a]);
    }
  }, [deck, setState]);

  const handleReset = useCallback(() => {
    dispatch(reset());
    setState([]);
    shuffleDeck(deck);
    handleDraw();
  }, [dispatch, handleDraw, deck]);

  useEffect(() => {
    shuffleDeck(deck);
    handleDraw();
  }, [deck, handleDraw]);

  return (
    <div>
      <div className="page-wrapper">
        <button className="button" onClick={handleHome}>
          Home
        </button>
        {pageState === "home" && (
          <button className="button" onClick={handleDraw}>
            Draw Card
          </button>
        )}
        <button className="button" onClick={handleReset}>
          Reset
        </button>
        <button className="button" onClick={handleSort}>
          Sort Cards
        </button>
        <button className="button" onClick={handleShuffle}>
          Shuffle Cards
        </button>
      </div>
      <div>
        {pageState === "home" && <DrawCards drawnCards={[...state]} />}
        {pageState === "sorted" && <SortedCards />}
        {pageState === "shuffle" && <ShuffledCards />}
      </div>
    </div>
  );
};

export default Homepage;
