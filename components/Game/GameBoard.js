import React from "react";

import GameRow from './GameRow';

const GameBoard = ({ lettersList = [] }) => {
  return (
    <div>
      {
        lettersList.map(letters => {
          return (<GameRow letters={letters} length={5} />)
        })
      }
    </div>
  );
};

export default GameBoard;
