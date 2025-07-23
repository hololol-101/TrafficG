import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import styles from './Header.module.css';

const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>비키니시티 예매 플랫폼</h1>
       {user ? (
        <p className={styles.welcome}>어서오세요!!!, {user.name}님!</p>
        ) : (
        <Link to="/login">로그인</Link>
        )}
      </header>
)};

export default Header;
