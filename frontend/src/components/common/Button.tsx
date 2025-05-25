import React from 'react';
import styles from './Button.module.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large'; // 크기 props 추가
}

const Button = ({ children, className = '', size = 'medium', ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}, ${styles[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
