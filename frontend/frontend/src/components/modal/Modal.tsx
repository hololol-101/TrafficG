// src/components/common/Modal.tsx
import styles from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}


const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button onClick={onClose} className={styles.closeBtn}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
