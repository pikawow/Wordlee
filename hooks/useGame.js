import { State } from "../constants";
import { useCallback, useState, useEffect } from "react";
import solve from "../libs/solve";

const createGrid = (m, n) => new Array(m).fill(null).map(() => new Array(n));
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const createLetterState = letters.split("").reduce((acc, l) => {
  acc[l] = null;
})

const useGame = ({ answer }) => {
  // 
  const [currentRow, setCurrentRow] = useState(0);
  // 鍵盤狀態
  const [letters, setLetters] = useState(createLetterState());
  // Board狀態
  const [grid, setGrid] = useState(createGrid(5, 6));

  const reset = useCallback(() => {
    setGrid(createGrid(5, 6));
    setLetters(createLetterState());
  }, []);

  /**
   * @param row {string} - 答案(一行)
   */
  const submitRow = useCallback((row) => {
    const splitRow = row.split("");
    // e.g. [ABSENT, ABSENT, INCLUDE, INCLUDE, CORRECT]
    const result = solve(answer, splitRow);

    if(!result) return false;
    
    // keyboard 狀態
    setLetters(prevLetters => {
      // 好像不用這麼麻煩
      splitRow.forEach((l, i) => {
        prevLetters[l] = result[i];
      });
    });
    
    setGrid(prevGrid => {
      prevGrid[currentRow] = [...result];
    });

    return true;
  }, [answer, currentRow]);

  return {
    // 提交答案
    submitRow,
    // 重置整個遊戲
    reset,
    // Grid狀態
    grid,
    // 鍵盤狀態
    keyboard: letters,
  }
}

export default useGame;
