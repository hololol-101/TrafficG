import React from 'react';
import styles from './buttonWrapper.module.css';

interface ButtonWrapperProps {
  children: React.ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <div className={styles.buttonWrapper}>{children}</div>;
};

export default ButtonWrapper;
