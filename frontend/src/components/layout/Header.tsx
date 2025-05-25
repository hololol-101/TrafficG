import { useUser } from '../../contexts/UserContext';
import styles from './Header.module.css';

const Header = () => {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>비키니시티 예매 플랫폼</h1>
      {user && <p className={styles.welcome}>어서오세요, {user.name}님!</p>}
    </header>
  );
};

export default Header;
