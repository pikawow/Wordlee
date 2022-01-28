import React, { memo } from 'react';

import GameTile from './GameTile';
import styles from "../../styles/GameRow.module.css";

const GameRow = ({ letters, length }) => {
  let letterRow = [];
  
  for(let i = 0; i < length; i++) {
    const letter = letters[i];
    letterRow.push(<GameTile key={letter} letter={letter} />)
  }

  return (
    <div className={styles.row}>
      {letterRow}
    </div>
  )
}

export default memo(GameRow);
