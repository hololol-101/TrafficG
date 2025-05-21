// ShowDetail.tsx
import { useEffect, useState } from 'react';
import styles from './ShowDetail.module.css';
import QueueModal from '../../components/modal/QueueModal';
import Button from '../../components/common/Button';
import { Show } from '../../types/show';
import { fetchShow } from '../../api/show';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const {id} = useParams<{id:string}>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState<Show | null>(null);


  const handleReserveClick = () => {
    setIsModalOpen(true);
  };

   useEffect(() => {
    if (!id) return;
    fetchShow(Number(id))
      .then(setShow)
      .catch(console.error);
  }, [id]);

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
     <Button onClick={handleReserveClick}>예매하기</Button>
      {isModalOpen && (
        <QueueModal total={200} position={22} onClose={() => setIsModalOpen(false)} />

      )}

    </div>
  );
};

export default ShowDetail;
