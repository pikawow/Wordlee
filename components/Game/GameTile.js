import React, { memo } from "react";

import styles from "../../styles/GameTile.module.css";

const GameTile = ({ letter }) => {
  return (
    <div className={styles.host}>
      <div className={styles.tile}>{letter}</div>
    </div>
  );
};

export default memo(GameTile);
