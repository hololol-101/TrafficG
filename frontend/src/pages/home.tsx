// src/pages/Home.tsx

import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.hero}>
            <h1 className={styles.title}>Welcome to Bikini Bottom Box Office</h1>
            <p className={styles.subtitle}>Reserve Your Coral Seat Today</p>
            <Link to="/showList" className={styles.cta}>예매하러 가기!!</Link>
        </div>
    </div>

  );
};

export default Home;
