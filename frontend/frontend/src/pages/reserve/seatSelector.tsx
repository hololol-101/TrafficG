import styles from './seatSelector.module.css';
import { useState } from 'react';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { reserveSeat } from '../../api/reserve';
import { useParams } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const reservedSeats = ['B5', 'C6', 'D7']; // 예매 완료된 좌석 (예시)

const SeatSelector = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { id } = useParams<{ id: string }>();

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const seatMap: (string | null)[][] = [
    ['A1', 'A2', null, 'A3', 'A4', 'A5', 'A6', null, 'A7', 'A8'],
    ['B1', 'B2', null, 'B3', 'B4', 'B5', 'B6', null, 'B7', 'B8'],
    ['C1', 'C2', null, 'C3', 'C4', 'C5', 'C6', null, 'C7', 'C8'],
    ['D1', 'D2', null, 'D3', 'D4', 'D5', 'D6', null, 'D7', 'D8'],
    ['E1', 'E2', null, 'E3', 'E4', 'E5', 'E6', null, 'E7', 'E8'],
    ['F1', 'F2', null, 'F3', 'F4', 'F5', 'F6', null, 'F7', 'F8'],
  ];

const handleSelect = (seatId: string) => {
  // 이미 선택된 좌석이면 제거
  if (selectedSeats.includes(seatId)) {
    setSelectedSeats(prev => prev.filter(id => id !== seatId));
    return;
  }

  // 최대 4개 제한
  if (selectedSeats.length >= 4) {
    alert('최대 4개까지 선택 가능합니다.');
    return;
  }

  setSelectedSeats(prev => [...prev, seatId]);
};

const handlePayment = async () => {
  try {
    const result = await reserveSeat({
      showId: Number(id),
      seats: selectedSeats,
      userId: Number(user?.id)
    });
    
     const paymentData = {
      showId: Number(id),
      reservationId: result.id,
      seats: selectedSeats,
      totalAmount: 6000 * selectedSeats.length,
    };
    navigate('/payment', {state:paymentData});
  } catch (error: any) {
    alert(error.message);
  }
};


  return (
    <div className={styles.container}>
      <div className={styles.screen}>SCREEN</div>
        <div className={styles.grid}>
          {seatMap.map((row, rowIdx) =>
            row.map((seatId, colIdx) =>
              seatId ? (
                <button
                  key={seatId}
                  className={`${styles.seat} ${
                    reservedSeats.includes(seatId)
                      ? styles.reserved
                      : selectedSeats.includes(seatId)
                      ? styles.selected
                      : ''
                  }`}
                  onClick={() => handleSelect(seatId)}
                  disabled={reservedSeats.includes(seatId)}
                >
                  {seatId}
                </button>
              ) : (
                <div key={`empty-${rowIdx}-${colIdx}`} className={styles.empty}></div>
              )
            )
          )}
      </div>
      <div className={styles.paymentBox}>
        <p>선택한 좌석: {selectedSeats.join(', ')}</p>
      </div>
      <Button onClick={handlePayment}>결제하기</Button>

    </div>
  );
};

export default SeatSelector;
