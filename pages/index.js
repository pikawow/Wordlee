import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Home.module.css";
import useKeyup from '../hooks/useKeyup.js';
import GameBoard from '../components/Game/GameBoard';
import VirtualKeyBoard from '../components/VirtualKeyBoard/VirtualKeyBoard';

export default function Home() {

  // const {  } = useGame();
  const { words } = useKeyup();

  console.log('words', words);

  return (
    <div className={`nightmode ${styles.container}`}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <FontAwesomeIcon icon={faQuestionCircle} className={styles.icon} />
          </div>
          <div><h1>WORDLEE</h1></div>
          <div>
            <FontAwesomeIcon icon={faChartBar} className={styles.icon} />
            <FontAwesomeIcon icon={faCog} className={styles.icon} />
          </div>
        </header>
        <main className={styles.main}>
          <GameBoard lettersList={['apple', 'water']}/>
        </main>
        <footer className={styles.footer}>
          <VirtualKeyBoard />
        </footer>
      </div>
    </div>
  )
}
