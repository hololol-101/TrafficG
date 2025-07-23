// Payment.tsx
import { useLocation } from 'react-router-dom';
import styles from './Payment.module.css';
import Button from '../../components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paymentConfirm } from '../../api/payment';
import { useUser } from '../../contexts/UserContext';

const Payment = () => {
  const { user } = useUser();
  const { state } = useLocation();
  const { showId, reservationId, seats, totalAmount } = state || {};
  const [paymentMethod, setPaymentMethod] = useState('신용카드'); // 기본값
  const navigate = useNavigate();

   const handleConfirm = async (e: React.FormEvent) => {
      e.preventDefault(); // 새로고침 막기
  
      try {
        await paymentConfirm({
              userId: Number(user?.id),
              reservation_id: Number(reservationId),
              amount: totalAmount?.toLocaleString(),
              status: "Success"
            });
        navigate('/payment/success'); // 👉 이동
        // 여기에 로그인 성공 후 로직 (예: 페이지 이동, 상태 저장 등)
      } catch (err: any) {
        alert(err.message);
      }
    };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>결제 정보 확인</h2>
      <div className={styles.infoBox}>
        <p><strong>공연 ID:</strong> {showId}</p>
        <p><strong>선택 좌석:</strong> {seats?.join(', ')}</p>
        <p><strong>총 금액:</strong> {totalAmount?.toLocaleString()}원</p>
      </div>

      <div className={styles.paymentMethods}>
        <p>결제수단</p>
        {['신용카드', '카카오페이', '토스페이', '계좌이체'].map(method => (
          <label
            key={method}
            className={`${styles.methodButton} ${paymentMethod === method ? styles.selected : ''}`}
          >
            <input
              type="radio"
              name="payment"
              value={method}
              checked={paymentMethod === method}
              onChange={() => setPaymentMethod(method)}
            />
            {method}
          </label>
        ))}
      </div>


      <div className={styles.confirmBox}>
        <Button type="submit" onClick={handleConfirm}>결제 진행</Button>
      </div>
    </div>
  );
};

export default Payment;
