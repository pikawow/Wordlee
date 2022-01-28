// import useGame from '../../hooks/useGame';
import styles from "../../styles/KeyBoard.module.css";

const VirtualKeyBoardItem = ({ value, result }) => {


  return (
    <button className={styles.button}>{value}</button>
  );
 };

 export default VirtualKeyBoardItem;
