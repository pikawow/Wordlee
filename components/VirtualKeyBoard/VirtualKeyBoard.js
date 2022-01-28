import VirtualKeyBoardItem from './VirtualKeyBoardItem';
import { ENTER_KEY, BACK_KEY } from './VirtualKeyBoard.constants';
import styles from "../../styles/KeyBoard.module.css";

const VirtualKeyBoard = ({ result }) => {
  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    [ENTER_KEY, 'z', 'x', 'c', 'v', 'b', 'n', 'm', BACK_KEY],
  ];

  return (
    <div>{keys.map((rows) => {
      return (<div className={styles.row}>{rows.map((value) => {
        return (
          <VirtualKeyBoardItem value={value} result={result} />
        );
      })}</div>
      );
    })}</div>
  );
 };

 export default VirtualKeyBoard;
