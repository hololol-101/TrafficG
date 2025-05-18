// ShowDetail.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ShowDetail.module.css';

interface Show {
  showId: number;
  name: string;
  detail: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
}

const ShowDetail = () => {
  const { showId } = useParams();
  const [show, setShow] = useState<Show | null>(null);
  useEffect(() => {
  const mock = {
    showId: 1,
    name: "SpongeBob's Guitar Performance",
    detail: "I'm not child!!!",
    imageUrl: "/src/assets/mock/spongebob.jpg",
    startDate: "2025-05-10",
    endDate: "2025-05-12"
  };

  setTimeout(() => {
    setShow(mock);
  }, 300); // 로딩 느낌 주고 싶으면 timeout, 아니면 바로 setShow(mock);
}, [showId]);

  /*
  useEffect(() => {
    // 실제 API로 대체
    fetch(`/api/shows/${showId}`)
      .then(res => res.json())
      .then(data => setShow(data));
  }, [showId]);
*/
  if (!show) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <img src={show.imageUrl} alt={show.name} className={styles.image} />
      <h2 className={styles.title}>{show.name}</h2>
      <p className={styles.date}>{show.startDate} ~ {show.endDate}</p>
      <p className={styles.detail}>{show.detail}</p>
      <button className={styles.reserveButton}>예매하기</button>
    </div>
  );
};

export default ShowDetail;
