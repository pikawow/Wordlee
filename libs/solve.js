import { STATE } from "../constants";
import words from "./words";

/**
 * @param {string[]} answer - 答案
 * @param {string[]} guess - 猜測
 * @return {string[]|boolean} result - 比對結果, 回傳 false 代表猜測詞不在詞庫裡面
 */
const solve = (answer, guess) => {
  // CLOUD
  const letterState = guess.map(l => ({
    state: null,
    letter: l,
  }));

  // 猜測的詞不在詞庫裡面
  if(!words.includes(guess)) return false;

  // 比對字對且位置對的
  letterState.forEach((o, i) => {
    if(answer[i] === o.letter) {
      o.state = State.CORRECT;
    }
  });

  // 比對字對但位置不對
  letterState.forEach((o, i) => {
    if(answer.includes(o.letter)) {
      o.state = State.INCLUDE;
    }
  });

  letterState.forEach((o, i) => {
    // 上面情況都不符合的話
    if(!o.state) {
      o.state = State.ABSENT;
    }
  })

  return letterState.map(s => s.state);
}

export default solve;
