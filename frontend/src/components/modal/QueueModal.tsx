import React, { useEffect, useState } from 'react';
import styles from './QueueModal.module.css';

interface QueueModalProps {
  total: number;
  position: number;
  onClose: () => void;
}

const QueueModal = ({ total, position, onClose }: QueueModalProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = ((total - position) / total) * 100;
    setProgress(percentage);
  }, [position, total]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>예매 대기중입니다</h2>
        <p>전체 대기 인원수: {total}</p>
        <p>남은 인원수: {position}</p>
        <p>당신의 순서: {total - position + 1}</p>

        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
          <div className={styles.runner} style={{ left: `${progress}%` }} />
        </div>

        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default QueueModal;
