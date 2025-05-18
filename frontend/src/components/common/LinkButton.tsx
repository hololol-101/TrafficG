import { Link, LinkProps } from 'react-router-dom';
import styles from './LinkButton.module.css';

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
}

const LinkButton = ({ children, ...props }: LinkButtonProps) => {
  return (
    <Link className={styles.button} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
